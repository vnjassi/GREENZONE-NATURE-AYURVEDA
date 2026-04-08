import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar - Contact Info */}
      <div className="bg-[#005a42] text-white text-xs py-2 px-4 flex justify-between items-center">
        <div>Call Us: 8962623737 | E-Mail: greenzoneayurveda@gmail.com</div>
        <div className="hidden md:block">ISO Certified Ayurvedic Hospital</div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <img 
              src="https://greenzonenatureayurveda.com/cdn/shop/files/logo_1_180x.png" 
              alt="Green Zone Logo" 
              className="h-16"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
            <a href="/" className="hover:text-green-700">Home</a>
            <a href="/therapy" className="hover:text-green-700">Our Therapy</a>
            <a href="/products" className="hover:text-green-700">Our Products</a>
            <a href="/about" className="hover:text-green-700">About Us</a>
            <a href="/contact" className="hover:text-green-700">Contact</a>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-5 text-xl text-gray-600">
            <button className="hover:text-green-700">🔍</button>
            <button className="hover:text-green-700">🛒</button>
            <button className="hover:text-green-700">👤</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t py-4 px-6 space-y-4 flex flex-col shadow-lg">
          <a href="/" className="text-gray-700 font-medium">Home</a>
          <a href="/therapy" className="text-gray-700 font-medium">Our Therapy</a>
          <a href="/products" className="text-gray-700 font-medium">Our Products</a>
          <a href="/about" className="text-gray-700 font-medium">About Us</a>
          <a href="/contact" className="text-gray-700 font-medium">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
