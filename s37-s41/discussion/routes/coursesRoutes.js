const express = require('express');
const coursesControllers = require('../controllers/coursesControllers.js');
const router = express.Router();
const auth = require('../auth.js');

router.post('/addCourse', auth.verify, coursesControllers.addCourse);

module.exports = router;