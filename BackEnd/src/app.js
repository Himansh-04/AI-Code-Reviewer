const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Default route
app.get('/', (req, res) => {
    res.send('AI Code Reviewer Backend is running 🚀');
});

// ✅ API routes
app.use('/ai', aiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
