import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
import logo from "../assets/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-black"><img src={logo} alt='logo'/></a>
          </div>
          <div className="hidden md:flex md:space-x-4">
            <a href="#" className="text-gray-300  px-3 py-2 rounded-md text-2xl">Home</a>
            <a href="#" className="text-gray-300  px-3 py-2 rounded-md text-2xl ">About</a>
            <a href="#" className="text-gray-300  px-3 py-2 rounded-md text-2xl ">Services</a>
            <a href="#" className="text-gray-300  px-3 py-2 rounded-md text-2xl ">Projects</a>
            <a href="#" className="text-gray-300  px-3 py-2 rounded-md text-2xl ">Contact</a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#ff702d]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {/* Heroicon name: menu */}
              
              <Hamburger/>
            </button>
          </div>
        </div>
        {/* Responsive Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1 bg-white">
              <a href="#" className="text-[#ff702d] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#" className="text-[#ff702d] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#" className="text-[#ff702d] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
              <a href="#" className="text-[#ff702d] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
              <a href="#" className="text-[#ff702d] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
