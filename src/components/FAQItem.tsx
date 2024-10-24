import React from 'react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isActive, onClick }) => {
  return (
    <div className="mb-4 border-b border-gray-200">
      <button
        className="w-full text-left text-xl font-semibold text-blue-700 py-2 focus:outline-none hover:text-blue-900 transition-colors duration-300"
        onClick={onClick}
      >
        {question}
      </button>
      {isActive && (
        <div className="p-4 text-gray-700 bg-gray-50 rounded-b-lg shadow-inner">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;