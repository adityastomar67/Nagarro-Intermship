const express = require("express");
const router = express.Router();

// For signup page
router.get('/register', (req, res) => {
    res.render('auth/signup');
})

module.exports = router;
