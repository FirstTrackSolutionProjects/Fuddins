import React, { useState, useEffect } from 'react';

const images = [
  'images/banner3.jpg', // Replace with your image URLs
  'images/banner1.jpg',
  'images/1.png',
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-40 items-center  md:h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-40 mx-auto md:w-full md:h-full object-contain  p-1 md:p-2"
          />
        </div>
      ))}
    </div>
  );
};

export default BannerSlider;
