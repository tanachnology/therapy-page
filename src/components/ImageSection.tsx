import React from 'react';

interface ImageSectionProps {
  src: string;
  alt: string | undefined;
}

const ImageSection: React.FC<ImageSectionProps> = ({ src, alt }) => {
  return (
    <div className="mb-5 max-w-[400px] mx-auto">
      <img src={src} alt={alt} className="w-full h-auto rounded shadow-lg object-cover" />
    </div>
  );
};

export default ImageSection;