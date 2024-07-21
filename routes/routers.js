const express = require('express')

const {signup ,login} = require('../controller/user.controller')

const router = express.Router();

router.post('/profile/signup',signup)

router.post('/profile/login',login)

module.exports = router;

