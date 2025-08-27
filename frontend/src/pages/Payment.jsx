import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { createCheckoutSession } from "../api/productApi";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function CheckoutForm() {
  const { totalPrice } = useCart();
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setMessage("");

    try {
      const { data } = await createCheckoutSession({ amount: totalPrice });
      const clientSecret = data.clientSecret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      });

      if (result.error) setMessage(result.error.message);
      else if (result.paymentIntent.status === "succeeded")
        setMessage("✅ Payment Successful!");
    } catch (err) {
      setMessage("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Payment</h2>
      <div className="border p-3 rounded mb-4"><CardElement /></div>
      <button
        type="submit"
        disabled={!stripe || loading}
        className={`w-full py-2 rounded text-white ${loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"}`}
      >
        {loading ? "Processing..." : `Pay $${totalPrice.toFixed(2)}`}
      </button>
      {message && <p className="mt-4 text-center font-medium">{message}</p>}
    </form>
  );
}

export default function Payment() {
  return <Elements stripe={stripePromise}><CheckoutForm /></Elements>;
}
