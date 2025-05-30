const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { name, flightNumber, seat } = req.body;
    res.json({
        message: 'Booking confirmed!',
        data: { name, flightNumber, seat }
    });
});

module.exports = router;
