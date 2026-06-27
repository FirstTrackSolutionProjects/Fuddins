import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header2 = () => {
  const location = useLocation();

  // ─── Background color based on route ───────────────────────────────────────
  const bgColor =
    location.pathname === '/about' || location.pathname === '/contact'
      ? 'bg-beige bg-opacity-30'
      : 'bg-white';

  // ─── Desktop dropdowns ──────────────────────────────────────────────────────
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isPartnerDropdownOpen,  setIsPartnerDropdownOpen]  = useState(false);
  const [isAboutDropdownOpen,    setIsAboutDropdownOpen]    = useState(false);

  const productsDropdownRef = useRef(null);
  const partnerDropdownRef  = useRef(null);
  const aboutDropdownRef    = useRef(null);

  const handleProductsMouseEnter = () => { setIsProductsDropdownOpen(true);  setIsPartnerDropdownOpen(false); setIsAboutDropdownOpen(false); };
  const handlePartnerMouseEnter  = () => { setIsProductsDropdownOpen(false); setIsPartnerDropdownOpen(true);  setIsAboutDropdownOpen(false); };
  const handleAboutMouseEnter    = () => { setIsProductsDropdownOpen(false); setIsPartnerDropdownOpen(false); setIsAboutDropdownOpen(true);  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(e.target)) setIsProductsDropdownOpen(false);
      if (partnerDropdownRef.current  && !partnerDropdownRef.current.contains(e.target))  setIsPartnerDropdownOpen(false);
      if (aboutDropdownRef.current    && !aboutDropdownRef.current.contains(e.target))    setIsAboutDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ─── Single sidebar system (replaces the two conflicting ones) ──────────────
  // openSidebar: null | 'menu' | 'cart'
  const [openSidebar, setOpenSidebar] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const openMenu = () => setOpenSidebar('menu');
  const openCart = () => setOpenSidebar('cart');

  // ✅ THE FIX: one close function that resets everything
  const closeSidebar = () => {
    setOpenSidebar(null);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <div>

      {/* ── Desktop Header (md and above) ──────────────────────────────────── */}
      <div className={`hidden md:flex items-center px-8 font-poppins z-10 ${bgColor}`}>
        <Link to="/"><img src='images/logo.jpg' alt='Fuddins' className='w-40 h-24 p-3' /></Link>

        <nav className='w-full flex justify-between'>
          <div className='flex px-5 gap-8 text-black items-center'>
            <Link to="/" className='text-black hover:text-lime-500'>Home</Link>

            <div className="relative z-20" ref={productsDropdownRef} onMouseEnter={handleProductsMouseEnter}>
              <Link to="/allprod">
                <div className='text-black group flex items-center'>
                  <span className='group-hover:text-lime-500'>All Products</span>
                  <ChevronDownIcon className="group-hover:text-lime-500 h-5 w-4 mx-2" />
                </div>
              </Link>
              {isProductsDropdownOpen && (
                <div className="absolute bg-white text-black border-t-2 border-t-lime-500 shadow-md border border-gray-200 w-48">
                  {['Food Items','Grocery','Vegetables','Fruits','Snacks','Dairy','Desserts','Bakery Corner','Cosmetics','Pharma'].map((item) => (
                    <Link key={item} to="" className="block px-4 py-2 text-gray-700 hover:bg-lime-500 hover:text-white text-base">{item}</Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className='flex px-5 gap-8 items-center'>
            <Link to="/refer" className='text-black hover:text-lime-500'>Refer & Earn</Link>

            <div className="relative z-20" ref={partnerDropdownRef} onMouseEnter={handlePartnerMouseEnter}>
              <Link to="/partner">
                <div className='text-black group flex items-center'>
                  <span className='group-hover:text-lime-500'>Partner</span>
                  <ChevronDownIcon className="text-black group-hover:text-lime-500 h-5 w-4 mx-2" />
                </div>
              </Link>
              {isPartnerDropdownOpen && (
                <div className="absolute border-t-2 border-lime-500 bg-white text-gray-700 shadow-md rounded-b-md mt-2 w-52">
                  <Link to="/shopcard"   className="block px-4 py-2 hover:text-lime-500 text-base">Apply Shopping Cart</Link>
                  <Link to="/exelog"     className="block px-4 py-2 hover:text-lime-500 text-base">Executive Login</Link>
                  <Link to="/menuUpl"    className="block px-4 py-2 hover:text-lime-500 text-base">Menu Upload</Link>
                  <Link to="/onboarding" className="block px-4 py-2 hover:text-lime-500 text-base">Onboarding Enquiry</Link>
                </div>
              )}
            </div>

            <div className="relative z-20" ref={aboutDropdownRef} onMouseEnter={handleAboutMouseEnter}>
              <div className='text-black group flex items-center cursor-pointer'>
                <span className='group-hover:text-lime-500'>About Us</span>
                <ChevronDownIcon className="text-black group-hover:text-lime-500 h-5 w-4 mx-2" />
              </div>
              {isAboutDropdownOpen && (
                <div className="absolute border-t-2 border-lime-500 bg-white text-gray-700 shadow-md rounded-b-md mt-3 w-40">
                  <Link to="/about"   className="block px-4 py-2 hover:text-lime-500 text-base">About</Link>
                  <Link to="/contact" className="block px-4 py-2 hover:text-lime-500 text-base">Contact</Link>
                  <Link to="/career"  className="block px-4 py-2 hover:text-lime-500 text-base">Career</Link>
                </div>
              )}
            </div>

            <div onClick={openCart} className='text-black p-1 items-center cursor-pointer'>
              <ShoppingCartIcon className='h-9 w-10 border-2 border-lime-500 p-1 text-lime-500 hover:bg-lime-500 hover:text-white' />
            </div>
            <Link to="/login" className='text-lime-500'>Log In</Link>
          </div>
        </nav>
      </div>

      {/* ── Mobile Header (below md) ────────────────────────────────────────── */}
      <header className="md:hidden flex justify-between items-center bg-white p-4">
        <Link to="/"><img src='images/logo.jpg' alt='Fuddins' className='w-24 h-14' /></Link>
        <div className='flex gap-3 items-center'>
          <div onClick={openCart} className='cursor-pointer'>
            <ShoppingCartIcon className='h-9 w-10 border-2 border-lime-500 p-1 text-lime-500 hover:bg-lime-500 hover:text-white' />
          </div>
          <button onClick={openMenu} className="text-lime-500 text-2xl">
            <FaBars />
          </button>
        </div>
      </header>

      {/* ── Overlay (closes whichever sidebar is open) ──────────────────────── */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={closeSidebar}
        />
      )}

      {/* ── Menu Sidebar ────────────────────────────────────────────────────── */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white text-lime-500 font-poppins overflow-y-scroll scrollbar-hide z-40 transform transition-transform duration-300 ease-in-out ${
          openSidebar === 'menu' ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close button */}
        <div className="p-4">
          <button onClick={closeSidebar} className="text-2xl">
            <FaTimes className='text-lime-500' />
          </button>
        </div>

        <nav>
          <ul>
            {/* Log In */}
            <Link to="/login" onClick={closeSidebar}>
              <li className="text-lg px-3 mb-8">Log In</li>
            </Link>

            {/* Home */}
            <Link to="/" onClick={closeSidebar}>
              <li className="text-lg px-3 mb-8">Home</li>
            </Link>

            {/* All Products */}
            <li>
              <div className='flex justify-between items-center'>
                <Link to="/allprod" onClick={closeSidebar}>
                  <button className="text-lg text-left px-3 mb-8">All Products</button>
                </Link>
                <div className='mx-3'>
                  {activeSubmenu === 1
                    ? <ChevronUpIcon   onClick={() => toggleSubmenu(1)} className='text-lime-500 h-5 w-5 cursor-pointer' />
                    : <ChevronDownIcon onClick={() => toggleSubmenu(1)} className='text-lime-500 h-5 w-5 cursor-pointer' />}
                </div>
              </div>
              {activeSubmenu === 1 && (
                <ul className="mb-5">
                  <li onClick={closeSidebar} className="hover:bg-lime-500 hover:text-white text-lg mb-6 px-3 flex items-center cursor-pointer">
                    <ChevronRightIcon className='w-4 h-4 mr-2' />Food Items
                  </li>
                  <li onClick={closeSidebar} className="hover:bg-lime-500 hover:text-white text-lg mb-6 px-3 flex items-center cursor-pointer">
                    <ChevronRightIcon className='w-4 h-4 mr-2' />Groceries
                  </li>
                </ul>
              )}
            </li>

            {/* My Orders */}
            <Link to="/login" onClick={closeSidebar}>
              <li className="text-lg mb-8 px-3">My Orders</li>
            </Link>

            {/* Refer & Earn */}
            <Link to="/refer" onClick={closeSidebar}>
              <li className="text-lg mb-8 px-3">Refer & Earn</li>
            </Link>

            {/* Partner */}
            <li>
              <div className='flex justify-between items-center'>
                <Link to="/partner" onClick={closeSidebar}>
                  <button className="text-lg text-left px-3 mb-8">Partner</button>
                </Link>
                <div className='mx-3'>
                  {activeSubmenu === 2
                    ? <ChevronUpIcon   onClick={() => toggleSubmenu(2)} className='text-lime-500 h-5 w-5 cursor-pointer' />
                    : <ChevronDownIcon onClick={() => toggleSubmenu(2)} className='text-lime-500 h-5 w-5 cursor-pointer' />}
                </div>
              </div>
              {activeSubmenu === 2 && (
                <ul>
                  <Link to="/shopcard"   onClick={closeSidebar}><li className="hover:bg-lime-500 hover:text-white mb-8 text-lg px-3 flex items-center"><ChevronRightIcon className='w-4 h-4 mr-2' />Apply Shopping Cart</li></Link>
                  <Link to="/exelog"     onClick={closeSidebar}><li className="hover:bg-lime-500 hover:text-white mb-8 text-lg px-3 flex items-center"><ChevronRightIcon className='w-4 h-4 mr-2' />Executive Login</li></Link>
                  <Link to="/menuUpl"    onClick={closeSidebar}><li className="hover:bg-lime-500 hover:text-white mb-8 text-lg px-3 flex items-center"><ChevronRightIcon className='w-4 h-4 mr-2' />Menu Upload</li></Link>
                  <Link to="/onboarding" onClick={closeSidebar}><li className="hover:bg-lime-500 hover:text-white mb-8 text-lg px-3 flex items-center"><ChevronRightIcon className='w-4 h-4 mr-2' />Onboarding Enquiry</li></Link>
                </ul>
              )}
            </li>

            {/* About Us */}
            <li>
              <div className='flex justify-between items-center'>
                <button className="text-lg text-left px-3 mb-8" onClick={() => toggleSubmenu(3)}>
                  About Us
                </button>
                <div className='mx-3'>
                  {activeSubmenu === 3
                    ? <ChevronUpIcon   onClick={() => toggleSubmenu(3)} className='text-lime-500 h-5 w-5 cursor-pointer' />
                    : <ChevronDownIcon onClick={() => toggleSubmenu(3)} className='text-lime-500 h-5 w-5 cursor-pointer' />}
                </div>
              </div>
              {activeSubmenu === 3 && (
                <ul className="mt-2">
                  <Link to="/about"   onClick={closeSidebar}><li className="hover:bg-lime-500 hover:text-white px-3 text-lg flex items-center mb-4"><ChevronRightIcon className='w-4 h-4 mr-2' />About</li></Link>
                  <Link to="/contact" onClick={closeSidebar}><li className="hover:bg-lime-500 hover:text-white text-lg px-3 flex items-center mb-4"><ChevronRightIcon className='w-4 h-4 mr-2' />Contact</li></Link>
                  <Link to="/career"  onClick={closeSidebar}><li className="hover:bg-lime-500 hover:text-white text-lg px-3 flex items-center mb-4"><ChevronRightIcon className='w-4 h-4 mr-2' />Career</li></Link>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>

      {/* ── Cart Sidebar ─────────────────────────────────────────────────────── */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg flex flex-col justify-between text-black font-poppins z-40 transform transition-transform duration-300 ease-in-out ${
          openSidebar === 'cart' ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-300">
          <div className="text-lg">Cart Details</div>
          <button onClick={closeSidebar}><FaTimes className='text-black' /></button>
        </div>

        <div className="flex-1 p-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">No products in cart</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="mb-2">
                  <div className="flex justify-between items-center">
                    <span>{item.name}</span>
                    <span>₹{item.price}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="p-4">
          <button className="w-full bg-lime-600 text-white py-2 rounded-lg">Checkout</button>
        </div>
      </div>

    </div>
  );
};

export default Header2;