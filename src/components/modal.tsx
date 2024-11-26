import { useState, useEffect } from 'react';
import { useBlogStore } from "@/store/BlogStore";
import { IArticle } from '@/app/blog/page';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  article?: IArticle | null;
}

const Modal = ({ isOpen, onClose, article }: ModalProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const createBlog = useBlogStore((state) => state.createBlog);
  const updateBlog = useBlogStore((state) => state.updateBlog);
  const fetchBlogs = useBlogStore((state) => state.fetchBlogs);

  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setContent(article.content);
      setImage(article.image_url);
    } else {
      handleClear();
    }
  }, [article]);

  const handleCreate = async () => {
    try {
      if (article) {
        await updateBlog(String(article.id), title, content, image);
        fetchBlogs();
      }else{
        await createBlog(title, content, image)
      }
      
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleClear = () => {
    setTitle('');
    setContent('');
    setImage('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{article ? 'Editar Artículo' : 'Crear Artículo'}</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Contenido</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Imagen</label>
            <input
              id="image_url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-end space-x-2">
          {!article && (
              <button
              type="button"
              onClick={handleClear}
              className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded hover:bg-gray-400 transition duration-300"
            >
              Limpiar
            </button>
          )}
            
            <button
              type="button"
              onClick={handleCreate}
              className="px-4 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition duration-300"
            >
              {article ? 'Actualizar' : 'Crear'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;