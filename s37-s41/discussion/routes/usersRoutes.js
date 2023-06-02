const express = require("express");
const usersControllers = require('../controllers/usersControllers.js');
const router = express.Router();


// Routes
router.post("/register", usersControllers.registerUser);
router.get("/login",usersControllers.loginUser);
router.get("/details", usersControllers.getProfile)

module.exports = router;