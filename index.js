const express = require("express");
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const HowOldRoute = require('./howold.route');

// const rateLimiter = rateLimit({
//   windowMs: 1000,
//   max: 3,
//   standardHeaders: true
// });


const app = express();
// Apply the rate limiting middleware to all requests
app.use(rateLimit({
    windowMs: 1000,
    max: 3,
    standardHeaders: true
}));

app.use('/howold', HowOldRoute);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
