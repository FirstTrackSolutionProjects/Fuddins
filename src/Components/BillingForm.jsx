import React, { useState } from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';

const libraries = ['places']; // Load Places library

const BillingForm = () => {
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);

  // Country and state options
  const countries = ['India', 'USA', 'Canada', 'Australia']; // Add more countries
  const states = ['Odisha', 'Gujarat', 'Maharashtra', 'Kerala']; // Add more states

  const handleCheckboxChange = () => {
    setShipToDifferentAddress(!shipToDifferentAddress);
  };

  const [autocomplete, setAutocomplete] = useState(null);
  const [location, setLocation] = useState('');

  // Handle place selection
  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      if (place && place.formatted_address) {
        setLocation(place.formatted_address); // Set selected location
      }
    }
  };


  return (
    <div className="max-w-4xl mx-auto p-4 text-sm md:text-base">
      <form>
        {/* First Name, Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">First Name <span className='text-red-500'>*</span></label>
            <input type="text" className="w-full border p-2 focus:outline-none" required />
          </div>
          <div>
            <label className="block mb-1">Last Name <span className='text-red-500'>*</span></label>
            <input type="text" className="w-full border p-2 focus:outline-none" required  />
          </div>
        </div>

        {/* Company Name (Optional) */}
        <div className="mt-4">
          <label className="block mb-1">Company Name (Optional)</label>
          <input type="text" className="w-full border p-2 focus:outline-none" />
        </div>

        {/* Country Dropdown */}
        <div className="mt-4">
          <label className="block mb-1">Country <span className='text-red-500'>*</span></label>
          <select className="w-full border p-2 focus:outline-none">
            {countries.map((country, index) => (
              <option key={index} value={country} selected={country === 'India'}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* Street Address */}
        <div className="mt-4">
          <label className="block mb-1">Street Address <span className='text-red-500'>*</span></label>
          <input type="text" required  className="w-full border p-2 focus:outline-none mb-2" placeholder="Address Line 1" />
          <input type="text" className="w-full border p-2 focus:outline-none" placeholder="Address Line 2" />
        </div>

        {/* City, State, Pincode */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block mb-1">City <span className='text-red-500'>*</span></label>
            <input type="text" className="w-full border p-2 focus:outline-none" required  />
          </div>
          <div>
            <label className="block mb-1">State <span className='text-red-500'>*</span></label>
            <select className="w-full border p-2 focus:outline-none" required >
              {states.map((state, index) => (
                <option key={index} value={state} selected={state === 'Odisha'}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1">Pincode <span className='text-red-500'>*</span></label>
            <input type="text" className="w-full border p-2 focus:outline-none" required  />
          </div>
        </div>

        {/* Phone, Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block mb-1">Phone <span className='text-red-500'>*</span></label>
            <input type="number" max={10} className="w-full border p-2 focus:outline-none" required  />
          </div>
          <div>
            <label className="block mb-1">Email Address <span className='text-red-500'>*</span></label>
            <input type="email" className="w-full border p-2 focus:outline-none" required  />
          </div>
        </div>

        {/* Delivery Location with Map (Autocomplete feature placeholder) */}
        <div className="mt-4">
          <label className="block mb-1">Delivery Location <span className='text-red-500'>*</span></label>
          
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_API_KEY" libraries={libraries}>
            <Autocomplete
              onLoad={(autocomplete) => setAutocomplete(autocomplete)}
              onPlaceChanged={onPlaceChanged}
            >
              <input
                type="text"
                className="w-full border p-2 focus:outline-none mb-2"
                placeholder="Enter city name"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required 
              />
            </Autocomplete>
          </LoadScript>

          {/* Map display placeholder */}
          <div className="w-full h-40 bg-gray-200 mt-2 focus:outline-none">Map goes here...</div>
        </div>


        {/* Account Username and Password */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block mb-1">Account Username <span className='text-red-500'>*</span></label>
            <input type="text" className="w-full border p-2 focus:outline-none" required />
          </div>
          <div>
            <label className="block mb-1">Create Account Password <span className='text-red-500'>*</span></label>
            <input type="password" className="w-full border p-2 focus:outline-none" required />
          </div>
        </div>

        {/* Ship to a Different Address */}
        <div className="mt-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 focus:outline-none" onChange={handleCheckboxChange} />
            Ship to a different address?
          </label>
        </div>

        {/* Different Shipping Address Form (Toggle based on checkbox) */}
        {shipToDifferentAddress && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Shipping Address</h3>

            {/* Same fields as Billing Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block mb-1">First Name</label>
                <input type="text" className="w-full border p-2 focus:outline-none" />
              </div>
              <div>
                <label className="block mb-1">Last Name</label>
                <input type="text" className="w-full border p-2 focus:outline-none" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block mb-1">Company Name (Optional)</label>
              <input type="text" className="w-full border p-2 focus:outline-none" />
            </div>
            <div className="mt-4">
              <label className="block mb-1">Country</label>
              <select className="w-full border p-2 focus:outline-none">
                {countries.map((country, index) => (
                  <option key={index} value={country} selected={country === 'India'}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <label className="block mb-1">Street Address</label>
              <input type="text" className="w-full border p-2 focus:outline-none mb-2" placeholder="Address Line 1" />
              <input type="text" className="w-full border p-2 focus:outline-none" placeholder="Address Line 2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block mb-1">City</label>
                <input type="text" className="w-full border p-2 focus:outline-none" />
              </div>
              <div>
                <label className="block mb-1">State</label>
                <select className="w-full border p-2 focus:outline-none">
                  {states.map((state, index) => (
                    <option key={index} value={state} selected={state === 'Odisha'}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-1">Pincode</label>
                <input type="text" className="w-full border p-2 focus:outline-none" />
              </div>
            </div>
          </div>
        )}

        {/* Order Notes (Optional) */}
        <div className="mt-4">
          <label className="block mb-1">Order Notes (Optional)</label>
          <textarea className="w-full border p-2 focus:outline-none" rows="4" placeholder="Any special notes for delivery"></textarea>
        </div>

       
      </form>
    </div>
  );
};

export default BillingForm;
