const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI;
        console.log('Mongo URI:', mongoUri); // Debugging line to check the URI
        if (!mongoUri) {
            throw new Error('MONGODB_URI is not defined');
        }
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
