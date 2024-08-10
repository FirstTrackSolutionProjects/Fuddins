import React,{ useEffect } from "react";
import CareerForm from "../Components/CareerForm";

const Career =()=>{
    useEffect(() => {
        document.title = "Career - Fuddins";
    }, []);
    return(
        <div>
            <div className=" w-full mx-auto z-0 font-inter">
                <div className="absolute w-full h-80 flex items-center justify-center bg-black bg-opacity-50 text-white text-center p-4">
                    <h1 className="text-3xl md:text-6xl font-domine font-bold">Work With Us!</h1>
                </div>
                    <img src="images/career.jpg" alt="Placeholder" className="w-full h-80 object-cover "/>
            </div>
            <div className="text-lg my-5 p-5 font-poppins">Want to work with us , Please feel free to contact us.</div>
            <div className="md:grid md:grid-cols-2  bg-beige bg-opacity-30 p-5">
                <div className="h-fit">
                    <CareerForm/>
                </div>
                <div>
                    <img src="images/career2.jpg" className="w-full h-96 md:h-[715px] px-3"></img>
                </div>
            </div>
            <div className="grid grid-cols-2 py-10 md:py-20">
                <div className="text-center font-domine text-2xl md:text-4xl font-semibold">Contact Us</div>
                <div className="flex gap-2 md:gap-3 mx-auto font-poppins">
                    <div className="text-white bg-myGreen p-1 text-sm md:text-base md:px-5 md:py-2 text-center rounded-md">Email</div>
                    <div className="text-white bg-myGreen p-1 text-sm md:text-base md:px-5 md:py-2 text-center rounded-md">Message Us</div>
                </div>
            </div>
        </div>
    )
}

export default Career;