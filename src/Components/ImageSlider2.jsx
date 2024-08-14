import React, { useState, useEffect } from 'react';
import { category as imageUrls, categoryName as imageNames} from '../Constants/sliderImg';




const ImageSlider2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImages = 4; // Number of images to show at a time

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Handle the transition and loop back
  useEffect(() => {
    if (currentIndex === imageUrls.length) {
      setTimeout(() => {
        setCurrentIndex(0); // Reset the index
      }, 1000); // Timeout matches the transition duration
    }
  }, [currentIndex]);

  return (
    <div className='p-3 max-w-4xl mx-auto items-center'>
    <div className="relative w-full overflow-hidden border border-black ">
      <div
        className="flex transition-transform duration-1000 "
        style={{
          transform: `translateX(-${(currentIndex % imageUrls.length) * (100 / visibleImages)}%)`,
        }}
      >
        {imageUrls.concat(imageUrls.slice(0, visibleImages)).map((url, index) => (
          <div key={index} className="w-36 justify-center border border-black h-fit mx-6 p-1  flex-shrink-0 relative bg-lime-600 bg-opacity-15 rounded-md">
            <img src={url} alt={imageNames[index % imageNames.length]} className="w-24 h-24 object-cover mx-auto " />
            <div className="mb-1 border text-sm border-black items-center text-center font-poppins">
              {imageNames[index % imageNames.length]}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ImageSlider2;
