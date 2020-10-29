const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();

router.post('/dangkitk', authController.register);

router.post('/dangnhaptk', authController.login);

module.exports = router;