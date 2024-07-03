const express = require('express');
const connectDB = require('../db');
const userRoutes = require('./users');
const serverless = require('serverless-http');
require('dotenv').config(); // Add this line to load environment variables
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000', // Adjust this to match your frontend URL
};
app.use(cors(corsOptions));
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', userRoutes);

module.exports = app;
module.exports.handler = serverless(app);
