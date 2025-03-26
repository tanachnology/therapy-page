import { useState, useEffect } from "react";
import { PiArrowRightThin, PiArrowLeftThin } from "react-icons/pi";
import LoadingSpinner from "./LoadinSpinner";

// Definimos imágenes fijas
const fixedImages = [
  {
    id: "1",
    image_url: "/mujersentada.jpg",
    description: "Mujer sentada en sesión de terapia"
  },
  {
    id: "2",
    image_url: "/manos.jpg",
    description: "Manos entrelazadas representando conexión"
  },
  {
    id: "3",
    image_url: "/unidad.jpg",
    description: "Grupo representando unidad y apoyo mutuo"
  }
];

interface BannerCarrouselProps {
  BannerHomeLoading?: boolean;
  interval?: number;
}

export const BannerCarrousel: React.FC<BannerCarrouselProps> = ({
  BannerHomeLoading,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = fixedImages;

  // Cambia la imagen automáticamente cada cierto tiempo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  // Cambia a la imagen anterior
  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Cambia a la siguiente imagen
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  if (BannerHomeLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Botones de navegación - Visibles en desktop, ocultos en mobile */}
      <button
        className="z-10 absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 text-[30px] md:text-[50px] text-[#2C3E50] bg-white/30 rounded-full p-1 md:p-2 hidden sm:block"
        onClick={goToPrevious}
        aria-label="Imagen anterior"
      >
        <PiArrowLeftThin />
      </button>

      {/* Contenedor de las imágenes */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={image.id}
            className="min-w-full flex items-center justify-center bg-gray-200"
          >
            <img
              src={image.image_url}
              alt={image.description}
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 text-[30px] md:text-[50px] text-[#2C3E50] bg-white/30 rounded-full p-1 md:p-2 hidden sm:block"
        onClick={goToNext}
        aria-label="Siguiente imagen"
      >
        <PiArrowRightThin />
      </button>

      {/* Indicadores de imagen actual */}
      <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              index === currentIndex ? "bg-[#E67E22]" : "bg-gray-400"
            }`}
            onClick={() => goToImage(index)}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Área táctil para swipe en dispositivos móviles */}
      <div className="block sm:hidden">
        <div 
          className="absolute left-0 top-0 h-full w-1/2" 
          onClick={goToPrevious}
        ></div>
        <div 
          className="absolute right-0 top-0 h-full w-1/2" 
          onClick={goToNext}
        ></div>
      </div>
    </div>
  );
};