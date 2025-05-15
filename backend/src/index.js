const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('../config/db'); 
const cors = require('cors');

const app = express(); 
dotenv.config();

// Connect to MongoDB
connectDB();

// Global Middlewares
app.use(cors()); 
app.use(express.json());
app.use(cookieParser());

// Routes
const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/books');
const myBooksRoutes = require('./routes/myBooks');

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/mybooks', myBooksRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('❌ Server error:', err);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
