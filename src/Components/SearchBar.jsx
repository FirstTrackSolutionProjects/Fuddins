import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="relative w-full font-poppins">
      <input 
        type="text" 
        placeholder="Search for products.." 
        className="w-full pl-10 pr-4 py-2 border h-8 md:h-12 border-gray-300 bg-neutral-100 rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg 
          className="h-5 w-5 text-myGreen" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor">
          <path 
            fillRule="evenodd" 
            d="M12.9 14.32a8 8 0 111.414-1.414l4.298 4.298a1 1 0 01-1.415 1.414l-4.298-4.298zM14 8a6 6 0 11-12 0 6 6 0 0112 0z" 
            clipRule="evenodd" 
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
