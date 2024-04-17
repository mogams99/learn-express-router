const express = require("express");
const router = express.Router();

// ! middleware
router.use((req, res, next) => {
    if (req.query.isAdmin) next();
    res.send('You are not admin.')
})

// ? define admin routes
router.get('/', (req, res) => {
    res.cookie('token', '123456789abcd');
    res.send('admin index');
});

module.exports = router;