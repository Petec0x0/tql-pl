const express = require("express");
require('dotenv').config();
const HowOldRoute = require('./howold.route');
const app = express();

app.use('/howold', HowOldRoute);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
