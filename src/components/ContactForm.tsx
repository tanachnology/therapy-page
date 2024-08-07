import React from 'react'
import { useForm } from 'react-hook-form'

export const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Agenda tu cita ahora</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
          <input
            type="text"
            {...register('fullName', { required: 'El nombre completo es obligatorio' })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Tu nombre completo"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
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
          <label className="block text-sm font-medium text-gray-700">Teléfono</label>
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
          <label className="block text-sm font-medium text-gray-700">Mensaje</label>
          <textarea
            {...register('message', { required: 'El mensaje es obligatorio' })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Tu mensaje"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}
