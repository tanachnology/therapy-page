import React from 'react';
import experience from './data/experience.json';

const ExperienceTable = () => (
  <div className="w-full">
    {experience.map((item, index) => (
      <div key={index} className="py-4 flex items-center">
        <div className="bg-[#46617e] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 px-4 py-4 text-sm font-medium">{item.years}</div>
        <div className="px-4 py-4 text-sm text-gray-500">{item.descripcion}</div>
      </div>
    ))}
  </div>
);

export default ExperienceTable;