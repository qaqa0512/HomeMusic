const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // The body of the page "home" 
    res.render('home', { title: 'Home Music' });
});

router.get('/khoahoc', (req, res) => {
    res.render('course', { title: 'Khóa Học' });
});

router.get('/khoahoc/chitiet', (req, res) => {
    res.render('details', { title: 'Chi Tiết Khóa Học' });
});

//Login
router.get('/dangki', (req, res) => {
    res.render('register', { title: 'Đăng kí' });
});
router.get('/dangnhap', (req, res) => {
    res.render('login', { title: 'Đăng nhập' });
});

module.exports = router;