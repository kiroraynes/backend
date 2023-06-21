const express = require("express");
const usersControllers = require('../controllers/usersControllers.js');

const router = express.Router();
const auth = require("../auth.js");


// Routes
router.post("/register", usersControllers.registerUser);
router.post("/login",usersControllers.loginUser);

// getProfile
router.get("/details", auth.verify, usersControllers.getProfile);

// 
router.post('/enroll', auth.verify, usersControllers.enrollCourse);
// token verification
// router.get("/verify",auth.verify);

router.get("/userDetails", auth.verify, usersControllers.retrieveUserDetails)

module.exports = router;