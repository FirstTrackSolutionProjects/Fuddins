import { Button } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { BiCross } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [isDisabled, setIsDisabled] = useState(true); 
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
  const shippingCharges = 100; // Example shipping charge
  const subTotal = totalAmount + shippingCharges;

  return (
    <div className="bg-beige bg-opacity-30 mx-auto p-2 md:p-4">
        <div className='font-domine text-2xl md:text-4xl font-bold mb-3'>Cart</div>
        <div className='border-2 border-lime-500 w-full mb-3'></div>
      {/* Cart Table */}
      <div className='md:block hidden md:p-4 p-2'>
      <table className=" text-sm md:text-base max-w-4xl w-full mx-auto bg-white border border-gray-300">
        <thead>
          <tr className='bg-white border border-gray-300'>
            <th></th>
            
            <th className="p-2 text-center">Product</th>
            <th className="p-2 text-center">Price</th>
            <th className="p-2 text-center">Quantity</th>
            <th className="p-2 text-center">Total</th>
          </tr>
        </thead>
        <tbody className='bg-beige bg-opacity-30 border border-gray-300'>
          {cartItems.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-4 text-center flex gap-5">
                
                <XCircleIcon onClick={() => removeItem(item.id)} className='text-gray-400 w-6 h-6 mx-auto'/>
             
              <img src={item.image} alt={item.name} className="w-fit h-12 mr-4 inline-block" />
              </td>
              <td className="py-4 text-center">
                
                <div className='text-lime-500'>{item.name} - {item.weight}</div>
                <div>Store: <span className='text-cyan-500'>Store Name</span></div>
              </td>
              <td className="py-4 text-center">₹ {item.price}</td>
              <td className="py-4 text-center">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-16 text-center border border-gray-300 rounded"
                />
              </td>
              <td className="py-4 text-center">₹ {(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
          <tr className="border-b" >
            
            
            <td className='py-4 text-right'>
              <input type='text' placeholder='Enter Coupon code' className=' w-40 p-2 rounded-md border border-gray-300'></input>
            </td>
            
            <td className='py-4'><div className='bg-lime-600 text-white p-2 w-40 text-center rounded-md ml-2'>APPLY COUPON</div></td>
            
            <td></td>
            <td></td>
            <td className='py-4 px-2'><button disabled={isDisabled} className='bg-lime-600 text-white w-full py-2 rounded-md'>UPDATE CART</button></td>
            
          </tr>
        </tbody>
      </table>
      </div>

      {/*cart for small screen*/}
      <div className='block md:hidden'>
      {cartItems.map((item) => (
        <div className='py-3'>
      <div key={item.id} className='flex-1 border border-gray-200'>
        <div className='border-b border-gray-200 text-right p-2'>
          <XCircleIcon className='text-xl text-gray-400 w-6 h-6 inline-block'/>
        </div>
        <div className='border-b border-gray-200'>
        <img src={item.image} alt={item.name} className="w-fit m-2 p-2 h-12 mx-auto" />
        </div>
        <div className='border-b border-gray-200  p-2'>
          <div className='flex justify-between'>
          <div>Product:</div>
          <div className='text-lime-500'>{item.name} - {item.weight}</div>
          </div>
          <div className='flex justify-between'>
          <div>Store:</div>
          <div className='text-cyan-500'>Store Name</div>
          </div>
        </div>
        <div className='border-b border-gray-200 flex justify-between p-2 '>
        <div>Price: </div>
        <div>₹ {(item.price).toFixed(2)}</div>
        </div>
        <div className='border-b border-gray-200 flex justify-between p-2 '>
          <div>Quantity:</div>
          <div>
          <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-16 text-center border border-gray-300 rounded"
                />
          </div>
        </div>
        <div className='border-b border-gray-200 flex justify-between p-2 '>
          <div>SubTotal:</div>
          <div>₹ {(item.price * item.quantity).toFixed(2)}</div>
        </div>
        
      </div></div>))}
      <div>
        <div className='border-b border-gray-200 flex gap-3 p-2'>
        <div className=''><input type='text' placeholder='Enter Coupon code' className='p-1 rounded-md border border-gray-400'></input></div>
        <div className='bg-lime-500 text-white p-1 px-3 rounded-md'>APPLY COUPON</div>
        </div>
        <div className='p-2'>
          <button disabled={isDisabled} className='bg-lime-500 text-white w-full py-2 rounded-md'>UPDATE CART</button>
        </div>
        </div>
      </div>

      {/* Total Summary */}
      <div className="m-6 mx-auto md:mx-0 md:ml-auto max-w-xl bg-transparent border border-gray-300">
        <div className='font-domine text-xl font-semibold bg-white w-full p-4'>Cart Total</div>
        <div className='p-4'>
        <div className="flex justify-between py-2 md:py-3">
          <span>Sub Total</span>
          <span>₹ {totalAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-2 md:py-3">
          <div className='text-pretty'>Fuddins Mart bbsr Shipping ()<br/> (Shop for ₹1908 more to get free shipping)</div>
          <div className='text-right'>Enter your address to view shipping options.<br/><span className='text-lime-500'>Calculate Shipping</span></div>
        </div>
        <div className="flex justify-between mt-2 font-bold md:py-3">
          <span>Total</span>
          <span>₹ {totalAmount.toFixed(2)}</span>
        </div>
        <Link to="/checkout"><button className="mt-4 w-full bg-lime-500 text-white py-4 rounded-lg">
          PROCEED TO CHECKOUT
        </button></Link>
      </div>
      </div>
    </div>
  );
};

export default Cart;
