const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true,"Course name is required"]
	},
	price: {
		type: Number,
		required: [true, "course price is required!"]
	},
	isActive:{
		type: Boolean,
		required:[true,'Course status is required!']
	},
	createdOn:{
		type: Date,
	default: new Date()
	},
	slots: {
		type: Number,
		required: [true, "Course slots is required!"]
	},

	enrollees: [
		{
			userId: {
				type: String,
				required: [true, "User ID of the enrollee is required!"]
			},
			enrolledOn:{
				type: Date,
				default: new Date()
			}
		}
	]

})

// We are now going to create the model

const Courses = mongoose.model("Courses", coursesSchema);

module.exports = Courses;