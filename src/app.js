// khai bao cac bien
const express = require('express'); // nap thu vien vao
const morgan = require('morgan'); // nap thu vien morgan
const handlebars = require('express-handlebars'); // xay dung cau truc cho project
const path = require('path');

const app = express(); // khai bao ham
const port = 8080; // khai bao port

app.use(express.static(path.join(__dirname, 'public'))); // cau hinh cho duong dan

// HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars({
    extname: '.hbs' // dinh nghia lai phan duoi
}));
app.set('view engine', 'hbs'); // dat cho ung dung express nay se su dung handlebar
app.set('views', path.join(__dirname, 'resource/views')); // tao duong dan

// Route function
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/courses', (req, res) => {
    res.render('course');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});