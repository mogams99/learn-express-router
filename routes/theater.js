const express = require("express");
const router = express.Router();

// ? define theater routes
router.get('/', (req, res) => {
    res.send('theater index');
});
router.get('/create', (req, res) => {
    res.send('theater create');
});
router.get('/:id', (req, res) => {
    res.send('theater show');
});

module.exports = router;