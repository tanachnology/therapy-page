import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-5xl font-semibold mb-8 text-gray-800 text-center">Agendar cita</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col w-full">
        <div>
          <label className="block text-sm font-medium text-[#46617e]">Nombre Completo</label>
          <input
            type="text"
            {...register('fullName', { required: 'El nombre completo es obligatorio' })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Tu nombre completo"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[#46617e]">Correo Electrónico</label>
          <input
            type="email"
            {...register('email', { 
              required: 'El correo electrónico es obligatorio',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Correo electrónico no válido'
              }
            })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Tu correo electrónico"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[#46617e]">Teléfono</label>
          <input
            type="tel"
            {...register('phone', { 
              required: 'El número de teléfono es obligatorio',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Número de teléfono no válido'
              }
            })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Tu teléfono"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[#46617e]">Mensaje</label>
          <textarea
            {...register('message', { required: 'El mensaje es obligatorio' })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Tu mensaje"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>
        <div className='mx-auto'>
          <button
            type="submit"
            className="bg-[#DDAD7A] text-white p-2 rounded-md mt-6 mb-16 w-[150px] h-[50px]"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};