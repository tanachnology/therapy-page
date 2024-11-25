'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Usa 'next/navigation' en lugar de 'next/router'

const Admin = () => {
  const router = useRouter();

  useEffect(() => {
    // Verificar si el usuario está autenticado
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login'); // Redirigir a la página de login si no está autenticado
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center">Admin Dashboard</h1>
        <p>Welcome to the admin dashboard!</p>
      </div>
    </div>
  );
};

export default Admin;