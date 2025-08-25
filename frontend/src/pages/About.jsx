import { Link } from "react-router-dom";
import ProductCategoryCard from "../components/ProductCategoryCard";

const productCategories = [
  { id: 1, name: "Lipstick", description: "High-quality lipsticks in multiple shades.", bgColor: "bg-pink-500", textColor: "text-white" },
  { id: 2, name: "Moisturizer", description: "Gentle and hydrating moisturizers for healthy skin.", bgColor: "bg-green-400", textColor: "text-white" },
  { id: 3, name: "Sneakers", description: "Comfortable and stylish shoes.", bgColor: "bg-yellow-400", textColor: "text-gray-800" },
  { id: 4, name: "T-Shirts", description: "Casual and trendy t-shirts.", bgColor: "bg-purple-500", textColor: "text-white" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100 p-4 sm:p-6 md:p-10 overflow-hidden relative">
      
      {/* Decorative Animated Circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-30 animate-spin-slow"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-40 animate-ping-slow"></div>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6 drop-shadow-lg animate-bounce">
          About Mehrima's Shop
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-4 animate-fade-in">
          Welcome to <span className="font-semibold text-pink-600">Mehrima's Shop</span>! We provide high-quality beauty and fashion products for a delightful online shopping experience.
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-6 animate-fade-in delay-200">
          Our mission is to offer stylish, comfortable products that meet our customers’ needs while ensuring excellent service and fast delivery.
        </p>

        {/* CTA Button */}
        <Link
          to="/products"
          className="inline-block mt-4 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 animate-bounce"
        >
          Browse Products
        </Link>
      </div>

      {/* Product Categories */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
        {productCategories.map((cat, index) => (
          <ProductCategoryCard
            key={cat.id}
            name={cat.name}
            description={cat.description}
            bgColor={cat.bgColor}
            textColor={cat.textColor}
            animationDelay={index * 100} // staggered animation
          />
        ))}
      </div>
    </div>
  );
}
