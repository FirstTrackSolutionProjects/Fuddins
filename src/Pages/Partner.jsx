import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import { BsBasket2Fill, BsCalendar2CheckFill, BsCheckCircle } from "react-icons/bs";
import { IoEarthSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Partner =()=>{
    const playStoreUrl  ='https://play.google.com/store/apps/details?id=com.mstoreapp.flutter1671849938376&pcampaignid=web_share';
    return(
        <div>
            {/*div1*/}
            <div className="relative w-full h-fit">
      {/* Background Image */}
      <img src="images/partner.png" className=" object-cover absolute w-full h-[280px] md:h-[500px] inset-0 bg-cover bg-center bg-no-repeat" ></img>

      {/* Overlay content */}
      
      <div className="relative z-10 font-poppins justify-center h-[280px] md:h-[500px]  text-white bg-black bg-opacity-50">
      <div className="flex gap-2 md:gap-20 items-center justify-center">
        <div><img src="images/fudBus2.png" className="w-28 md:w-36 md:mx-10"></img></div>
        <Link to="/login"><div className="text-white text-sm md:text-base bg-lime-600 w-fit h-fit px-2 py-1  md:px-10 md:py-3 rounded-md">LOGIN</div></Link>
        <Link to="/exelog"><div className="text-white text-sm md:text-base bg-lime-600 w-fit h-fit px-2 py-1  md:px-8 md:py-3 rounded-md">CREATE ACCOUNT</div></Link>
        <Link to=""><div className="hidden md:block text-white bg-lime-600 w-fit h-fit px-8 py-3 rounded-md">MEMBERSHIP PLANS</div></Link>

      </div>
        <div className=" md:w-1/2 mx-auto p-5 md:p-0">
            <div className="text-xl md:text-4xl font-bold my-2 font-domine">Register your store on Fuddins</div>
            <div className="text-lg md:text-xl my-2">and get more customers!</div>
            <div className="md:hidden flex gap-3">
            <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">
                <img src="images/playstore.png" className="w-32"></img></a>
                <img src="images/app.png" className="w-32"></img>
            </div>
            <div className="flex md:gap-5">
            <Link to="/exelog"><div className="hidden md:block bg-lime-600 py-2 px-5 rounded-md">REGISTER YOUR STORE</div></Link>
                <div className="hidden md:block bg-lime-600 py-2 px-5 rounded-md">STORE ALREADY LISTED? LOGIN NOW</div>
            </div>
            <div className="hidden md:block bg-white text-black rounded-xl my-3  py-3 w-5/6 ">
            <div className="text-center text-2xl font-bold font-domine">Get started with online ordering</div>
            <div className="text-center">Please keep your documents ready for a smooth signup</div>
            <img src="images/leaf2.png" className="mx-auto"></img>
            <div className="grid grid-cols-2 grid-rows-3 w-fit gap-x-5 mx-auto gap-y-2 my-3">
                <div className="flex  items-center"><BiCheckCircle className="h-5 w-5 mx-1 text-lime-500 font-bold"/>FSSAI license copy</div>
                <div className="flex  items-center"><BiCheckCircle className="h-5 w-5 mx-1 text-lime-500 font-bold"/>PAN Card copy</div>
                <div className="flex  items-center"><BiCheckCircle className="h-5 w-5 mx-1 text-lime-500 font-bold"/>GSTIN (if applicable)</div>
                <div className="flex  items-center"><BiCheckCircle className="h-5 w-5 mx-1 text-lime-500 font-bold"/>Bank Account Details</div>
                <div className="flex  items-center"><BiCheckCircle className="h-5 w-5 mx-1 text-lime-500 font-bold"/>Your Restaurant Menu</div>
                <div className="flex  items-center"><BiCheckCircle className="h-5 w-5 mx-1 text-lime-500 font-bold"/>AADHAR card copy</div>
            </div>
        </div>
        </div>
        
      </div>
    </div>
    <div className="bg-beige bg-opacity-30 p-2">
    <div className="md:hidden block bg-white text-black rounded-xl my-3  py-3 ">
            <div className="text-center text-2xl font-bold font-domine">Get started with online ordering</div>
            <div className="text-center my-2">Please keep your documents ready for a smooth signup</div>
            <img src="images/leaf2.png" className="mx-auto"></img>
            <div className="grid grid-cols-2 grid-rows-3 w-fit mx-auto my-3">
                <div className="flex  items-center"><BiCheckCircle className="h-5 w-5 mx-1 text-lime-500 font-bold"/>FSSAI license copy</div>
                <div className="flex  items-center"><BiCheckCircle className="h-5 w-5 mx-1 text-lime-500 font-bold"/>PAN Card copy</div>
                <div className="flex  items-center"><BiCheckCircle className="h-5 w-5 mx-1 text-lime-500 font-bold"/>GSTIN (if applicable)</div>
                <div className="flex  items-center"><BiCheckCircle className="h-5 w-5 mx-1 text-lime-500 font-bold"/>Bank Account Details</div>
                <div className="flex  items-center"><BiCheckCircle className="h-5 w-5 mx-1 text-lime-500 font-bold"/>Your Restaurant Menu</div>
                <div className="flex  items-center"><BiCheckCircle className="h-5 w-5 mx-1 text-lime-500 font-bold"/>AADHAR card copy</div>
            </div>
        </div>
            {/*div2 */}
            <div className="justify-center space-y-5 py-5 px-10">
                <div className="text-xl md:text-3xl font-domine font-semibold text-center">Why should you be a partner with Fuddins?</div>
                <div className="text-sm text-gray-600 font-poppins text-center">Fuddins enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business.</div>
                <div className="md:grid md:grid-cols-3 space-y-5 ">
                    <div className="md:flex w-fit mx-auto items-center justify-center ">
                        <IoEarthSharp className="w-14 h-14  mx-auto text-lime-700"/>
                        <div className="text-xl font-domine m-2 text-center">500 + Cities <br/> <span className="text-base font-poppins text-gray-600">in India</span></div>
                    </div>
                    <div className="md:flex w-fit mx-auto items-center justify-center">
                    <BsBasket2Fill className="w-14 h-14  mx-auto text-lime-700"/>
                    <div className="text-xl font-domine m-2 text-center">50000+ Stores <br/><span className="text-base font-poppins text-gray-600">Store Listings</span></div>
                    </div>
                    <div className="md:flex w-fit mx-auto items-center justify-center">
                        <BsCalendar2CheckFill className="w-12 h-12 mx-auto text-lime-700"/>
                        <div className="text-xl font-domine m-2  text-center ">1 Lakh+ Orders <br/><span className="text-base font-poppins text-gray-600">Daily Orders</span></div>
                    </div>

                </div>
            </div>
            </div>
        </div>
    )
}

export default Partner;