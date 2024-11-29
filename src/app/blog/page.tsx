'use client';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { StaticBanner } from "@/components/StaticBanner";
import htmlParser from "html-react-parser";
import { useAuthStore } from "@/store/AuthStore";
import Modal from "@/components/modal";
import { useBlogStore } from "@/store/BlogStore";
import Link from 'next/link';

export interface IArticle {
  id: number;
  title: string;
  content: string;
  image_url: string;
}

export default function Blog() {
  const articles = useBlogStore((state) => state.articles);
  const loading = useBlogStore((state) => state.loading);
  const fetchBlogs = useBlogStore((state) => state.fetchBlogs);
  const deleteBlog = useBlogStore((state) => state.deleteBlog);
  const [selectedArticle, setSelectedArticle] = useState<IArticle | null>(null);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [isModalOpen, setIsModalOpen] = useState(false);
 /*  const router = useRouter(); */

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const handleDelete = async (id: string ) => {
    await deleteBlog(id);
    fetchBlogs();
  };

  const handleEdit = (article: IArticle) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  return (
    <>
      <StaticBanner
        backgroundImage="/investigacion.jpg"
        subtitle="Blog"
        title="Conoce investigaciones sobre TDAH"
      />
      <div className="p-5 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="font-bold text-center text-blue-700 mb-10">
            <span className="text-3xl p-5">Artículos Recientes</span>
            {isAuthenticated && <button
                className="px-4 py-2 bg-green-700 text-white font-semibold rounded hover:bg-green-800 transition duration-300"
                onClick={() =>{ 
                  setIsModalOpen(true)
                  setSelectedArticle(null)
                }}
              >
                Crear artículo
              </button>}
          </div>
          {loading ? <p>Cargando...</p> :
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article : IArticle) => (
              <div key={article.id} className="bg-white text-xs rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                {isAuthenticated && (
                  <div className="absolute" >
                  <button
                  className=" px-4 py-2 bg-red-700 text-white font-semibold rounded hover:bg-red-800 transition duration-300"
                  onClick={() => handleDelete((article.id).toString())}
                >
                      Eliminar
                </button>
                <button
                  className="absolute px-4 py-2 bg-green-700 text-white font-semibold rounded hover:bg-green-800 transition duration-300"
                  onClick={() => handleEdit(article)}
                >
                      edictar
                </button>
                  </div>
                ) }
                
                <img src={article.image_url} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">{htmlParser(article.title)}</h3>
                  <p className="text-gray-700 mb-4 line-clamp-4">{htmlParser(article.content)}</p>
                  <Link href={`/blog/${article.id}`}>
                  <button className="px-4 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition duration-300"
                  >
                    Leer más
                  </button>
                  </Link>
                  
                </div>
              </div>
            ))}
          </div>
      }
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} article={selectedArticle} />
    </>
  );
}