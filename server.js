import express from 'express';
import dotenv from 'dotenv';
import { db } from './config/db.js';
import rateLimit from 'express-rate-limit';
import compression from 'compression';
import helmet from 'helmet';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(compression()); 
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: 'Too many requests from this IP, please try again later.',
});
app.use(limiter);

// Connect to the database
db();


app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`syni-astro Server is running on port ${PORT}`);
});