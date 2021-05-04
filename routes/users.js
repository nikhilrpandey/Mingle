const express = require('express');
const router = express.Router();

const user_controller = require('../controller/user_controller');

router.get('/profile',user_controller.profile);

module.exports = router;