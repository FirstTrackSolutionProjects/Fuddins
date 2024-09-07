import React, { useState } from "react";
import StarRating from "./StarRating";
import { BsQuestionCircleFill } from "react-icons/bs";
import TabComp from "./TabComp";
import Product from './Product';
import { Link } from "react-router-dom";

const ProductDetail =()=>{
    const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  // Toggle modal visibility
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
    return(
        <div className="bg-beige bg-opacity-30 p-2">
            {/*div 1*/}
            <div className="grid md:grid-cols-2">
                <div className="p-5">
                <div className="bg-white w-full h-fit items-center my-auto p-8">
                    <img src="images/atta.png" className="my-auto p-5 items-center mx-auto w-full h-fit"></img>
                </div>
                </div>
                <div>
                    <div className="space-y-5 p-5">
                        <div className="text-3xl font-domine font-semibold">Product Name</div>
                        <div className="text-2xl font-semibold">₹51.00 – ₹218.00</div>
                        <div className="text-gray-700">Aashirvaad Superior MP Whole Wheat Atta provides virtuousness of taste in every bite. Also, it has a sweet and sweet taste that works together to give you fuller and softer rotis, every single time. Buy Aashirvaad Superior MP Whole Wheat Atta online now!</div>
                        <div className="flex gap-1 md:gap-2 ">
                            <div className="bg-white border border-gray-500 text-xs md:text-base w-fit px-2 py-1 rounded ">1 Kg</div>
                            <div className="bg-white border border-gray-500 text-xs md:text-base w-fit px-2 py-1 rounded ">5 Kg</div>
                        </div>
                        <div className="text-2xl font-semibold">₹51.00</div>
                        
                        <div className="flex items-center space-x-5">
                            <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} 
                                className="w-16 p-1 text-center border border-gray-300 rounded-sm"/>
                            <Link to="/cart"><div className="bg-lime-500 hover:bg-lime-400 text-white py-1 md:px-10 px-2 rounded-md text-lg font-poppins">ADD TO CART</div></Link>
      
                        </div>

                        
                            <div className=" flex  items-center gap-3 border border-gray-400 p-3 w-fit rounded-md">
                                <div>
                                    <img src="images/1.png" className="w-20 h-14 rounded-full"></img>
                                </div>
                                <div className="">
                                    <div className="text-gray-400 italic">store</div>
                                    <div className="text-lg">Store Name</div>
                                    <div><StarRating rating={3} /></div>
                                </div>  
                        </div>

                            <div className="flex gap-5">
                                <div>SKU:N/A</div>
                                <div>Category: <span className="text-lime-500">Category Name</span></div>
                            </div>

                            <button onClick={toggleModal} className=" flex items-center gap-1 w-fit bg-lime-500 hover:bg-black text-white py-1 px-5"><BsQuestionCircleFill/> <span>Ask a Question</span></button>
                            {isOpen && (
        <div className="fixed font-poppins inset-0 bg-gray-800 bg-opacity-50 h-screen flex justify-center items-center z-50">
          {/* Modal content */}
          <div className="bg-white rounded-lg shadow-lg w-full max-w-xs mx-auto p-6 md:p-8 relative">
            {/* Close button */}
            <button
              onClick={toggleModal}
              className="absolute text-xl top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
            
            <h2 className="text-xl font-bold mb-4 text-cyan-500">Ask Your Question</h2>

            {/* Form */}
            <form>
              {/* Name field */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email field */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Your email will not be published.
                </p>
              </div>

              {/* Enquiry field */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="enquiry">
                  Your Enquiry <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="enquiry"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Type your question here"
                ></textarea>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
                    </div>
                </div>
            </div>
            <div className="p-2">
                <TabComp/>
            </div>
            <div>
                <div className="text-2xl font-domine font-semibold py-5 text-center">Related Products</div>
                <div className="grid grid-cols-1 md:grid-cols-4 space-y-2 space-x-1">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
                
            </div>
        </div>
    )
}

export default ProductDetail;