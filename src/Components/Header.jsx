import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import {ShoppingCartIcon} from '@heroicons/react/solid';
import { FaBars, FaTimes } from 'react-icons/fa';


const Header=()=>{
  const location = useLocation();
  const [bgColor, setBgColor] = useState('bg-white');

  useEffect(() => {
    if (location.pathname === '/about' || location.pathname === '/contact') {
      setBgColor('bg-beige bg-opacity-30');
    } else {
      setBgColor('bg-white');
    }
  }, [location]);

    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
    const [isPartnerDropdownOpen, setIsPartnerDropdownOpen] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

    const productsDropdownRef = useRef(null);
    const partnerDropdownRef = useRef(null);
    const aboutDropdownRef = useRef(null);

    const handleProductsMouseEnter = () => {
        setIsProductsDropdownOpen(true);
        setIsPartnerDropdownOpen(false);
        setIsAboutDropdownOpen(false);
      };

      const handlePartnerMouseEnter = () => {
        setIsProductsDropdownOpen(false);
        setIsPartnerDropdownOpen(true);
        setIsAboutDropdownOpen(false);
      };

      const handleAboutMouseEnter = () => {
        setIsProductsDropdownOpen(false);
        setIsPartnerDropdownOpen(false);
        setIsAboutDropdownOpen(true);
      };
    
      const handleClickOutside = (event) => {
        if (
          productsDropdownRef.current &&
          !productsDropdownRef.current.contains(event.target)
        ) {
          setIsProductsDropdownOpen(false);
        }
        if (
          partnerDropdownRef.current &&
          !partnerDropdownRef.current.contains(event.target)
        ) {
          setIsPartnerDropdownOpen(false);
        }
        if (
            aboutDropdownRef.current &&
            !aboutDropdownRef.current.contains(event.target)
          ) {
            setIsAboutDropdownOpen(false);
          }
      };

      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

      const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  };
  


  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };
     
    return(
      <div>
        {/*Md screen header*/}
        <div className={`hidden md:flex items-center px-8 font-poppins z-10 ${bgColor}`}>
        <Link to="/"><div><img src='images/logo.jpg' alt='no image' className='w-40 h-24 p-3'></img></div></Link>
            <nav className='w-full flex justify-between'>
                <div className='flex px-5 gap-8 text-black items-center'>
                    
                    <Link to="/"><div className='text-black hover:text-myGreen'>Home</div></Link>
                    
                    <div className="relative z-20" ref={productsDropdownRef} onMouseEnter={handleProductsMouseEnter}>
                        <Link to="/allprod"><div className=' text-black group flex items-center'><span className='group-hover:text-myGreen'>All Products</span> <ChevronDownIcon className=" group-hover:text-myGreen h-5 w-4 mx-2"/></div></Link>
                        {isProductsDropdownOpen && (
                    
                        <div className="absolute bg-white text-black border-t-2 border-t-myGreen shadow-md border border-gray-200 w-48">
                        <Link to="" className="block px-4 py-2  text-gray-700 hover:bg-myGreen hover:text-white text-base">Food Items</Link>
                        <Link to="" className="block px-4 py-2 text-gray-700 hover:bg-myGreen hover:text-white text-base">Grocery</Link>
                        <Link to="" className="block px-4 py-2 text-gray-700 hover:bg-myGreen hover:text-white text-base">Vegetables</Link>
                        <Link to="" className="block px-4 py-2 text-gray-700 hover:bg-myGreen hover:text-white text-base">Fruits</Link>
                        <Link to="" className="block px-4 py-2 text-gray-700 hover:bg-myGreen hover:text-white text-base">Snacks</Link>
                        <Link to="" className="block px-4 py-2 text-gray-700 hover:bg-myGreen hover:text-white text-base">Dairy</Link>
                        <Link to="" className="block px-4 py-2 text-gray-700 hover:bg-myGreen hover:text-white text-base">Desserts</Link>
                        <Link to="" className="block px-4 py-2 text-gray-700 hover:bg-myGreen hover:text-white text-base">Bakery Corner</Link>
                        <Link to="" className="block px-4 py-2 text-gray-700 hover:bg-myGreen hover:text-white text-base">Cosmetics</Link>
                        <Link to="" className="block px-4 py-2 text-gray-700 hover:bg-myGreen hover:text-white text-base">Pharma</Link>
                        </div>
                        )}
                    </div>

                </div>

                <div className='flex px-5 gap-8 items-center'>
                    <Link to="/refer"><div className='text-black hover:text-myGreen'>Refer & Earn</div></Link>
                    
                    <div className="relative z-20" ref={partnerDropdownRef} onMouseEnter={handlePartnerMouseEnter}>
                        <Link to="/partner"><div className='text-black  group flex items-center'><span className='group-hover:text-myGreen'>Partner</span><ChevronDownIcon className="text-black group-hover:text-myGreen  h-5 w-4 mx-2"/></div></Link>
                        {isPartnerDropdownOpen && (
                        <div className="absolute border-t-2 border-myGreen bg-white text-gray-700  shadow-md rounded-b-md mt-2 w-52">
                            <Link to="/shopcard" className="block px-4 py-2  hover:text-myGreen text-base">Apply Shopping Cart</Link>
                            <Link to="/exelog" className="block px-4 py-2  hover:text-myGreen text-base">Executive Login</Link>
                            <Link to="/menuUpl" className="block px-4 py-2 hover:text-myGreen text-base"> Menu Upload</Link>
                            <Link to="/onboarding" className="block px-4 py-2  hover:text-myGreen text-base"> Onboarding Enquiry</Link>
                        </div>
                        )}
                    </div>
                    
                    <div className="relative z-20" ref={aboutDropdownRef} onMouseEnter={handleAboutMouseEnter}>
                        <div className='text-black  group flex items-center'><span className='group-hover:text-myGreen'>About Us</span><ChevronDownIcon className="text-black group-hover:text-myGreen h-5 w-4 mx-2"/></div>
                        {isAboutDropdownOpen && (
                        <div className="absolute border-t-2 border-myGreen bg-white text-gray-700  shadow-md rounded-b-md mt-3 w-40">
                            <Link to="/about" className="block px-4 py-2  hover:text-myGreen text-base">About</Link>
                            <Link to="/contact" className="block px-4 py-2  hover:text-myGreen text-base">Contact</Link>
                            <Link to="/career" className="block px-4 py-2  hover:text-myGreen text-base">Career</Link>
                        </div>
                        )}
                    </div>
                    <div className='text-black p-1 items-center'><ShoppingCartIcon className='h-9 w-10 border-2 border-myGreen p-1 text-myGreen hover:bg-myGreen hover:text-white'/></div>
                    <Link to="/login"><div className='text-myGreen'>Log In</div></Link>
                </div>
            </nav>
        </div>
        {/*sm screen header*/}
        <header className="md:hidden flex justify-between items-center bg-white p-4">
        <Link to="/"><div><img src='images/logo.jpg' alt='no image' className='w-24 h-14'></img></div></Link>
        <div className='flex gap-3'>
        <div className='text-black p-1 items-center'><ShoppingCartIcon className='h-9 w-10 border-2 border-myGreen p-1 text-myGreen hover:bg-myGreen hover:text-white'/></div>
        <button onClick={toggleMenu} className="text-myGreen  text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        </div>
      </header>

      {/* Sidebar Menu for Below Medium Screens */}
      <div
        className={`fixed overflow-y-scroll h-full scrollbar-hide top-0 left-0 w-72 bg-white text-myGreen text-xl font-poppins  z-50 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out `}
      >
        
        <div className="p-4">
          <button onClick={toggleMenu} className="text-2xl">
            <FaTimes className='text-black' />
          </button>
        </div>
        <nav className=''>
          <ul className="space-y-2">
          <Link to="/login" onClick={closeMenu}><li className=" px-3 mb-8">Log In</li></Link>
          <Link to="/" onClick={closeMenu}><li className=" px-3 mb-8">Home</li></Link>
            <li>
            <div className='flex justify-between'><Link to="/allprod" onClick={closeMenu} ><button 
                className="w-full text-left  flex justify-between  px-3 mb-8">
                All Products
                </button></Link><div  className='mx-3'>{activeSubmenu === 1 ? <ChevronUpIcon onClick={() => toggleSubmenu(1)}  className='text-myGreen  h-5 w-5'/> : <ChevronDownIcon onClick={() => toggleSubmenu(1)} className='text-myGreen  h-5 w-5'/>}</div>
                </div>
              {activeSubmenu === 1 && (
                <ul className="space-y-2 mb-5">
                  <li onClick={closeMenu} className="hover:bg-myGreen hover:text-white  mb-6 px-3 flex items-center"><ChevronRightIcon className='w-4 h-4 mr-2'/>Food Items</li>
                  <li onClick={closeMenu} className="hover:bg-myGreen hover:text-white  mb-6 px-3 flex items-center"><ChevronRightIcon className='w-4 h-4 mr-2'/>Groceries</li>
                </ul>
              )} 
            </li>
            <Link to="/login" onClick={closeMenu}><li className=" mb-8  px-3">My Orders</li></Link>
            <Link to="/login" onClick={closeMenu}><li className=" mb-8  px-3">Refer & Earn</li></Link>
            <li>
            <div className='flex justify-between'><Link to="/partner" onClick={closeMenu} ><button 
                className="w-full text-left  flex justify-between  px-3 mb-8">
                Partner
                </button></Link><div  className='mx-3'>{activeSubmenu === 2 ? <ChevronUpIcon onClick={() => toggleSubmenu(2)}  className='text-myGreen  h-5 w-5'/> : <ChevronDownIcon onClick={() => toggleSubmenu(2)} className='text-myGreen  h-5 w-5'/>}</div>
                </div>
              {activeSubmenu === 2 && (
                <ul className="space-y-2">
                  <Link to="/shopcard" onClick={closeMenu}><li className="hover:bg-myGreen hover:text-white mb-8  px-3 flex items-center"><ChevronRightIcon className='w-4 h-4 mr-2'/>Apply Shopping Cart</li></Link>
                  <Link to="/exelog" onClick={closeMenu}><li className="hover:bg-myGreen hover:text-white mb-8  px-3 flex items-center"><ChevronRightIcon className='w-4 h-4 mr-2'/>Executive Login</li></Link>
                  <Link to="/menuUpl" onClick={closeMenu}><li className="hover:bg-myGreen hover:text-white mb-8  px-3 flex items-center"><ChevronRightIcon className='w-4 h-4 mr-2'/>Menu Upload</li></Link>
                  <Link to="/onboarding" onClick={closeMenu}><li className="hover:bg-myGreen hover:text-white mb-8  px-3 flex items-center"><ChevronRightIcon className='w-4 h-4 mr-2'/>Onboarding Enquiry</li></Link>
                </ul>
              )}
            </li>

            <li>
              <button onClick={() => toggleSubmenu(3)}
                className="w-full text-left  flex justify-between  px-3 mb-8"
                
              >
                About Us
                <div onClick={() => toggleSubmenu(3)} className='items-center'>{activeSubmenu === 3 ? <ChevronUpIcon className='text-myGreen  h-5 w-5'/> : <ChevronDownIcon className='text-myGreen  h-5 w-5'/>}</div>
              </button>
              {activeSubmenu === 3 && (
                <ul className="space-y-2 mt-2 ">
                  <Link to="/about" onClick={closeMenu}><li className="hover:bg-myGreen hover:text-white px-3 text-xl flex items-center mb-4 "><ChevronRightIcon className='w-4 h-4 mr-2'/>About</li></Link>
                  <Link to="/contact" onClick={closeMenu}><li className="hover:bg-myGreen hover:text-white text-xl  px-3 flex items-center mb-4"><ChevronRightIcon className='w-4 h-4 mr-2'/>Contact</li></Link>
                  <Link to="/career" onClick={closeMenu}><li className="hover:bg-myGreen hover:text-white text-xl  px-3 flex items-center mb-4"><ChevronRightIcon className='w-4 h-4 mr-2'/>Career</li></Link>
                </ul>
              )}
            </li>
            
          </ul>
        </nav>
      </div>

      {/* Overlay when the menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
        </div>
    )
}

export default Header;