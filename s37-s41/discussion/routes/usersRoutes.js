const express = require("express");
const usersControllers = require('../controllers/usersControllers.js');
const router = express.Router();


// Routes
router.post("/register", usersControllers.registerUser);
router.get("/login",usersControllers.loginUser);

module.exports = router;