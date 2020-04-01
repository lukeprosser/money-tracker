const express = require('express');
const dotenv = require('dotenv'); // Create global variables
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

// Connect to Mongo database
connectDB();

const transactions = require('./routes/transactions');

const app = express();

// Enable bodyParser
app.use(express.json());

// Display requests in console via morgan
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Connect to '/' route in routes/transactions.js
app.use('/api/v1/transactions', transactions);

/*
  - process.env used to access global variables
  - In this case PORT is coming from config.env
*/
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));