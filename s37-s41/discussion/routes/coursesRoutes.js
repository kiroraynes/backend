const express = require('express');
const coursesControllers = require('../controllers/coursesControllers.js');
const router = express.Router();
const auth = require('../auth.js');

router.post('/addCourse', auth.verify, coursesControllers.addCourse);
router.get('/', auth.verify, coursesControllers.getAllCourses)
router.get('/activeCourses', coursesControllers.getActiveCourses)
// Route for getting the specific course information
router.get('/:courseId', coursesControllers.getCourse);

// route for updating course
router.patch('/:courseId', auth.verify, coursesControllers.updateCourse);
// for archiving
router.put('/:courseId',auth.verify,coursesControllers.archiveCourse)

module.exports = router;



