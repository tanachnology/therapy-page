import React, { useState } from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

interface DataProtectionCheckboxProps {
  register: UseFormRegister<any>;
  error?: FieldError;
}

const DataProtectionCheckbox: React.FC<DataProtectionCheckboxProps> = ({ register, error }) => {
  const [isChecked, setIsChecked] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    localStorage.setItem('dataProtectionChecked', JSON.stringify(e.target.checked));
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-[#46617e]">
        <div className='flex'>
        
        <input
          type="checkbox"
          {...register('dataProtection', { required: 'Debes aceptar la protección de datos' })}
          className="mr-2 leading-tight"
          checked={isChecked}
          onChange={handleChange}
        />
        <p>Protección de datos</p>
        </div>
        <p> * Acepto el tratamiento de mis datos para el envío de comunicaciones de productos o servicios.</p>
        <p>De conformidad con las normativas de protección de datos, le facilitamos la siguiente información del tratamiento: Responsable: Esmeralda Conde Alvarado. Fines del tratamiento: mantener una relación comercial y enviar comunicaciones de productos o servicios.</p>
        <p>Derechos que le asisten: acceso, rectificación, portabilidad, supresión, limitación y oposición.</p>
      </label>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default DataProtectionCheckbox;