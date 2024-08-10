import React from "react";
import { BsCircleFill } from "react-icons/bs";
import RazorpayButton from "../Components/RazorpayButton";

const ShoppingCard =()=>{
    return(
        <div className="bg-beige bg-opacity-30">
            <div className="p-2">
            <img src="images/shoppingcard.jpeg" className="mx-auto"></img></div>
            <div className="text-center pt-8 md:pt-16 md:pb-10">
                <div className="text-3xl font-domine font-semibold">What Benefits For You</div>
                <div className="text-lg text-gray-600">Save money with shopping cards and shop for more of the things you love</div>
            </div>
            <div className="md:grid md:grid-cols-2 p-10">
                <div>
                    <img src="images/shoppingcard2.jpg" className=""></img>
                </div>
                <div className="px-10">
                    <div className="text-xl font-domine my-2">Card Benefits You Should Know</div>
                    <div className="text-gray-600 text-lg flex items-center my-4"><BsCircleFill className="w-3 h-3 text-black mx-2"/>Save More, Shop More</div>
                    <div className="text-gray-600 text-lg flex items-center my-4"><BsCircleFill className="w-3 h-3 text-black mx-2"/>One Time Apply Card</div>
                    <div>
                        <RazorpayButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCard;