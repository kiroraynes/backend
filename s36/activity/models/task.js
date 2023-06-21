const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
	name: String,
	status: {
		type: String,
		default: "pending"
	}
});

const Task = mongoose.model("Task", taskSchema);

// module.exports is a way for NodeJS to treat this value as a package that can be used by other files.
module.exports = Task;