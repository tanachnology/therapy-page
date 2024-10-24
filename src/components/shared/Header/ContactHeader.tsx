import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import ContactInfoItem from './ContactInfoItem';

export const ContactHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-[#1A5276] text-white hidden md:flex">
      <ContactInfoItem icon={<FaMapMarkerAlt className="mr-2" />} text="Albacete y Motilleja, España" />
      <div className="flex items-center">
        <ContactInfoItem icon={<FaEnvelope className="mr-2" />} text="correoPendiente@ejemplo.com" />
        <span className="mr-2">|</span>
        <ContactInfoItem icon={<FaPhone className="mr-2" />} text="+34 661 098 351" />
      </div>
    </div>
  );
};