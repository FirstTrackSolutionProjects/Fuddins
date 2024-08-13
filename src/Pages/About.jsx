import React,{ useEffect } from "react";
import CounterCard from "../Components/CounterCard";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/solid";

const About =()=>{
    useEffect(() => {
        document.title = "About Us - Fuddins";
    }, []); 
    return(
        <div>
            <div className="text-5xl bg-beige bg-opacity-30 text-black font-domine w-full py-16 items-center">
                <div className="text-center font-semibold">About Us</div>
            </div>
            <div className="top-1/2 -mt-5"><img src="images/leaf.png" alt="no image" className="mx-auto w-32"></img></div>
            
            <div className="md:grid md:grid-cols-2 px-8 py-12">
                <div>
                    <div className="text-2xl md:text-4xl font-semibold font-domine">What Is Fuddins</div>
                    <div className="pr-10 py-5 text-sm md:text-lg text-gray-600">FUDDINS is the online home delivery services app, with the categories of food, groceries, vegetables, fruits, diary, beverages, snacks, deserts, house hold item, beauty & cosmetics, baby care products, tobacco, garments, pharma, footwear, electronics & electrical products, sports item, pc & laptop & many more.</div>
                </div>
                <div>
                    <div>
                        <img src="images/logo.jpg" className="mx-auto"></img>
                    </div>
                </div>

            </div>

            <div className="md:grid md:grid-cols-4 bg-gray-900 py-10 text-white items-center justify-center ">
                <div className="text-2xl text-center font-domine my-3">Our Partners</div>
                <div className="my-8">
                <CounterCard count={5000} symbol="+" speed={2} />
                <div className='font-inter text-2xl text-center text-white mt-3'>Products</div>
                </div>
                <div className="my-8">
                <CounterCard count={500} symbol="+" speed={2} />
                <div className='font-inter text-2xl text-center text-white mt-3'>Partners</div>
                </div>
                <div className="my-8">
                <CounterCard count={20} symbol="+" speed={2} />
                <div className='font-inter text-2xl text-center text-white mt-3'>Product Categories</div>
                </div>
            </div>

            <div className="md:grid md:grid-cols-2 py-10">
                <div className="justify-center mx-auto text-center bg-beige bg-opacity-30 py-8 font-domine">
                    <div><img src="images/fts.png" className="w-44 mx-auto"></img></div>
                    <div className="text-2xl py-5 px-6 md:px-24 font-bold">First Track Solution Technologies (P) Limited</div>
                    <div className="text-lg font-bold">FOUNDER OF FUDDINS.COM</div>
                </div>
                <div className=" px-5 md:px-14">
                    <div className="flex items-center py-5 px-5">
                        <div><img src="images/fssai.png" className="w-32 h-16"></img></div>
                        <div>
                        <div className="ml-2 items-center text-base md:text-2xl font-bold font-domine">Certified Products</div>
                        <div className="ml-2 items-center text-xs md:text-sm font-poppins mt-5 text-gray-600">Get best and fresh products at your doorstep</div>
                        </div>
                    </div>
                    <div className="p-5">
                    <div className="text-lg md:text-3xl font-domine font-semibold">Our Quality Categories</div>
                    <div><img src="images/leaf2.png"></img></div>
                    </div>
                    <div className="md:grid md:grid-cols-2 font-poppins text-sm md:text-base">
                        <div className="space-y-3">
                            <div className="flex items-center"><CheckCircleIcon className="h-5 w-6 text-myGreen"/>Ready Foods</div>
                            <div className="flex items-center"><CheckCircleIcon className="h-5 w-6 text-myGreen"/>Fresh Fruits</div>
                            <div className="flex items-center"><CheckCircleIcon className="h-5 w-6 text-myGreen"/>Groceries</div>
                            <div className="flex items-center"><CheckCircleIcon className="h-5 w-6 text-myGreen"/>Fresh Vegetable</div>
                            <div className="flex items-center"><CheckCircleIcon className="h-5 w-6 text-myGreen"/>Snacks</div>
                            <div className="flex items-center"><CheckCircleIcon className="h-5 w-6 text-myGreen"/>Dairy</div>
                        </div>
                        <div className="space-y-3 mt-2 md:mt-0">
                            <div className="flex items-center"><CheckCircleIcon className="h-5 w-6 text-myGreen"/>Beauty & Cosmetics</div>
                            <div className="flex items-center"><CheckCircleIcon className="h-5 w-6 text-myGreen"/>Office Stationery</div>
                            <div className="flex items-center"><CheckCircleIcon className="h-5 w-6 text-myGreen"/>Dessert & Bakery</div>
                            <div className="flex items-center"><CheckCircleIcon className="h-5 w-6 text-myGreen"/>Pharma(First-Aid Items)</div>
                            <div className="flex items-center"><CheckCircleIcon className="h-5 w-6 text-myGreen"/>Beverages</div>
                            <div className="flex items-center"><CheckCircleIcon className="h-5 w-6 text-myGreen"/>Mitha Paan</div>
                        </div>
                    </div>
                    <div className="bg-myGreen my-5 rounded-md py-2 px-5 w-fit flex text-lg font-poppins text-white items-center">
                        <ShoppingCartIcon className="w-5 h-5 mr-2 text-white"/>START SHOPPING
                    </div>
                </div>
            </div>
            {/*OUR TEAM*/}
            <div>
                <div className="text-5xl font-bold font-domine text-center">Our Team</div>
                <div className="md:grid md:grid-cols-3 bg-slate-100 gap-3">
                    <div className="text-center p-5 bg-white space-y-5">
                        <div><img src="images/sir.jpeg" className="mx-auto w-80 h-[340px] px-5 rounded-md"></img></div>
                        <div className="text-2xl font-domine font-bold">Mr. Tejash Parekh</div>
                        <div className="text-base font-poppins">Founder | CEO</div>
                        <div className="px-8 text-justify text-sm font-poppins text-gray-700">He is the founder of First Track Solution Technologies Private Limited and well established business person, He evokes the brightest minds to be told rising technologies.</div>
                    </div>
                    <div className="text-center p-5 bg-white space-y-5">
                        <div><img src="images/mam.jpeg" className="mx-auto w-80 h-[340px] px-5 rounded-md"></img></div>
                        <div className="text-2xl font-domine font-bold">Ms. Toral Barbhaya</div>
                        <div className="text-base font-poppins">Director | COO</div>
                        <div className="px-8 text-justify text-sm font-poppins text-gray-700">She is a director of the company. She drives the business initiatives, transportation the spirit of innovation and eventually guaranteeing the most effective quality of package solutions for patrons.</div>
                    </div>
                    <div className="text-center p-5 bg-white space-y-5">
                        <div><img src="images/cto.jpeg" className="mx-auto w-80 h-[340px] px-5 rounded-md"></img></div>
                        <div className="text-2xl font-domine font-bold">Mr. Debashish Mahapatro</div>
                        <div className="text-base font-poppins">CTO - Chief Technical Officer</div>
                        <div className="px-8 text-justify text-sm font-poppins text-gray-700">Technology professional, Debasish keeps up on the newest software tech-trends.He drives the technology initiatives, transferral the spirit of innovation and eventually guaranteeing the best quality of software.</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;