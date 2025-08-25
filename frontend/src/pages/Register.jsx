import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);
    try {
      await register(email, password);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(err.message || "Failed to create account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 via-yellow-200 to-green-200 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/70 backdrop-blur-lg border border-white/30 p-8 rounded-3xl shadow-2xl max-w-md w-full transition-transform transform hover:scale-105 duration-300"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900 drop-shadow-md">
          Create Account
        </h2>

        {/* Success & Error */}
        {success && (
          <p className="text-green-600 mb-4 text-center font-semibold animate-fade-in">
            ✔ Registration Successful!
          </p>
        )}
        {error && (
          <p className="text-red-500 mb-4 text-center font-semibold animate-fade-in">
            ❌ {error}
          </p>
        )}

        <div className="flex flex-col gap-5">
          {/* Floating Labels */}
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full p-4 rounded-xl border border-gray-300 bg-white/50 focus:bg-white/80 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-pink-600 peer-focus:text-sm"
            >
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              id="password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer w-full p-4 rounded-xl border border-gray-300 bg-white/50 focus:bg-white/80 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              required
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-pink-600 peer-focus:text-sm"
            >
              Password
            </label>
          </div>

          {/* Gradient Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-4 rounded-xl font-semibold text-white transition-all duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 hover:scale-105 hover:shadow-lg"
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-800">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
