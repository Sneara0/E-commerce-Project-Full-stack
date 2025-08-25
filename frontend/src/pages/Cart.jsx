// src/pages/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-600 text-xl">
        Your cart is empty.
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow"
          >
            <div className="flex items-center space-x-4 w-full sm:w-auto mb-4 sm:mb-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total price */}
      <div className="mt-6 text-right">
        <h3 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>

        {/* Checkout button */}
        <button
          onClick={() => navigate("/checkout")}
          className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
        >
          Go to Checkout
        </button>
      </div>
    </div>
  );
}
