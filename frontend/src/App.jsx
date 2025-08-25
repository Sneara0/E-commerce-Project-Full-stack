// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart"; // Cart page
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import About from "./pages/About"
import Contact from "./pages/Contact"

// Tailwind CSS
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} /> {/* default redirect */}
        <Route path="/home" element={<Home />} />
        <Route path='/about' element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>} >   </Route>

        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} /> {/* Cart route */}
          <Route path="/checkout" element={<Checkout />} />
          
              <Route path="/payment" element={<Payment />} />
          
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<p className="text-center mt-10">404 Page Not Found</p>} /> {/* Catch-all */}
      </Routes>
      <Footer/>
    </div>
  );
}
