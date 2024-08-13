import React, { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const visibleImages = 4;

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
    <div className="flex overflow-hidden justify-center md:mb-5 md:mt-2">
      {displayedImages.map((image, i) => (
        <div
          key={i}
          className=" w-20 h-24 md:w-40 md:h-40  md:mx-5 flex-shrink-0 transform transition-transform duration-700"
        >
          <img src={image} alt={`Slide ${i}`} className="w-fit h-auto" />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
