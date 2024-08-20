import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export const ContactHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-[#1A5276] text-white">
      <div className="flex items-center">
        <FaMapMarkerAlt className="mr-2" />
        <span>1234 Calle Principal, Ciudad, País</span>
      </div>
      <div className="flex items-center">
        <FaEnvelope className="mr-2" />
        <span className="mr-2">correo@ejemplo.com</span>
        <span className="mr-2">|</span>
        <FaPhone className="mr-2" />
        <span className="mr-2">+123 456 7890</span>
      </div>
    </div>
  );
};

