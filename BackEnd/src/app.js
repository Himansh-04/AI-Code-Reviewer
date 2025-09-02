import express from "express";
import cors from "cors";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend is working fine ✅");
});

// review route example
app.post("/api/review", (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ error: "Code is required" });
  }

  // Dummy response
  res.json({ review: `Your code looks fine, just improve formatting.` });
});

export default app;
