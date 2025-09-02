const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('AI Code Reviewer Backend is running 🚀');
});

// API routes
app.use('/ai', aiRoutes);

module.exports = app; 
