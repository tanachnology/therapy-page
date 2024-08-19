import React from 'react';

interface BannerProps {
  imageSrc: string;
  mainText: string;
  subText: string;
}

const Banner: React.FC<BannerProps> = ({ imageSrc, mainText, subText }) => {
  return (
    <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
      <img src={imageSrc} alt="Banner" style={{ width: '100%', height: 'auto' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <h1>{mainText}</h1>
        <h3>{subText}</h3>
      </div>
    </div>
  );
};

export default Banner;