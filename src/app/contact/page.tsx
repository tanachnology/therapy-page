import { StaticBanner } from '@/components/StaticBanner';
import React from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
/*   const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data)
  } */
  return (
    <>
      <StaticBanner 
        backgroundImage="../../../public/banner.png"
        subtitle="Contacto"
        title="Conócenos"
      />
      <div className="p-5 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Contáctanos</h2>
          
          {/* Servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Terapia Individual</h3>
              <p className="text-gray-700">Ofrecemos sesiones de terapia individual para niños y adolescentes.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Terapia Familiar</h3>
              <p className="text-gray-700">Mejora la comunicación y resuelve conflictos con nuestra terapia familiar.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Terapia de Juego</h3>
              <p className="text-gray-700">Utilizamos el juego como una herramienta terapéutica para los niños.</p>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Déjanos tu Información</h3>
            <form /* onSubmit={handleSubmit(onSubmit)} */ className="space-y-4">
              <div>
                <label className="block text-gray-700">Nombre</label>
                <input
                 /*  {...register('name', { required: true })} */
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  type="text"
                  placeholder="Tu nombre"
                />
                {/* {errors.name && <span className="text-red-500">Este campo es obligatorio</span>} */}
              </div>
              <div>
                <label className="block text-gray-700">Correo Electrónico</label>
                <input
                 /*  {...register('email', { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ })} */
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  type="email"
                  placeholder="Tu correo electrónico"
                />
                {/* {errors.email && <span className="text-red-500">Introduce un correo válido</span>} */}
              </div>
              <div>
                <label className="block text-gray-700">Mensaje</label>
                <textarea
                  /* {...register('message', { required: true })} */
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Tu mensaje"
                />
                {/* {errors.message && <span className="text-red-500">Este campo es obligatorio</span>} */}
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition duration-300"
              >
                Enviar
              </button>
            </form>
          </div>

          {/* Otros Medios de Comunicación */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Otros Medios de Comunicación</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 4v8m-6-8v8m12-8v8"></path></svg>
                <p className="text-gray-700">Correo Electrónico: contacto@ejemplo.com</p>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1m10 0h1m-6 0h1m-6 4h1m10 0h1m-6 0h1m-6 4h1m10 0h1m-6 0h1m-6-8h1m10 0h1m-6 0h1m-6 4h1m10 0h1m-6 0h1m-6 4h1m10 0h1m-6 0h1"></path></svg>
                <p className="text-gray-700">Teléfono: +123 456 7890</p>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 00-12 0v4a6 6 0 0012 0V8z"></path></svg>
                <p className="text-gray-700">Dirección: Calle Falsa 123, Ciudad, País</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;