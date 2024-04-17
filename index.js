// * import library package
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')

// * define port and url
const port = 3001;
const url = `http://localhost:${port}`;

// ? define middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret-key'));

// ! define single route
app.get('/sign-cookie', (req, res) => {
    res.cookie('paket', 'ransel', { signed: true });
    res.send('signed cookie');
});
app.get('/verify-cookie', (req, res) => {
    const cookies = req.signedCookies;
    res.send(cookies);
});
// ? import routes
app.use('/admin', require('./routes/admin'));
app.use('/theater', require('./routes/theater'));
app.use('/movies', require('./routes/movies'));

// ! connect to app
app.listen(port, () => {
    console.log(`Example app listening at ${url}`);
});
