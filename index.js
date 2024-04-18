// * import library package
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

// * define port and url
const port = 3001;
const secret = 'secret-key';
const url = `http://localhost:${port}`;

// ? define middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(secret));
app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
}));

// ! define single route
app.get('/sign-cookie', (req, res) => {
    res.cookie('paket', 'ransel', { signed: true });
    res.send('signed cookie');
});
app.get('/verify-cookie', (req, res) => {
    const cookies = req.signedCookies;
    res.send(cookies);
});
app.get('/page-count', (req, res) => {
    if (req.session.count) req.session.count++;
    if (!req.session.count) req.session.count = 1;
    res.send(`count visit page: ${req.session.count}`);
});
app.get('/register', (req, res) => {
    const { username = 'Anonim'} = req.query;
    req.session.username = username;
    res.redirect('/dashboard');
});
app.get('/dashboard', (req, res) => {
    const username = req.session.username; // Menggunakan nilai default 'Anonim' jika username tidak tersedia di sesi
    res.send(`Welcome buddy, ${username}`);
});

// ? import routes
app.use('/admin', require('./routes/admin'));
app.use('/theater', require('./routes/theater'));
app.use('/movies', require('./routes/movies'));

// ! connect to app
app.listen(port, () => {
    console.log(`Example app listening at ${url}`);
});
