require('dotenv').config(); // Load environment variables
const express = require('express');
const connectDB = require('./db');
const cors=require('cors')
const app = express();

// Connect to Database
connectDB();
// const corsOptions = {
//     origin: 'http://localhost:3000', // Adjust this to match your frontend URL
//   };
app.use(cors);
// Middleware
app.use(express.json());

// Define Routes
app.use('/api/users', require('./api/users'));

// Test Route
app.get('/', (req, res) => res.send('API running'));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
