import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const OnboardingForm = () => {
  return (
    <div className="bg-beige bg-opacity-30 p-2">
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-domine font-semibold mb-6 text-center">Onboarding Form</h2>
      <form className="space-y-6">
        {/* Shop Name */}
        <div>
          <label className="block text-gray-700 mb-2">Shop Name <span className="text-red-500 text-lg">*</span></label>
          <input
            type="text"
            placeholder="Enter Shop Name"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black bg-neutral-100"
          />
        </div>

        {/* Vendor Name */}
        <div>
          <label className="block text-gray-700 mb-2">Vendor Name <span className="text-red-500 text-lg">*</span></label>
          <input
            type="text"
            placeholder="Enter Vendor Name"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black bg-neutral-100"
          />
        </div>

        {/* Vendor Phone */}
        <div>
          <label className="block text-gray-700 mb-2">Vendor Phone <span className="text-red-500 text-lg">*</span></label>
          <input
            type="text"
            placeholder="Enter Vendor Phone"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black bg-neutral-100"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 mb-2">Category <span className="text-red-500 text-lg">*</span></label>
          <select
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black bg-neutral-100"
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Home Goods</option>
          </select>
        </div>

        {/* Executor's Name */}
        <div>
          <label className="block text-gray-700 mb-2">Executor's Name <span className="text-red-500 text-lg">*</span></label>
          <input
            type="text"
            placeholder="Enter Executor's Name"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black bg-neutral-100"
          />
        </div>

        {/* Executive Phone */}
        <div>
          <label className="block text-gray-700 mb-2">Executive Phone <span className="text-red-500 text-lg">*</span></label>
          <input
            type="text"
            placeholder="Enter Executive Phone"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black bg-neutral-100"
          />
        </div>

        {/* Street Address */}
        <div>
          <label className="block text-gray-700 mb-2">Street Address <span className="text-red-500 text-lg">*</span></label>
          <input
            type="text"
            placeholder="Enter Street Address"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black bg-neutral-100"
          />
        </div>

        {/* Zip Code */}
        <div>
          <label className="block text-gray-700 mb-2">Zip Code <span className="text-red-500 text-lg">*</span></label>
          <input
            type="text"
            placeholder="Enter Zip Code"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black bg-neutral-100"
          />
        </div>

        {/* Date */}
        <div className="relative">
          <label className="block text-gray-700 mb-2">Date <span className="text-red-500 text-lg">*</span></label>
          <input
            type="date"
            required
            placeholder="Choose a date"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black bg-neutral-100"
          />
          
        </div>

        {/* Remarks */}
        <div>
          <label className="block text-gray-700 mb-2">Remarks <span className="text-red-500 text-lg">*</span></label>
          <textarea
            placeholder="Enter Remarks"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black bg-neutral-100"
          />
        </div>

        {/* Send Message Button */}
        <div>
          <button
            type="submit"
            className="bg-sky-400 text-white font-semibold px-6 py-3 rounded hover:bg-sky-400 focus:outline-none"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default OnboardingForm;
