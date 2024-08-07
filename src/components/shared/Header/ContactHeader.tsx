import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export const ContactHeader = () => {
  return (
    <div className="flex justify-around items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <FaMapMarkerAlt className="mr-2" />
        <span>1234 Calle Principal, Ciudad, País</span>
      </div>
      <div className="flex items-center">
        <FaEnvelope className="mr-2" />
        <span>correo@ejemplo.com</span>
      </div>
      <div className="flex items-center">
        <FaPhone className="mr-2" />
        <span>+123 456 7890</span>
      </div>
    </div>
  );
};

