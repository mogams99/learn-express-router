// * import library package
const express = require("express");
const app = express();

// * define port and url
const port = 3001;
const url = `http://localhost:${port}`;

// ? define middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ? define our routes
app.get('/theater', (req, res) => {
    res.send('theater index');
});
app.get('/theater/create', (req, res) => {
    res.send('theater create');
});
app.get('/theater/:id', (req, res) => {
    res.send('theater show');
});

// ! connect to app
app.listen(port, () => {
    console.log(`Example app listening at ${url}`);
});
