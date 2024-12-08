import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import route from './routes/UserRoute.js';

dotenv.config();

const app = express();
const port = process.env.PORT
const URL = process.env.MONGOURL;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Database connection
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB Connected Successfully');
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err.message);
  });

// Routes
app.use('/api', route);
