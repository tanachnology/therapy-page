import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import ContactInfoItem from './ContactInfoItem';
import { useAuthStore } from '@/store/AuthStore';

export const ContactHeader = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logoutUser = useAuthStore((state) => state.logoutUser);
  
  return (
    <div className="flex justify-between items-center p-4 bg-[#1A5276] text-white hidden md:flex">
      <ContactInfoItem icon={<FaMapMarkerAlt className="mr-2" />} text="Albacete y Motilleja, España" />
      <div className="flex items-center">
        <ContactInfoItem icon={<FaEnvelope className="mr-2" />} text="correoPendiente@ejemplo.com" />
        <span className="mr-2">|</span>
        <ContactInfoItem icon={<FaPhone className="mr-2" />} text="+34 661 098 351" />
        {isAuthenticated && 
        <span
          className="px-4 py-2 bg-green-700 text-white font-semibold rounded hover:bg-green-800 cursor-pointer transition duration-300"
          onClick={() => logoutUser() }
        >
          cerrar sesión
        </span>}
      </div>
    </div>
  );
};