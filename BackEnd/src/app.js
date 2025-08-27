const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// AI routes
app.use('/ai', aiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
