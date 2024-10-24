import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  validation: object;
  error?: FieldError;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type, placeholder, register, validation, error }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-[#46617e]">{label}</label>
      <input
        type={type}
        {...register(name, validation)}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default InputField;