import { LocationMarkerIcon, MailIcon, PhoneIcon, PhoneOutgoingIcon } from "@heroicons/react/solid";
import React,{ useEffect } from "react";
import FAQ from '../Components/FAQ';

const Contact =()=>{
    useEffect(() => {
        document.title = "Contact Us - Fuddins";
    }, []);
    return(
        <div>
                 <div className="text-5xl bg-beige bg-opacity-30 text-black font-domine w-full py-16 items-center">
                <div className="text-center font-semibold">Get In Touch</div>
            </div>
            <div className="top-1/2 -mt-5"><img src="images/leaf.png" alt="no image" className="mx-auto w-32"></img></div>

            <div className="md:grid md:grid-cols-3 justify-center items-center p-5 space-y-2">
                <div className="mx-auto border border-lime-500 w-72 md:w-80 h-40 py-10">
                    <div className="text-center mx-auto"><PhoneIcon className="mx-auto h-6 w-6 text-lime-500"/></div>
                    <div className="text-lime-500 text-center">+91 9692409083 <br/> +919040170727</div>
                </div>
                <div className="mx-auto border border-lime-500 w-72 md:w-80 h-40 py-10">
                    <div className="text-center mx-auto"><MailIcon className="mx-auto h-6 w-6 text-lime-500"/></div>
                    <div className="text-lime-500 text-center ">info@fuddins.com <br/> support@fuddins.com</div>
                </div>
                <div className="mx-auto border border-lime-500 w-72 md:w-80 h-40 py-8">
                    <div className="text-center mx-auto"><LocationMarkerIcon className="mx-auto h-6 w-6 text-lime-500"/></div>
                    <div className="text-lime-500 text-center ">Block 2, 3rd Floor, BMC Bhawani Mall, Saheed Nagar, Bhubaneswar, Odisha- 751007</div>
                </div>
            </div>
            <div className="bg-beige bg-opacity-30 py-5">
                <div className="text-xl md:text-3xl font-domine text-center font-semibold">Frequently Asked Questions!</div>
                <img src="images/leaf2.png" className="mx-auto p-2"></img>
                <div>
                    <FAQ/>
                </div>

            </div>
        </div>
    )
}

export default Contact;