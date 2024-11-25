import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const login = async (username: string, password: string) => {
    console.log('API_URL', API_URL);
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Login failed');
    } else if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};