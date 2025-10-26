import React, { useState } from "react";
import Logo from '../assets/Log.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-4 sm:py-6 sm:px-6 md:px-10 lg:px-20 relative">
      {/* Logo Image */}
      <div className="flex items-center">
        <img 
          src={Logo}
          alt="Kablux" 
          className="h-8 w-auto sm:h-10 md:h-12 lg:h-14 object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
          onError={(e) => {
            // Fallback if image doesn't load
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        {/* Fallback text if image fails to load */}
        <div className="text-yellow-500 font-semibold text-lg sm:text-xl hidden">
          Kablux
        </div>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-medium">
        <li><a href="#" className="hover:text-yellow-500 transition-colors duration-300">Become a Fleet Owner</a></li>
        <li><a href="#" className="hover:text-yellow-500 transition-colors duration-300">Cooperate Account</a></li>
        <li><a href="#" className="hover:text-yellow-500 transition-colors duration-300">How it works</a></li>
        <li><a href="#" className="hover:text-yellow-500 transition-colors duration-300">Why choose us</a></li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="text-sm text-gray-800 hover:text-yellow-500 hover:bg-yellow-50 px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 border border-transparent hover:border-yellow-200">
          Sign in
        </button>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-200/50 border border-yellow-400 hover:border-yellow-500">
          Sign up
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden flex flex-col space-y-1 w-6 h-6 justify-center items-center"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
      }`}>
        <div className="px-4 py-6 space-y-4">
          <ul className="space-y-4 text-center">
            <li><a href="#" className="block py-2 hover:text-yellow-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Become a Fleet Owner</a></li>
            <li><a href="#" className="block py-2 hover:text-yellow-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Cooperate Account</a></li>
            <li><a href="#" className="block py-2 hover:text-yellow-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>How it works</a></li>
            <li><a href="#" className="block py-2 hover:text-yellow-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Why choose us</a></li>
          </ul>
          
          <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
            <button className="text-gray-800 hover:text-yellow-500 hover:bg-yellow-50 py-3 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 border border-transparent hover:border-yellow-200 mx-4" onClick={() => setIsMenuOpen(false)}>
              Sign in
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white py-3 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-200/50 border border-yellow-400 hover:border-yellow-500 mx-4" onClick={() => setIsMenuOpen(false)}>
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-[-1] top-16"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;