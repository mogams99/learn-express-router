const express = require("express");
const router = express.Router();

// ? define movies routes
router.get('/', (req, res) => {
    res.send('movies index');
});
router.get('/create', (req, res) => {
    res.send('movies create');
});
router.get('/:id', (req, res) => {
    res.send('movies show');
});

module.exports = router;