import express from 'express';
import cors from 'cors';
import mongoDB from './config/mongodb.js';
import dotenv from 'dotenv';
import connectCloudinary from './config/cloudinary.js';

// App config
const app = express();
const port = process.env.PORT || 4000;
mongoDB()
connectCloudinary()

// Middlewares
app.use(express.json());
app.use(cors());

// API endpoint
app.get("/", (req, res) => {
    res.send("API is working!")
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
