import React from 'react';
import cardBlogData from '../data/cardBlogData.json';
import Logo from '../shared/Header/Logo';


export const CardBlog = () => {
  return (
    <div className="lg:grid grid-cols-3 gap-4 p-4 md:inline-block">
      {cardBlogData.map((card, index) => (
        <div key={index} className=" flex p-4 mt-16 mb-16 relative sm:grid sm:grid-cols-[100px_1fr]">
          <div className='min-w-[50px] mr-2.5'>
            <Logo />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#615DEC]">{card.title}</h2>
            <p className='text-[#301781]'>{card.description}</p>
            <a href="#" className="text-[#615DEC] underline font-semibold">Leer más</a>
            <div className="absolute top-0 right-0 h-full border-r-2 border-[#76E2F4]"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
