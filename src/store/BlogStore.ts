import { create } from 'zustand';
import { createBlog, deleteBlog, getBlogById, getBlogs, updateBlog } from '@/services/blogService';

interface BlogState {
  articles: any[];
  loading: boolean;
  setArticles: (articles: any[]) => void;
  setLoading: (loading: boolean) => void;
  createBlog: (title: string, content: string, image_url: string) => Promise<void>;
  fetchBlogs: () => Promise<void>;
  deleteBlog: (id: string) => Promise<void>;
  updateBlog: (id: string, title: string, content: string, image_url: string) => Promise<void>;
  getBlogById: (id: string) => Promise<any>;
}

export const useBlogStore = create<BlogState>((set) => ({
  articles: [],
  loading: true,
  setArticles: (articles) => set({ articles }),
  setLoading: (loading) => set({ loading }),
  createBlog: async (title: string, content: string, image_url: string) => {
    try {
      await createBlog(title, content, image_url);
      set((state) => ({ articles: [...state.articles, { title, content, image_url }] }));
    } catch (error) {
      console.error(error);
    }
  },
  fetchBlogs: async () => {
    set({ loading: true });
    try {
      const data = await getBlogs();
      set({ articles: data, loading: false });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },
  deleteBlog: async (id: string) => {
    try {
      await deleteBlog(id);
      set((state) => ({ articles: state.articles.filter(article => article.id !== id) }));
    } catch (error) {
      console.error(error);
    }
  },
  updateBlog: async (id: string, title: string, content: string, image_url: string) => {
    try {
      await updateBlog(id, title, content, image_url);
      set((state) => ({
        articles: state.articles.map(article =>
          article.id === id ? { ...article, title, content, image_url } : article
        ),
      }));
    } catch (error) {
      console.error(error);
    }
  },
  getBlogById: async (id: string) => {
    try {
      const data = await getBlogById(id);
      return data;
    } catch (error) {
      console.error(error);
    }
  },
}));