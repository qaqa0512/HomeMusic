// khai bao cac bien
const express = require('express'); // nap thu vien vao
const morgan = require('morgan'); // nap thu vien morgan
const path = require('path');

const dotenv = require('dotenv');
const handlebars = require('express-handlebars'); // xay dung cau truc cho project
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express(); // khai bao ham
const port = 8080; // khai bao port

dotenv.config({ path: './.env' });

// Setup static files
app.use(express.static(path.join(__dirname, 'public')));
// // HTTP logger
// app.use(morgan('combined'));

// Parse URL - encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));
// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());
app.use(cookieParser());

//View Engine Setup
app.engine('hbs', handlebars({
    extname: '.hbs' // dinh nghia lai phan duoi
}));

app.set('view engine', 'hbs'); // dat cho ung dung express nay se su dung template handlebar
app.set('views', path.join(__dirname, 'resource/views')); // tao duong dan

// Define Routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));


// Error: Khong Tim Thay Trang
app.use((req, res, next) => {
    const err = new Error('Không Tìm Thấy Trang');
    err.status = 404;
    next(err);
});
// Handling errors
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
});
// Setting up the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});