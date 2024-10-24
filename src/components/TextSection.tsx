import React from 'react';

interface TextSectionProps {
  title: string;
  content: string | React.ReactNode;
}

const TextSection: React.FC<TextSectionProps> = ({ title, content }) => {
  return (
    <div className="mb-5">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">{title}</h2>
      <div className="text-gray-700">{content}</div>
    </div>
  );
};

export default TextSection;