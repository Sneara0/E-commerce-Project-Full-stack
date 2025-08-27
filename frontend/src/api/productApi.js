

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
