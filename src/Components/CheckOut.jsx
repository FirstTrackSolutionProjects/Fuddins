import React, { useState } from 'react';
import Login from './Login';
import 'react-phone-input-2/lib/style.css';
import 'tailwindcss/tailwind.css';
import BillingForm from './BillingForm';
import PaymentOptions from './PaymentOptions';

const CheckOut =()=>{
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showCoupon, setShowCoupon] = useState(false);

    const toggleCoupon = ()=>{
      setShowCoupon(!showCoupon);
    }

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };
  const [countryCode, setCountryCode] = useState('+91');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleMobileLogin = (e) => {
    e.preventDefault();
    // Handle mobile login logic here
    console.log({
      phone
    });
    alert('Logged in with mobile successfully!');
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

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product A',
      image: 'path_to_image_1.jpg',
      price: 500,
      quantity: 2,
      weight: '50gm',
    },
    {
      id: 2,
      name: 'Product B',
      image: 'path_to_image_2.jpg',
      price: 300,
      quantity: 1,
      weight: '1kg'
    },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shippingCharges = 0; // Example shipping charge
  const subTotal = totalAmount + shippingCharges;
    return(
        <div className='bg-beige bg-opacity-30 h-fit p-8 font-poppins '>
            <div>
                <div className='text-2xl md:text-3xl font-domine font-semibold'>Checkout</div>
                <div className='border-t-2 border-lime-500 w-full my-3'></div>
                <div>
                    <div className='text-sm md:text-base'>Returning customer? <span onClick={toggleLoginForm} className='text-lime-600 cursor-pointer'>Click here to login</span></div>
                    {showLoginForm && (
        <div className="mt-4 w-full p-4 ">
            <div className='text-sm md:text-base'>If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing section.</div>
            
            <div className='md:flex gap-10 w-full  p-5'>
            <div>
                <label className='text-sm md:text-base'>Phone or Email Address <span className='text-red-500 font-bold'>*</span></label>
                <input type="text" placeholder="Enter your email" className=" text-sm md:text-base max-w-xl w-full p-2  border border-gray-300 rounded-lg"/>
            </div>
            
            <div>
                <label className='text-sm md:text-base'>Password <span className='text-red-500 font-bold'>*</span></label>
                <input type="password" placeholder="Enter your password" className=" text-sm md:text-base max-w-xl w-full p-2  border border-gray-300 rounded-lg"/></div>
            </div>
            <div className="flex items-center py-2 px-6">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="mr-2"
            />
            <label className='text-sm md:text-base'>Remember Me</label>
          </div>

          <div className='px-5'>
            <button className="w-fit px-6 bg-lime-500 text-white py-2 rounded-md text-sm md:text-base">Login</button>
          </div>
            
         <div className='text-lime-600 px-5 py-2 text-sm md:text-base'>Lost Your Password?</div>

          <div className='px-5'>
            <button className="w-fit px-6 bg-lime-500 text-white py-2 rounded-md text-sm md:text-base">Login with OTP</button>
          </div>

        </div>
      )}
                </div> 
                {/*DIV 2*/}
                <div>
                <div className="max-w-xl pt-8 p-2">
      {!isEmailLogin ? (
        <form onSubmit={handleMobileLogin} className=" p-4 md:p-6 rounded-md">
            
          <label className="block mb-2 text-sm md:text-base">Phone <span className='text-red-600 font-semibold'>*</span></label>
          <div className='flex md:gap-4 gap-2 my-2'>
        <select 
          value={countryCode} 
          onChange={handleCountryCodeChange}
          className="border md:text-base border-gray-300 text-sm  p-1 focus:outline-none w-28 md:w-fit"
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
          className="border md:text-base border-gray-300 p-1 text-xs  w-full"
        />
      </div>
          <div className='flex gap-5'>
          <button
            type="submit"
            className="w-full bg-lime-500 text-white text-sm p-1  md:text-base md:py-2 rounded hover:bg-lime-500"
          >
            Login with Mobile
          </button>
          <button
            type="button"
            onClick={() => setIsEmailLogin(true)}
            className=" w-full bg-lime-500 text-white text-sm p-2  md:text-base md:py-2 rounded hover:bg-gray-700"
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
            className="w-full bg-lime-500 text-white text-sm p-2  md:text-base md:py-2 rounded hover:bg-lime-500"
          >
            Login with Email
          </button>
          <button
            type="button"
            onClick={() => setIsEmailLogin(false)}
            className=" w-full bg-lime-500 text-white text-sm p-2  md:text-base md:py-2 rounded hover:bg-gray-700"
          >
            Login with Mobile
          </button>
          </div>
        </form>
      )}
    </div>
                </div>
                <div className='border-t-2 border-lime-500 w-full mb-3'></div>
                <div>
                <div className='text-sm md:text-base'>Have a coupon? <span onClick={toggleCoupon} className='text-lime-600 cursor-pointer'>Click here to enter your code</span></div>
                {showCoupon && (
                  <div className='w-full md:max-w-xl mx-auto md:mx-0 py-8'>
                    <div className='text-sm my-3'>If you have a coupon code, please apply it below.</div>
                    <div className='md:flex md:gap-3 block'>
                    <div className='mb-3'><input type='text' placeholder='Enter Coupon Code' className='px-1 border border-gray-300 py-2 w-full text-sm'></input></div>
                    <div className='bg-lime-500 text-white text-center mb-3 py-2 rounded-md md:px-3'>APPLY COUPON</div>
                  </div>
                  </div>
                )}
                </div>
            </div>
            {/*Billing address*/}
            <div className='mt-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
              <div>
              <div className='text-2xl  font-domine font-semibold'>Billing Address</div>
            <div className='border-t border-gray-300 w-full my-3'></div>
            <BillingForm/>
              </div>

              <div>
              <div className='border-2 border-gray-300 text-sm md:text-base p-5 w-full md:max-w-lg mx-auto'>
              <div className='mb-5 font-domine text-lg'> Your Order </div>
              <div className='flex justify-between mb-2 text-gray-700'>
                <div>Product</div>
                <div>SubTotal</div>
              </div>
              <div className='border-t border-gray-300'></div>
              <div>
                {cartItems.map((item) => (
                  <div>
                  <div key={item.id} className='flex justify-between py-3'>
                      <div className='text-gray-600'>{item.name} - {item.weight}<br/>Store: <span className='text-cyan-500'>Store Name</span></div>
                      <div className='text-gray-600'> x <span className='ml-4'>{item.quantity}</span></div>
                      <div className='text-gray-600'>₹ {(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                  <div className='border-t border-gray-300'></div>
                  </div>
                ))}
              </div>
              <div className='flex justify-between py-3'>
                <div>SubTotal</div>
                <div>₹ {totalAmount}</div>
              </div>
              <div className='border-t border-gray-300'></div>
              
              <div className='flex justify-between py-3'>
                <div className='text-pretty text-gray-600'>Fuddins Mart bbsr Shipping ()<br/> (Shop for ₹1908 more to get free shipping)</div>
                <div className='text-right text-balance md:text-pretty text-gray-600'>Enter your address to view shipping options.</div>
              </div>

              <div className='border-t border-gray-300'></div>

              <div className='flex justify-between py-3'>
                <div>Total</div>
                <div>₹ {subTotal}</div>
              </div>

              <div className='border-t border-gray-300'></div>

              <div>
                <PaymentOptions/>
              </div>

              <div className='px-1 py-2'>
              Your personal data will be used to process your order, support your experience throughout this website,
               and for other purposes described in our <span className='text-lime-500'>privacy policy.</span>
              </div>

              <div className='w-full bg-lime-500 text-center font-semibold rounded-sm text-white p-2 mt-2'>
                PLACE ORDER
              </div>


              </div>
              </div>

            </div>
            
            
            
            </div>

        </div>
    )
}

export default CheckOut;