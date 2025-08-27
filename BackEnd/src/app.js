const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes'); // agar routes folder hai

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get('/', (req, res) => {
  res.send('Hello from Render backend 🚀');
});

// routes
app.use('/ai', aiRoutes);

module.exports = app; // sirf app export kar
