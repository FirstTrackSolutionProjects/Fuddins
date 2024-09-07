import React, { useState, useEffect } from "react";
import { images } from "../Constants/sliderImg";

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const visibleImages = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds per slide
    return () => clearInterval(interval);
  }, [images.length]);

  const startIndex = index % images.length;
  const endIndex = (index + visibleImages) % images.length;
  
  const displayedImages = startIndex < endIndex
    ? images.slice(startIndex, endIndex)
    : [...images.slice(startIndex), ...images.slice(0, endIndex)];

  return (
    <div className="flex items-center  overflow-hidden justify-center px-2 mb-5 mt-3 md:mt-2">
      {displayedImages.map((image, i) => (
        <div
          key={i}
          className="flex flex-col justify-center items-center w-24 h-24 mx-2 md:w-36 md:h-36  bg-lime-600 bg-opacity-15 rounded-md  md:mx-5 flex-shrink-0 transform transition-transform duration-700"
        >
          <img src={image.src} alt={`Slide ${i}`} className="mx-auto object-contain w-20 h-16 md:w-32 md:h-24  " />
          <div className="flex-grow flex items-center">
          <div className="font-poppins text-xs md:text-base text-center px-1">{image.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
