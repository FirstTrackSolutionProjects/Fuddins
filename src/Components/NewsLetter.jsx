// Newsletter.js
import React from 'react';

const Newsletter = () => {
  return (
    <div className="font-poppins p-2 md:p-1 h-full flex items-center justify-center w-full bg-lime-600 bg-opacity-15">
      <div className="w-full max-w-xl bg-white bg-opacity-35 rounded-lg p-3">
        <h2 className="text-lg md:text-2xl text-sky-950 font-semibold text-center mb-4">Subscribe to our Newsletter</h2>
        <p className="text-sm md:text-base text-center mb-6">Stay updated with the latest news and special offers!</p>
        <form className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="text-sm w-full p-1 md:p-3 border rounded-lg focus:outline-none focus:ring-2 "
          />
          <button
            type="submit"
            className="w-full md:w-auto p-1 md:p-3 bg-lime-600  text-white rounded-lg  focus:outline-none focus:ring-2 "
          >
            Subscribe
          </button>
        </form>
      </div>
      
      </div>
  );
};

export default Newsletter;
