import React from "react";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";
import HeartButton from "./HeartButton";

const Product =()=>{
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    return(
        <div>
        {/*<div className="py-2 md:py-0">
            <Link to="/detail"><div className="bg-white w-full py-2 items-center justify-center my-auto mx-auto "><img src="images/categories/grocery.jpg" className="w-44 h-36 md:w-56 md:h-48 p-2 rounded-md mx-auto border-4 border-orange-300"></img></div></Link>
            <div className="p-1 md:p-5 space-y-2">
            <div className="text-gray-600 text-xs md:text-sm">Category</div>
            <Link to="/detail"><div className="text-black font-domine text-lg md:text-xl">Product Name</div></Link>
            <div>₹ 50.00</div>
            <div className="grid grid-cols-4  gap-1 md:gap-2 ">
            <div className="bg-white border border-gray-500 text-xs md:text-base w-fit px-1 py-1 rounded ">1 Kg</div>
            </div>
            
            <div className=" bg-lime-600 text-white text-sm md:text-base px-2 md:px-5 py-2 rounded w-fit">ADD TO CART</div>
            <div className="text-sm md:text-base">Store: <span className="text-cyan-600">Store Name</span></div>
            <div><StarRating rating={4} /></div>
            </div>
        </div>*/}
        <div className=" p-1 md:p-3  justify-center bg-slate-50 rounded-2xl font-poppins">
            <div className="flex md:block items-center justify-between ">
            <div className="">
                <Link onClick={scrollToTop} to="/product-details"><img src="images/categories/grocery.jpg" className="w-32 p-1 md:w-52 mx-auto object-contain"></img></Link>
            </div>
            <div>
            <div className="text-gray-600 text-xs md:text-sm mt-3">Category</div>
            <Link onClick={scrollToTop} to="/product-details"><div className="mb-2 text-base md:text-lg">Product Name</div></Link>
            <div className="flex gap-6 md:gap-0 justify-between mb-3">
            <div className="text-sm md:text-lg">₹ 50.00</div>
                <select id="quantity" className="mr-5 focus:outline-none text-center w-12 md:w-16 md:py-1 md:px-2 text-xs md:text-sm text-gray-900 rounded-full bg-lime-600 bg-opacity-10">
                    <option className="focus:outline-none hover:deoration-none hover:text-black hover:bg-lime-600 hover:bg-opacity-30">1 Kg</option>
                    <option>5 Kg</option>
                </select>
                
            </div>
            </div>
            </div>
            <div className="hidden md:block text-xs text-center text-gray-500 mb-3"> Some product description</div>
            <div className="flex justify-between items-center">
            <div className="text-center items-center py-1 md:mx-auto w-[70%] bg-lime-600 bg-opacity-30 rounded-md text-sm">ADD TO CART</div>
            <HeartButton/>
            </div>
        </div>
        </div>
    )
}

export default Product;