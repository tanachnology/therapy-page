import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { login } from '@/services/api';

interface State {
  token: string | null;
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  loginUser: (username: string, password: string) => Promise<void>;
  logoutUser: () => void;
  setToken: (token: string | null) => void;
}

export const useAuthStore = create(persist<State>((set) => ({
  token: null,
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated: boolean) => set(() => ({ isAuthenticated })),
  setToken: (token: string | null) => set(() => ({ token })),
  loginUser: async (username: string, password: string) => {
    try {
      const data = await login(username, password);
      set({ token: data.token, isAuthenticated: true });
      localStorage.setItem('token', data.token);

    } catch (error) {
      set({ token: null, isAuthenticated: false });
      throw error;
    }
  },
  logoutUser: () => {
    set({ token: null, isAuthenticated: false });
    localStorage.removeItem('token');
  },
}),
{
  name: 'auth', // Nombre del almacenamiento en localStorage
}
)
);