const express = require('express');
const connectDB = require('../db');
const userRoutes = require('./users');
const serverless = require('serverless-http');
require('dotenv').config(); // Add this line to load environment variables

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', userRoutes);

module.exports = app;
module.exports.handler = serverless(app);
