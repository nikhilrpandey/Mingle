const express = require('express');

const router = express.Router();

const home_controller = require('../controller/home_controller');
const users=require('../controller/user_controller');

router.get('/',home_controller.home);
router.use('/users',require('./users'));




module.exports = router;