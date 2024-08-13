import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'tailwindcss/tailwind.css';

const Login = () => {
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleMobileLogin = (e) => {
    e.preventDefault();
    // Handle mobile login logic here
    console.log({
      phone
    });
    alert('Logged in with mobile successfully!');
  };

  const [countryCode, setCountryCode] = useState('+91');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    // Handle email login logic here
    console.log({
      email,
      password,
      rememberMe
    });
    alert('Logged in with email successfully!');
  };

  return (
    <div className="max-w-md mx-auto p-1">
      {!isEmailLogin ? (
        <form onSubmit={handleMobileLogin} className="border border-gray-200 p-4 md:p-6 rounded-md">
          <div className="text-xl mb-6">Login with Mobile</div>
          <label className="block mb-2">Phone <span className='text-red-600 font-semibold'>*</span></label>
          <div className='flex gap-1 my-2'>
        <select 
          value={countryCode} 
          onChange={handleCountryCodeChange}
          className="border text-sm border-gray-300  p-1 focus:outline-none"
        >
          <option value="+91">India (+91)</option>
          <option value="+1">USA (+1)</option>
          <option value="+44">UK (+44)</option>
          <option value="+61">Australia (+61)</option>
          {/* Add more country codes as needed */}
        </select>
      
        <input 
          type="tel" 
          value={mobileNumber} 
          onChange={handleMobileNumberChange}
          placeholder="Enter mobile number"
          className="border text-sm border-gray-300 p-1  w-full"
        />
      </div>
          <div className='flex gap-5'>
          <button
            type="submit"
            className="w-full bg-myGreen text-white text-sm p-1  md:text-base md:py-2 rounded hover:bg-myGreen"
          >
            Login with Mobile
          </button>
          <button
            type="button"
            onClick={() => setIsEmailLogin(true)}
            className=" w-full bg-gray-500 text-white text-sm p-2  md:text-base md:py-2 rounded hover:bg-gray-700"
          >
            Login with Email
          </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleEmailLogin} className="border border-gray-200 p-6 rounded-lg ">
          <h2 className="text-xl  mb-6">Login with Email</h2>
          <div className="mb-4">
            <label className="block mb-2">Email <span className='text-red-600 font-semibold'>*</span></label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password <span className='text-red-600 font-semibold'>*</span></label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2"
            />
            <label>Remember Me</label>
          </div>
          <div className="mb-4 text-right">
            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
          </div>
          <div className='flex gap-5'>
          <button
            type="submit"
            className="w-full bg-myGreen text-white text-sm p-2  md:text-base md:py-2 rounded hover:bg-myGreen"
          >
            Login with Email
          </button>
          <button
            type="button"
            onClick={() => setIsEmailLogin(false)}
            className=" w-full bg-gray-500 text-white text-sm p-2  md:text-base md:py-2 rounded hover:bg-gray-700"
          >
            Login with Mobile
          </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
