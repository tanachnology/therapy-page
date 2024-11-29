import { useEffect } from 'react';
import Logo from '../shared/Header/Logo';
import Link from 'next/link';
import { useBlogStore } from '@/store/BlogStore';
import htmlParser from 'html-react-parser';

interface IArticle {
  id: string;
  title: string;
  content: string;
}



export const CardBlog = () => {
  const articles = useBlogStore((state) => state.articles);
  const fetchBlogs = useBlogStore((state) => state.fetchBlogs);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <div className="lg:grid grid-cols-3 gap-4 p-4 md:inline-block">
      {articles.map((article : IArticle) => (
        <div key={article.id} className="flex p-4 mt-16 mb-16 relative sm:grid sm:grid-cols-[100px_1fr]">
          <div className='min-w-[50px] mr-2.5'>
            <Logo />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#615DEC]">{htmlParser(article.title)}</h2>
            <div className='line-clamp-4'>{htmlParser(article.content)}</div>
            <Link href={`/blog/${article.id}`}>
              <button className="px-4 py-2 mt-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition duration-300">
                Leer más
              </button>
            </Link>
            <div className="absolute top-0 right-0 h-full border-r-2 border-[#76E2F4]"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
