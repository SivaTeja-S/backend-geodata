const express = require('express');
const connectDB = require('../db');
const userRoutes = require('./users');
const serverless = require('serverless-http');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', userRoutes);

module.exports = app;
module.exports.handler = serverless(app);
