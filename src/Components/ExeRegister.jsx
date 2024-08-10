import React, { useState } from 'react';

const ExeRegister = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    storeName: '',
    address1: '',
    address2: '',
    country: '',
    city: '',
    state: '',
    zipCode: '',
    storePhone: '',
    gstNumber: '',
    fssaiLicence: '',
    gstCertificate: null,
    fssaiCertificate: null,
    bankPassbook: null,
    otherLicence: null,
    executorName: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters long';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }

      // Replace with your API endpoint
      fetch('/api/submit-form', {
        method: 'POST',
        body: data,
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'First Name', name: 'firstName', type: 'text' },
          { label: 'Last Name', name: 'lastName', type: 'text' },
          { label: 'Store Name', name: 'storeName', type: 'text' },
          { label: 'Address 1', name: 'address1', type: 'text' },
          { label: 'Address 2', name: 'address2', type: 'text' },
          { label: 'Country', name: 'country', type: 'text' },
          { label: 'City', name: 'city', type: 'text' },
          { label: 'State', name: 'state', type: 'text' },
          { label: 'Zip Code', name: 'zipCode', type: 'text' },
          { label: 'Store Phone', name: 'storePhone', type: 'tel' },
          { label: 'GST Number', name: 'gstNumber', type: 'text' },
          { label: 'FSSAI Licence', name: 'fssaiLicence', type: 'text' },
          { label: 'Executor\'s Name', name: 'executorName', type: 'text' },
          { label: 'Mobile Number', name: 'mobileNumber', type: 'tel' },
        ].map(({ label, name, type }) => (
          <div className="flex items-center" key={name}>
            <label htmlFor={name} className="w-full text-left pr-4 text-sm md:text-base">{label}</label>
            <input
              type={type}
              id={name}
              name={name}
              value={formData[name] || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-neutral-100 rounded px-2 py-1"
            />
          </div>
        ))}
        
        <div className="flex items-center">
          <label htmlFor="gstCertificate" className="w-full text-left pr-4 text-sm md:text-base">GST Certificate</label>
          <input
            type="file"
            id="gstCertificate"
            name="gstCertificate"
            onChange={handleChange}
            className="w-full border border-gray-300 text-xs md:text-base  rounded px-2 py-2"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="fssaiCertificate" className="w-full text-left pr-4 text-sm md:text-base">FSSAI Certificate</label>
          <input
            type="file"
            id="fssaiCertificate"
            name="fssaiCertificate"
            onChange={handleChange}
            className="w-full border border-gray-300 text-xs md:text-base  rounded px-2 py-2"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="bankPassbook" className="w-full text-left pr-4 text-sm md:text-base">Bank Passbook</label>
          <input
            type="file"
            id="bankPassbfull"
            name="bankPassbook"
            onChange={handleChange}
            className="w-full border border-gray-300 text-xs md:text-base  rounded px-2 py-2"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="otherLicence" className="w-full text-left pr-4 text-sm md:text-base">Other Licence</label>
          <input
            type="file"
            id="otherLicence"
            name="otherLicence"
            onChange={handleChange}
            className="w-full border border-gray-300 text-xs md:text-base  rounded px-2 py-2"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="password" className="w-full text-left pr-4 text-sm md:text-base">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 bg-neutral-100 rounded px-2 py-1"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="confirmPassword" className="w-full text-left pr-4 text-sm md:text-base">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border border-gray-300 bg-neutral-100 rounded px-2 py-1"
          />
        </div>

        {errors.password && <p className="text-red-500">{errors.password}</p>}
        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}

        
      </form>
    </div>
  );
};

export default ExeRegister;
