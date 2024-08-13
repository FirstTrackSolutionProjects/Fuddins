import React from "react";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

const Product =()=>{
    return(
        <div className="py-2 md:py-0">
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
        </div>
    )
}

export default Product;