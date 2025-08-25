import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cartItems, totalPrice } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: currentUser?.email || "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", formData, cartItems, totalPrice);
    navigate("/payment");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl mb-4 font-semibold text-gray-700">
          Your cart is empty
        </h2>
        <button
          onClick={() => navigate("/products")}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium rounded-xl shadow-md hover:scale-105 transition"
        >
          Shop Now
        </button>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl mb-4 font-semibold text-gray-700">
          Please login to continue
        </h2>
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-xl shadow-md hover:scale-105 transition"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
  
      <div className="flex justify-center mb-6">
        <svg
          className="w-48 md:w-64 animate-bounce"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="80" fill="#3b82f6" />
          <text
            x="100"
            y="115"
            textAnchor="middle"
            fontSize="30"
            fill="white"
            fontWeight="bold"
          >
            🛒
          </text>
        </svg>
      </div>
      <div className="flex justify-center items-center space-x-6 mb-8">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
            1
          </div>
          <span className="text-sm mt-1">Cart</span>
        </div>
        <div className="w-24 h-1 bg-green-300 mt-4"></div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
            2
          </div>
          <span className="text-sm mt-1">Checkout</span>
        </div>
        <div className="w-24 h-1 bg-gray-300 mt-4"></div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold">
            3
          </div>
          <span className="text-sm mt-1">Payment</span>
        </div>
      </div>

      <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Checkout
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Billing Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Billing Details</h3>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-indigo-400"
            />

            <button
              type="submit"
              className="mt-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition"
            >
              Proceed to Payment
            </button>
          </form>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h3>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <span className="font-medium text-gray-700">
                  {item.name} x {item.quantity}
                </span>
                <span className="text-gray-900 font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <hr className="my-6" />
          <div className="flex justify-between text-xl font-bold text-gray-800">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
