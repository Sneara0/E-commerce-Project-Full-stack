import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">

        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2 tracking-wide">Mehrima's Shop</h2>
          <p className="text-gray-400 text-sm md:text-base">
            © {new Date().getFullYear()} Mehrima's Shop. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-6 text-center md:text-left font-medium">
          <Link to="/" className="hover:text-yellow-400 transition-colors duration-300">Home</Link>
          <Link to="/products" className="hover:text-yellow-400 transition-colors duration-300">Products</Link>
          <Link to="/about" className="hover:text-yellow-400 transition-colors duration-300">About</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 mt-6 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-yellow-400 transition-transform duration-300 transform hover:scale-110">
            <FaFacebookF size={22} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-yellow-400 transition-transform duration-300 transform hover:scale-110">
            <FaInstagram size={22} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-yellow-400 transition-transform duration-300 transform hover:scale-110">
            <FaTwitter size={22} />
          </a>
        </div>
      </div>

     
      <div className="border-t border-gray-700 mt-10"></div>

      
      <p className="text-gray-500 text-sm text-center mt-4">
        Designed with ❤️ by Mehrima 
      </p>
    </footer>
  );
}
