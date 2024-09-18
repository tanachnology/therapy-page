import React from "react";

interface CardGridProps {
  title?: string;
  text?: string | string[];
  image?: string;
}

const CardGrid: React.FC<CardGridProps> = ({ title, text, image }) => {
  return (
    <div
      className="bg-[#9CC5D6] p-5 min-h-[400px]"
      style={{
        backgroundImage: `url(${image})`, // Establecer la imagen de fondo
        backgroundSize: "cover", // Ajustar el tamaño de la imagen
        backgroundPosition: "center", // Centrar la imagen
        backgroundRepeat: "no-repeat", // No repetir la imagen
      }}
    >
      <h3 className=" text-white text-xl font-bold pb-3">{title}</h3>

      {typeof text === "string" ? (
        <p className="text-white">{text}</p>
      ) : (
        text?.map((paragraph, index) => (
          <p key={index} className="text-white">
            {paragraph}
          </p>
        ))
      )}
    </div>
  );
};

export default CardGrid;
