const express = require('express');
const router = express.Router();

const user_controller = require('../controller/user_controller');
const posts_controller = require('../controller/posts_controller');


router.get('/profile',user_controller.profile);
router.get('/posts',posts_controller.viewPosts);
router.get('/new-user',user_controller.signup);
router.get('/log-in',user_controller.signin);


module.exports = router;