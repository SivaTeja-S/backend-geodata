const express = require('express');
const connectDB = require('../db');
const userRoutes = require('./users');
const serverless = require('serverless-http');
require('dotenv').config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json());

// CORS configuration
const cors = require('cors');
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Adjust this to match your frontend URL
};
app.use(cors(corsOptions));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', userRoutes);

module.exports = app;
module.exports.handler = serverless(app);
