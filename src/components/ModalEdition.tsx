import { IImage } from '@/app/page';
import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (url: string, description: string) => void;
  onDelete: (image_id: string) => void;
  images: IImage[];
}

const ModalEdition: React.FC<ModalProps> = ({ isOpen, onClose, onSave, onDelete, images }) => {
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleSave = () => {
      onSave(url, description);
      setUrl('');
      setDescription('');
      setSelectedImage(null);
    
  };

  const handleDelete = () => {
    if (selectedImage) {
      onDelete(selectedImage);
      setSelectedImage(null);
    }
  };

  const handleImageSelect = (id: string) => {
    console.log('Image selected in modal edition:', id);
    setSelectedImage(id === selectedImage ? null : id);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Crear Imagen</h2>
        <input
          type="text"
          placeholder="URL de la imagen"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <div className="flex justify-between">
          <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">
            Guardar
          </button>
          <button onClick={() => { setUrl(''); setDescription(''); }} className="px-4 py-2 bg-gray-500 text-white rounded">
            Limpiar
          </button>
        </div>
        <h2 className="text-xl font-bold mt-6 mb-4">Eliminar Imágenes</h2>
        <div className="grid grid-cols-2 gap-2">
          {images.map((image) => (
            <div key={image.id} className="relative">
              <img
                src={image.image_url}
                alt="Imagen"
                className={`w-full h-24 object-cover rounded cursor-pointer ${selectedImage === image.id ? 'border-4 border-red-500' : ''}`}
                onClick={() => handleImageSelect(image.id)}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded">
            Eliminar
          </button>
          <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEdition;