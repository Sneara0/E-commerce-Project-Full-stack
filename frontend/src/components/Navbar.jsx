import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Mehrima's shop.png";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const { cartItems } = useCart(); 

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
       
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative h-14 w-14 rounded-full bg-gradient-to-tr from-pink-400 to-red-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition">
            <img
              src={Logo}
              alt="Mehrima's Shop"
              className="h-10 w-10 object-contain rounded-full transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
            />
          </div>
          <span className="text-2xl font-extrabold tracking-wide relative">
            <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent inline-block animate-gradient-x">
              Mehrima's Shop
            </span>
            <span className="absolute top-0 left-0 w-full h-full text-gray-300 opacity-20 blur-sm">
              Mehrima's Shop
            </span>
          </span>
        </Link>

     
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-gray-700 font-medium hover:text-pink-500 transition">Home</Link>
          <Link to="/products" className="text-gray-700 font-medium hover:text-pink-500 transition">Products</Link>
          <Link to="/about" className="text-gray-700 font-medium hover:text-pink-500 transition">About</Link>
          <Link to="/contact" className="text-gray-700 font-medium hover:text-pink-500 transition">Contact</Link>

          
          <Link to="/cart" className="relative text-gray-700 hover:text-pink-500 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8H19m-12 0a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2z"/>
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
                {totalItems}
              </span>
            )}
          </Link>


          {currentUser ? (
            <button onClick={logout} className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition">Logout</button>
          ) : (
            <div className="flex gap-4">
              <Link to="/login" className="px-5 py-2 border-2 border-pink-500 text-pink-500 font-semibold rounded-full hover:bg-pink-500 hover:text-white transition">Login</Link>
              <Link to="/register" className="px-5 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-full shadow-md hover:scale-105 transition">Register</Link>
            </div>
          )}
        </div>

     
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setIsOpen(!isOpen)}>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </button>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg px-6 py-4 space-y-4 shadow-lg">
          <Link to="/" className="block text-gray-700 font-medium hover:text-pink-500 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" className="block text-gray-700 font-medium hover:text-pink-500 transition" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/about" className="block text-gray-700 font-medium hover:text-pink-500 transition" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="block text-gray-700 font-medium hover:text-pink-500 transition" onClick={() => setIsOpen(false)}>Contact</Link>
          
          
          <Link to="/cart" className="block text-gray-700 font-medium hover:text-pink-500 transition" onClick={() => setIsOpen(false)}>
            Cart {totalItems > 0 && `(${totalItems})`}
          </Link>

          
          {currentUser ? (
            <button onClick={() => { logout(); setIsOpen(false); }} className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition">Logout</button>
          ) : (
            <div className="flex flex-col gap-3">
              <Link to="/login" className="w-full px-5 py-2 border-2 border-pink-500 text-pink-500 font-semibold rounded-full hover:bg-pink-500 hover:text-white transition" onClick={() => setIsOpen(false)}>Login</Link>
              <Link to="/register" className="w-full px-5 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-full shadow-md hover:scale-105 transition" onClick={() => setIsOpen(false)}>Register</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
