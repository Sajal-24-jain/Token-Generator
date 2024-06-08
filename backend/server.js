const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const tokenRoutes = require('./routes/tokenRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Define your existing routes
app.use('/api/tokens', tokenRoutes);

// Define route handler for GET /api/tokens/verify
app.get('/api/tokens/verify', (req, res) => {
    // Handle the verification logic here
    // For example, you can send a success message
    res.status(200).json({ message: 'Token verification successful' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
