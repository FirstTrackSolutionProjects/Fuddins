import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useDropzone } from "react-dropzone";

const MenuUploadForm = () => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*,application/pdf",
    onDrop: (acceptedFiles) => setFiles(acceptedFiles),
  });

  const handleUpload = () => {
    if (files.length === 0) {
      alert("Please upload a menu file before submitting.");
      return;
    }

    // Handle the file upload logic here
    alert("Menu uploaded successfully!");
  };

  return (
    <div className="bg-beige bg-opacity-30 p-2">
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center font-domine">Menu Upload Form</h2>
      <form className="space-y-6">
        {/* Executive Name */}
        <div>
          <label className="block text-gray-700 mb-2">Executive Name <span className="text-red-500 text-lg">*</span></label>
          <input
            type="text"
            placeholder="Eg: John Doe"
            required
            className="w-full p-3 border border-gray-300  rounded focus:outline-none focus:border-black bg-neutral-100"
          />
        </div>

        {/* Executive Mobile */}
        <div>
          <label className="block text-gray-700 mb-2">Executive Mobile <span className="text-red-500 text-lg">*</span></label>
          <input
            type="text"
            placeholder="Eg: +91 9644286535"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black bg-neutral-100"
          />
        </div>

        {/* Store Name */}
        <div>
          <label className="block text-gray-700 mb-2">Store Name <span className="text-red-500 text-lg">*</span></label>
          <input
            type="text"
            placeholder="Eg: Enter Store Name"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black bg-neutral-100"
          />
        </div>

        {/* Store Mobile */}
        <div>
          <label className="block text-gray-700 mb-2">Store Mobile <span className="text-red-500 text-lg">*</span></label>
          <input
            type="text"
            placeholder="Enter Store Mobile"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black bg-neutral-100"
          />
        </div>

        {/* Date with Calendar Icon */}
        <div className="relative">
          <label className="block text-gray-700 mb-2">Date <span className="text-red-500 text-lg">*</span></label>
          <input
            type="date"
            required
            placeholder="Choose a date"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black bg-neutral-100"
          />
          
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-gray-700 mb-2">Upload Menu <span className="text-red-500 text-lg">*</span></label>
          <div
            {...getRootProps()}
            className="w-full p-6 border-2 border-dashed border-gray-300 rounded focus:outline-none focus:border-black bg-neutral-100 hover:bg-gray-50 cursor-pointer"
          >
            <input required {...getInputProps()} />
            {files.length > 0 ? (
              <p>{files.map((file) => file.name).join(", ")}</p>
            ) : (
              <p className="text-gray-500 text-center">
                Drag & Drop (or) <span className="text-blue-400 font-semibold">Choose files</span> 
              </p>
            )}
          </div>
        </div>

        {/* Upload Button */}
        <div>
          <button
            type="button"
            onClick={handleUpload}
            className="bg-myGreen text-white font-semibold px-6 py-3 rounded  focus:outline-none"
          >
            Upload Menu
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default MenuUploadForm;
