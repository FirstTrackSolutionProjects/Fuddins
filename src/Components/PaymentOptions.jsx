import React, { useState } from 'react';

const PaymentOptions = () => {
  const [selectedPayment, setSelectedPayment] = useState('');

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  return (
    <div className="p-4">
      <div className="mb-2">
        <label className="flex items-center">
          <input
            type="radio"
            name="payment"
            value="cod"
            onChange={handlePaymentChange}
            className="mr-2"
          />
          Cash on Delivery
        </label>
      </div>
      <div className="mb-2">
        <label className="flex items-center">
          <input
            type="radio"
            name="payment"
            value="online"
            onChange={handlePaymentChange}
            className="mr-2"
          />
          PhonePe, Google Pay, Debit Card
        </label>
      </div>
        <div>
            <img src="images/billingRazor.JPG" className='w-52'></img>
        </div>
      {/* Conditional rendering based on selected payment */}
      {selectedPayment === 'cod' && (
        <p className="mt-4 bg-gray-100 p-2 text-gray-500">Pay with cash upon delivery.</p>
      )}
      {selectedPayment === 'online' && (
        <p className="mt-4 bg-gray-100 p-2 text-gray-500">Pay securely by UPI, Credit or Debit card or Internet Banking through Razorpay.</p>
      )}
    </div>
  );
};

export default PaymentOptions;
