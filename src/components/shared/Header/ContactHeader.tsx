import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export const ContactHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-[#1A5276] text-white">
      <div className="flex items-center">
        <FaMapMarkerAlt className="mr-2" />
        <span>Albacete y Motilleja, España</span>
      </div>
      <div className="flex items-center">
        <FaEnvelope className="mr-2" />
        <span className="mr-2">correoPendiente@ejemplo.com</span>
        <span className="mr-2">|</span>
        <FaPhone className="mr-2" />
        <span className="mr-2">+34 661 098 351</span>
      </div>
    </div>
  );
};

