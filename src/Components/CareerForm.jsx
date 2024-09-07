import React, { useState } from "react";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    city: "",
    state: "",
    zipcode: "",
    qualification: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFormData({
      ...formData,
      resume: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-transparent font-poppins">
      <div className="text-lg font-semibold mb-6">Enter the below details</div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1">Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1">Zipcode</label>
            <input
              type="text"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1">Highest Qualification</label>
            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="w-full text-sm md:text-base px-4 py-2 border rounded-md focus:outline-none"
            >
              <option value="">Select your qualification</option>
              <option value="tenth">10th</option>
              <option value="twelth">12th</option>
              <option value="grad">Graduation</option>
              <option value="pg">Post Graduation</option>
              <option value="diploma">Diploma</option>
              <option value="internship">Internship</option>
              <option value="other">Others</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6">
          <label className="block mb-1">Upload Resume</label>
          <div
            className="w-full px-4 py-6 border-2 border-dashed rounded-md cursor-pointer"
            onDrop={handleFileDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="resume-upload"
            />
            <label htmlFor="resume-upload" className="cursor-pointer">
              {formData.resume ? (
                <span>{formData.resume.name}</span>
              ) : (
                <span className="text-sm text-center mx-auto">Drag and drop (or) <span className="text-blue-500">Choose Files</span></span>
              )}
            </label>
          </div>
        </div>
        
        <button
          type="submit"
          className="mt-6 w-full bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CareerForm;
