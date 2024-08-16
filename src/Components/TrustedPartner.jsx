import React from 'react';
import './TrustedPartner.css';

const TrustedPartner = () => {
    const images = [
        'images/partners/razorpay.jpeg', 
        'images/partners/aws.png', 
        // Add more images as needed
    ];

    const doubleImages =[...images, ...images];

    return (
        <div className='py-2 md:py-8 my-3 bg-beige bg-opacity-30'>
            <div className='text-black text-center text-xl md:text-3xl font-poppins my-2 font-semibold'>Our Trusted Partners</div>
            <div className='text-lime-600 text-center text-lg md:text-xl font-poppins mb-2 '>"Our Trusted Network, Your Trusted Products"</div>
        
        <div className="w-full mx-auto max-w-5xl justify-center h-fit p-5 overflow-hidden flex items-center">
            <div className="marquee flex">
                {doubleImages.map((src, index) => (
                    <div
                    key={index}
                    className='justify-center bg-white rounded-md items-center w-44 h-28 mx-2 md:mx-12'
                    >
                    <img  src={src} alt={`Slide ${index + 1}`} className="flex flex-col w-44 h-28 rounded-full m-2" />
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default TrustedPartner;
