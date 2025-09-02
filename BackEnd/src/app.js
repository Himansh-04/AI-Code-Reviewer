import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ Allow frontend from Vercel
app.use(cors({
  origin: process.env.FRONTEND_URL, // https://ai-code-reviewer-sigma-one.vercel.app
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  credentials: false
}));

app.use(express.json());

// ✅ Example test route
app.post("/", (req, res) => {
  res.json({ message: "Backend is working!", code: req.body.code });
});

export default app;
