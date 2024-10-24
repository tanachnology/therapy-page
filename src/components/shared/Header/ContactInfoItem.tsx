import React from 'react';

interface ContactInfoItemProps {
  icon: React.ReactNode;
  text: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center">
      {icon}
      <span className="mr-2">{text}</span>
    </div>
  );
};

export default ContactInfoItem;