import React from 'react';

interface StaticBannerProps {
  backgroundImage: string;
  subtitle: string;
  title: string;
}

export const StaticBanner: React.FC<StaticBannerProps> = ({ backgroundImage, subtitle, title }) => {
  return (
    <div className="relative w-full h-64">
      {/* Imagen de fondo */}
      <img src={backgroundImage} alt="Banner" className="w-full h-full object-cover" />
      {/* Contenedor de texto superpuesto */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
        <h3 className="text-lg">{subtitle}</h3>
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

