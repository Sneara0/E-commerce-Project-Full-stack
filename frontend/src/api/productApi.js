// src/api/productApi.js
import products from "../data/products";

const API_URL = import.meta.env.VITE_BACKEND_URL; // backend URL from .env

// Fetch all products
export const fetchProducts = async () => {
  try {
    const res = await fetch(`${API_URL}/api/products`);
    if (!res.ok) throw new Error("Failed to fetch products from backend");
    return await res.json();
  } catch (err) {
    console.warn("⚠ Backend not available, loading dummy products...", err);
    return products; // fallback to local dummy data
  }
};

// Fetch single product by ID
export const fetchProductById = async (id) => {
  try {
    const res = await fetch(`${API_URL}/api/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product by ID from backend");
    return await res.json();
  } catch (err) {
    console.warn("⚠ Backend not available, loading dummy product...", err);
    return products.find((p) => p.id === parseInt(id));
  }
};

// ✅ Create Stripe checkout session
export const createCheckoutSession = async (cartItems) => {
  try {
    const res = await fetch(`${API_URL}/api/payment/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cartItems }),
    });
    if (!res.ok) throw new Error("Failed to create checkout session");
    return await res.json();
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return null;
  }
};
