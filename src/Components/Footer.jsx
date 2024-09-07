import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram , FaLinkedin, FaYoutube  } from 'react-icons/fa';


const Footer =()=>{
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

      const playStoreUrl  ='https://play.google.com/store/apps/details?id=com.mstoreapp.flutter1671849938376&pcampaignid=web_share';
    return(
        <div className="bg-gray-900 text-white py-10">
            <div className="md:grid md:grid-cols-3">
                <div className="justify-center items-center p-5 font-poppins">
                <Link to="/"><div>
                        <img src="images/logo2.png" className="mx-auto" onClick={scrollToTop}></img></div></Link>
                    <div className="text-lg my-5 md:my-10 px-2 text-center">A Product of First Track Solutions (P) Limited</div>
                </div>
                <div className="font-poppins items-center justify-center mx-auto px-5"> 
                    <div className="text-xl font-semibold my-3">Quick Links</div>
                    <Link to="/about"><div className="my-2 text-white hover:text-lime-500 " onClick={scrollToTop}>About Us</div></Link>
                    <Link to="/contact"><div className="my-2 text-white hover:text-lime-500" onClick={scrollToTop}>Contact</div></Link>
                    <Link to="/career"><div className="my-2 text-white hover:text-lime-500" onClick={scrollToTop}>Career</div></Link>
                    <Link to="/canc"><div className="my-2 text-white hover:text-lime-500" onClick={scrollToTop}>Cancellation & Refund Policy</div></Link>
                    <Link to="/shipp"><div className="my-2 text-white hover:text-lime-500" onClick={scrollToTop}>Shipping & Delivery Policy</div></Link>
                    <Link to="/terms"><div className="my-2 text-white hover:text-lime-500" onClick={scrollToTop}>Terms & Conditions</div></Link>
                    <Link to="/privacy"><div className="my-2 text-white hover:text-lime-500" onClick={scrollToTop}>Privacy & Policy</div></Link>
                </div>
                <div className="p-5">
                    <div className="font-domine text-2xl">Download Our Mobile App</div>
                    <div className="my-3 font-poppins">Download The App & Order Your Favourite Foods Online</div>
                    <div className="flex p-5 gap-3">
                    <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">
                        <img src="images/playstore.png" className="w-24 md:w-40"></img>
                    </a>
                    <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">
                        <img src="images/app.png" className="w-24 md:w-40"></img>
                    </a>
                    </div>
                </div>

            </div>
            <div>
            <div className="border-t border-gray-600"></div>
            <div className="md:flex md:justify-between p-5 space-y-5">
                <div className="text-base font-poppins">Copyright &copy; 2024 | fuddins.com</div>
                <div className="flex gap-5">
                <a href="https://www.facebook.com/people/Howdy-Fuddins/pfbid0qZpRFBz6SWPGk3TvSM5saqnPMbJeY3vagrAgESNj2JvANxyEyqHQnqGJvsb3nqal/" target="_blank" rel="noopener noreferrer" >
                    <FaFacebook className="h-5 w-5 text-white hover:text-lime-500"/></a>
                    
                    <a href="https://x.com/Fuddins_com" target="_blank" rel="noopener noreferrer" >
                    <FaTwitter className="h-5 w-5 text-white hover:text-lime-500"/></a>

                    <a href="https://www.instagram.com/fuddins_com/" target="_blank" rel="noopener noreferrer" >
                    <FaInstagram className="h-5 w-5 text-white hover:text-lime-500"/></a>

                    <a href="https://www.linkedin.com/in/fuddins-com-833b48258/" target="_blank" rel="noopener noreferrer" >
                    <FaLinkedin className="h-5 w-5 text-white hover:text-lime-500"/></a>

                    <a href="https://www.youtube.com/channel/UCGtvFvTjNtHhpWtIW7Qi0vA" target="_blank" rel="noopener noreferrer" >
                    <FaYoutube className="h-5 w-5 text-white hover:text-lime-500"/></a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer;