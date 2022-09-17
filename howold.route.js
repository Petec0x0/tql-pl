const express = require('express');
const router = express.Router();

router.get('', async (req, res, next) => {
  // get query string dob
  const dob = req.query.dob;
  // make sure dob paramenter exists
  if (!dob) {
    return res.status(400).json({
      message: '"dob" parameter is not properly used',
      error: true
    })
  }

  try {

    // get today's date
    const todaysDate = new Date();
    // get date of birth from query string timestamp
    const dateOfBirth = new Date(dob);
    // make sure dob is a valid date string
    if (!(dateOfBirth instanceof Date && !isNaN(dateOfBirth))) {
      return res.status(429).json({
        message: '"dob" parameter value is invalid',
        error: true
      })
    }

    let age = todaysDate.getFullYear() - dateOfBirth.getFullYear();
    const month = todaysDate.getMonth() - dateOfBirth.getMonth();
    if (month < 0 || (month === 0 && todaysDate.getDate() < dateOfBirth.getDate())) {
      age--;
    }

    return res.json({
      age: age,
      error: false
    })

  } catch (err) {
    console.log(err);
    return res.json({
      message: 'An error occured',
      error: true
    })
  }
});

module.exports = router;
