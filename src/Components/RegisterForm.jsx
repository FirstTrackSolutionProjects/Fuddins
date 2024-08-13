import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import OtpInput from 'react-otp-input';
import 'tailwindcss/tailwind.css';

const RegisterForm = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleSendOtp = () => {
    // Send OTP logic here
    setShowOtpInput(true);
  };

  const handleVerifyOtp = () => {
    // Verify OTP logic here
    if (otp === '1234') { // Assume '1234' is the correct OTP for example purposes
      setIsVerified(true);
    } else {
      alert('Invalid OTP');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (isVerified) {
      // Registration logic here
      alert('Registered successfully!');
    } else {
      alert('Please verify your phone number.');
    }
  };

  const [countryCode, setCountryCode] = useState('+91');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  return (
    <div className="max-w-lg mx-auto p-1">
      <form onSubmit={handleRegister} className="border border-gray-200 rounded-md px-3 py-5">
        <div className="mb-4">
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
      <div>
          <button
            type="button"
            onClick={handleSendOtp}
            className=" w-fit md:w-full p-1 my-3 md:my-0 bg-myGreen text-white rounded hover:bg-myGreen"
          >
            Send OTP
          </button>
          </div>
        </div>
        {showOtpInput && (
          <div className="mb-4">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              separator={<span>-</span>}
              inputStyle="w-10 h-10 border rounded-md text-center"
            />
            <button
              type="button"
              onClick={handleVerifyOtp}
              className="mt-2 w-full bg-myGreen text-white py-2 rounded hover:bg-green-500"
            >
              Verify OTP
            </button>
          </div>
        )}
        <div className="mb-4">
          <label className="block mb-2">Username <span className='text-red-600 font-semibold'>*</span></label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
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
        <div className='mb-5 font-poppins text-sm md:text-base'>
        Your personal data will be used to support your experience throughout this website, to manage access to your account,
         and for other purposes described in our <span className='text-myGreen'> privacy policy.</span>
        </div>
        <button
          type="submit"
          className="w-fit px-3 font-semibold bg-myGreen text-white py-2 rounded hover:bg-myGreen"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
