import React from "react";

const StarRating = ({ rating }) => {
  // Create an array of 5 stars
  const stars = Array(5).fill(0);

  return (
    <div className="flex">
      {stars.map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < rating ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`w-4 h-4 ${index < rating ? "text-yellow-500" : "text-gray-300"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 17.27l5.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
