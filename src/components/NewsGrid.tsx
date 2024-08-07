import React from 'react';

export const NewsGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="p-4 relative">
          <h2 className="text-xl font-bold">Título {index + 1}</h2>
          <p>Este es el texto del ítem {index + 1}.</p>
          <a href="#" className="text-blue-500 hover:underline">Leer más</a>
          <div className="absolute top-0 right-0 h-full border-r-2 border-gray-400"></div>
        </div>
      ))}
    </div>
  );
};
