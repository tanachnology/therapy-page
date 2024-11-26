import axios from 'axios';
import { useAuthStore } from '@/store/AuthStore';

const API_URL = process.env.NEXT_PUBLIC_API_URL;


export const getBlogs = async () => {
    const token = useAuthStore.getState().token;
    try {
        const response = await axios.get(`${API_URL}/blogs/`)
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch blogs');
        } else if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};

export const createBlog = async (title: string, content: string, image_url: string) => {
    const token = useAuthStore.getState().token;
  
    const formData = {
      title,
      content,
      image_url,
    };
  
    try {
      const response = await axios.post(`${API_URL}/blogs/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to create blog');
      } else if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
};

export const deleteBlog = async (id: string) => {
  const token = useAuthStore.getState().token;

  try {
    const response = await axios.delete(`${API_URL}/blogs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to delete blog');
    } else if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};

export const updateBlog = async (id: string, title: string, content: string, image_url: string) => {
  const token = useAuthStore.getState().token;
  const data = {
    title,
    content,
    image_url,
  };

  try {
    const response = await axios.put(`${API_URL}/blogs/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to update blog');
    } else if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};

export const getBlogById = async (id: string) => {
  const token = useAuthStore.getState().token;
  try {
    const response = await axios.get(`${API_URL}/blogs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to fetch blog');
    } else if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};