const API_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchProducts = async () => {
  try {
    const res = await fetch(`${API_URL}/api/products`);
    if (!res.ok) throw new Error("Failed to fetch products");
    return await res.json();
  } catch (err) {
    console.error("API Error:", err);
    return [];
  }
};

export const fetchProductById = async (id) => {
  try {
    const res = await fetch(`${API_URL}/api/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return await res.json();
  } catch (err) {
    console.error("API Error:", err);
    return null;
  }
};

// ✅ Stripe Checkout Session তৈরি করার জন্য নতুন ফাংশন
export const createCheckoutSession = async (cartItems) => {
  try {
    const res = await fetch(`${API_URL}/api/payment/create-checkout-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartItems }),
    });

    if (!res.ok) throw new Error("Failed to create checkout session");

    return await res.json();
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
};
