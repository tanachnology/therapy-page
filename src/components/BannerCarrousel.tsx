import { useState, useEffect } from "react";
import { PiArrowRightThin, PiArrowLeftThin } from "react-icons/pi";
import EditMenu from "./EditMenu";
import { useAuthStore } from "@/store/AuthStore";
import { addCarrouselImages, deleteCarrouselImages } from "@/services/homeServices";
import ModalEdition from "./ModalEdition";
import LoadingSpinner from "./LoadinSpinner";
import { IImage } from "@/app/page";

interface BannerCarrouselProps {
  images: IImage[],
  setImages: (images: IImage[]) => void,
  BannerHomeLoading?: boolean,
  interval?: number;
}

export const BannerCarrousel: React.FC<BannerCarrouselProps> = ({
  images,
  setImages,
  BannerHomeLoading,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch images from the API
  useEffect(() => {
     console.log('Images:', images);
  }, [images]);

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

  const handleCreate = () => {
    setIsModalOpen(true);
  };

  const handleSave = (image_url: string, description: string) => {
    const newImage: IImage = { id: Date.now().toString(), image_url, description };
    addCarrouselImages(image_url, description);
    setImages([...images, newImage]);
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const handleDeleteImage = (id: string) => {
    console.log('Deleting image:', id);
    deleteCarrouselImages(id);
    setImages(images.filter((image) => image.id !== id));
    setIsModalOpen(false);
  };

  if (BannerHomeLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Botón para ir a la imagen anterior */}
      <button
        className="z-10 absolute top-1/2 left-4 transform -translate-y-1/2 text-[#2C3E50] text-[50px]"
        onClick={goToPrevious}
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
            className="min-w-full max-h-[500px] flex items-center justify-center bg-gray-200"
          >
            <img
              src={image.image_url}
              alt={`Slide ${index}`}
              className="w-full h-auto object-cover max-w-full max-h-full"
            />
          </div>
        ))}
      </div>

      {/* Botón para ir a la siguiente imagen */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[50px] text-[#2C3E50]"
        onClick={goToNext}
      >
        <PiArrowRightThin />
      </button>

      {/* Puntitos para cambiar de imagen */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-[#E67E22]" : "bg-gray-400"
            }`}
            onClick={() => goToImage(index)}
          />
        ))}
        {isAuthenticated && (
        <div className="absolute bottom-0 left-[850px]">
          <EditMenu buttons={['create']} onCreate={handleCreate}  onDelete={handleDelete} />
        </div>
        )}
      </div>
      <ModalEdition
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        onDelete={handleDeleteImage}
        images={images}
      />
    </div>
  );
};