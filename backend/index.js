import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import payment from "./routes/payment.js";
import products from "./routes/products.js"; 

dotenv.config();
const app = express();

// CORS setup
app.use(cors({
  origin: [process.env.FRONTEND_URL, "http://localhost:5173"], 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());

// Test route
app.get("/", (req, res) => res.send("Backend is running 🚀"));

// Routes
app.use("/api/payment", payment);
app.use("/api/products", products); // ← connect products route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
