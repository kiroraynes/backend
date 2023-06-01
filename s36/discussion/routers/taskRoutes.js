const express = require("express");

const taskControllers = require('../controllers/taskControllers.js');

// COntain all the endpoints of our application
const router = express.Router();

router.get("/", taskControllers.getAllTasks);
router.get("/create", taskControllers.createNewTask);

// Parameterizer

// We are a create route using a delete metheod at the URL"/tasks/:id"
// The colon here is an identifier that helps to create a dynamic route which allows us to supply information
router.delete("/:id", taskControllers.deleteTask)
module.exports = router;