import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Logo = () => {
  const [size, setSize] = useState({ width: 100, height: 100 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 750) {
        setSize({ width: 50, height: 50 });
      } else {
        setSize({ width: 100, height: 100 });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='pl-4'>
      <Image 
        src="/nuevoLogo.png"
        alt="Logo"
        width={size.width}
        height={size.height}
      />
    </div>
  );
};

export default Logo;