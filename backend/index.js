
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import payment from "./routes/payment.js";

dotenv.config();
const app = express();


app.use(cors({
  origin: process.env.FRONTEND_URL, 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));


app.use(express.json());


app.get("/", (req, res) => res.send("Backend is running 🚀"));


app.use("/api/payment", payment);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))