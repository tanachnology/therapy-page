import React, { useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputField from './InputField';
import ErrorMessage from './ErrorMessage';
import DataProtectionCheckbox from './DataProtectionCheckbox';
import emailjs from '@emailjs/browser';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  dataProtection: boolean;
}

export const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
    if (form.current) {
      emailjs.sendForm('service_yrqdwcs', 'template_ziosnzp', form.current, 'zDsIAJLvYn6k00gj7')
        .then(
          () => {
            console.log('SUCCESS!');
            setIsSubmitted(true);
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  const handleNewAppointment = () => {
    setIsSubmitted(false);
    reset();
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-5xl font-semibold mb-8 text-[#2C3E50] text-center">Agendar cita</h1>
      {isSubmitted ? (
        <div className="text-center">
          <p className="text-lg mb-4">Se está gestionando la cita. En breve enviaremos al correo confirmación o nos pondremos en contacto contigo.</p>
          <button
            onClick={handleNewAppointment}
            className="bg-[#E67E22] text-white p-2 rounded-md mt-6 mb-16 w-[200px] h-[50px]"
          >
            Generar nueva cita
          </button>
        </div>
      ) : (
        <form ref={form} onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col w-full">
          <InputField
            label="Nombre Completo"
            name="fullName"
            type="text"
            placeholder="Tu nombre completo"
            register={register}
            validation={{ required: 'El nombre completo es obligatorio' }}
            error={errors.fullName}
          />
          <InputField
            label="Correo Electrónico"
            name="email"
            type="email"
            placeholder="Tu correo electrónico"
            register={register}
            validation={{
              required: 'El correo electrónico es obligatorio',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Correo electrónico no válido'
              }
            }}
            error={errors.email}
          />
          <InputField
            label="Teléfono"
            name="phone"
            type="tel"
            placeholder="Tu teléfono"
            register={register}
            validation={{
              pattern: {
                value: /^[0-9]{9}$/,
                message: 'Número de teléfono no válido'
              }
            }}
            error={errors.phone}
          />
          <div>
            <label className="block text-sm font-medium text-[#46617e]">Mensaje</label>
            <textarea
              {...register('message', { required: 'El mensaje es obligatorio' })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Tu mensaje"
            ></textarea>
            <ErrorMessage error={errors.message} />
          </div>
          <DataProtectionCheckbox register={register} error={errors.dataProtection} />
          <div className='mx-auto'>
            <button
              type="submit"
              className="bg-[#E67E22] text-white p-2 rounded-md mt-6 mb-16 w-[150px] h-[50px]"
            >
              Enviar
            </button>
          </div>
        </form>
      )}
    </div>
  );
};