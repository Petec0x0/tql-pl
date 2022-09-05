const express = require("express");
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const HowOldRoute = require('./howold.route');

const rateLimiter = rateLimit({
  windowMs: 1000,
  max: 3,
  message: 'You have reached maximum request',
  statusCode: 429
});


const app = express();
app.use('/howold', rateLimiter, HowOldRoute);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
