// * import library package
const express = require("express");
const app = express();

// * define port and url
const port = 3001;
const url = `http://localhost:${port}`;

// ? define middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ? import routes
app.use('/admin', require('./routes/admin'));
app.use('/theater', require('./routes/theater'));
app.use('/movies', require('./routes/movies'));

// ! connect to app
app.listen(port, () => {
    console.log(`Example app listening at ${url}`);
});
