import React, { useState } from "react";
import StarRating from "./StarRating";
import { BsQuestionCircleFill } from "react-icons/bs";
import TabComp from "./TabComp";

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
                            <div className="bg-lime-500 text-white py-1 md:px-10 px-2 rounded-md text-lg font-poppins">ADD TO CART</div>
      
                        </div>

                        
                            <div className=" flex  items-center gap-3 border border-gray-400 p-3 w-fit rounded-md">
                                <div>
                                    <img src="images/1.png" className="w-20 rounded-full"></img>
                                </div>
                                <div className="">
                                    <div className="text-gray-400 italic">store</div>
                                    <div className="text-lg">Store Name</div>
                                    <div><StarRating rating={3} /></div>
                                </div>  
                        </div>

                            <div className="flex gap-5">
                                <div>SKU:N/A</div>
                                <div>Category: <span className="text-myGreen">Category Name</span></div>
                            </div>

                            <div className=" flex items-center gap-1 w-fit bg-lime-400 text-white py-1 px-5"><BsQuestionCircleFill/> <span>Ask a Question</span></div>
                    </div>
                </div>
            </div>
            <div className="p-2">
                
            </div>
        </div>
    )
}

export default ProductDetail;