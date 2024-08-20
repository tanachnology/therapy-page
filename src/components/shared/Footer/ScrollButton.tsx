import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
  
    return (
      <div className="fixed bottom-2 right-4">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="p-3 bg-[#76E2F4] text-white shadow-lg hover:bg-[#76E2F4] focus:outline-none"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    );
  };

export default ScrollButton
