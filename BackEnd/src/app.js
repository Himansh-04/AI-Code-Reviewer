const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');

const app = express();

// ✅ Allow only your frontend domain
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('AI Code Reviewer Backend is running 🚀');
});

// API routes
app.use('/ai', aiRoutes);

module.exports = app;
