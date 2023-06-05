const Courses = require('../models/Courses.js');
const auth = require('../auth.js');

// This controller is for the course creation
module.exports.addCourse = (request, response) => {
	courseData = auth.decode(request.headers.authorization);
	if (courseData.isAdmin) {
		let newCourse = new Courses({
			name: request.body.name,
			description: request.body.description,
			price: request.body.price,
			isActive: request.body.isActive,
			slots: request.body.slots
		})
		newCourse.save()
		.then(saved => response.send('Course successfully created.'))
		.catch(error => response.send(error));
	} else {
		return response.send('You are not authorized to create a course.')
	}
}

module.exports.getAllCourses = (request, response) => {
	courseData = auth.decode(request.headers.authorization);
	if (courseData.isAdmin) {
		Courses.find({})
		.then(result => response.send(result))
		.catch(error => response.send(error));
	} else {
		response.send("You don't have access to this route.")
	}
	
}

module.exports.getActiveCourses = (request,response) => {
	Courses.find({isActive: true})
	.then(result => response.send(result))
	.catch(error => response.send(error));
}

// Controller will retrieve the information of a single document using provided params.

module.exports.getCourse = (request, response) => {
	const courseId = request.params.courseId;
	Courses.findById(courseId)
	.then(result => response.send(result))
	.catch(error => response.send(error))
}

module.exports.updateCourse = (request, response) => {
	courseData = auth.decode(request.headers.authorization);

	const courseId = request.params.courseId;

	// description, price and name
	let updatedCourse = {
		name: request.body.name,
		description: request.body.description,
		price: request.body.price
	}

	if(courseData.isAdmin){
		Courses.findByIdAndUpdate(courseId,updatedCourse)
		.then(result => response.send('successfully updated!'))
		.catch(error => response.send(error))
	}else{
		return response.send(`You don't hjave access in this route!`)
	}
}

module.exports.archiveCourse = (request,response) => {
	courseData = auth.decode(request.headers.authorization);

	const courseId = request.params.courseId;

	if(courseData.isAdmin){
		Courses.findByIdAndUpdate(courseId,{isActive: request.body.isActive})
		.then(result => response.send('Successfully archived!'))
		.catch(error => response.send(error))
	}else{
		return response.send(`You don't have authorization to update this.`)
	}
}