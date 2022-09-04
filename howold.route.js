const express = require('express');
const router = express.Router();

router.get('', async (req, res, next) => {

    try {
        // get query string dob
        const dob = req.query.dob;

        // get today's date
        const todaysDate = new Date();
        // get date of birth from query string timestamp
        const dateOfBirth = new Date(dob);
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
