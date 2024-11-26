'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useBlogStore } from '@/store/BlogStore';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface IArticle {
  id: string;
  title: string;
  content: string;
  image_url: string;
}

const BlogPost = () => {
  const params = useParams();
  const id = params?.id as string | undefined;
  const [article, setArticle] = useState<IArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const getBlogById = useBlogStore((state) => state.getBlogById);

  useEffect(() => {
    console.log('fetching article', id);
    if (id) {
      
      const fetchArticle = async () => {
        try {
          const data = await getBlogById(id);
          setArticle(data);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      };
      fetchArticle();
    }
  }, [id, getBlogById]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!article) {
    return <p>No se encontró el artículo.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{article.title}</h1>
      <img src={article.image_url} alt={article.title} className="w-full h-64 object-cover mb-4" />
      <p className="text-gray-700">{article.content}</p>
    </div>
  );
};

export default BlogPost;