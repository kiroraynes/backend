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
		.then(saved => response.send(true))
		.catch(error => response.send(false));
	} else {
		return response.send(false)
	}
}

module.exports.getAllCourses = (request, response) => {
	courseData = auth.decode(request.headers.authorization);
	if (courseData.isAdmin) {
		Courses.find({})
		.then(result => response.send(result))
		.catch(error => response.send(false));
	} else {
		return response.send(false)
	}
	
}

module.exports.getActiveCourses = (request,response) => {
	Courses.find({isActive: true})
	.then(result => response.send(result))
	.catch(error => response.send(false));
}

// Controller will retrieve the information of a single document using provided params.

module.exports.getCourse = (request, response) => {
	const courseId = request.params.courseId;
	Courses.findById(courseId)
	.then(result => response.send(result))
	.catch(error => response.send(false))
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
		.then(result => response.send(true))
		.catch(error => response.send(false))
	}else{
		return response.send(false)
	}
}

module.exports.archiveCourse = (request,response) => {
	courseData = auth.decode(request.headers.authorization);

	const courseId = request.params.courseId;

	if(courseData.isAdmin){
		Courses.findByIdAndUpdate(courseId,{isActive: request.body.isActive})
		.then(result => response.send(true))
		.catch(error => response.send(false))
	}else{
		return response.send(false)
	}
}

module.exports.getInactiveCourses = (request, response) => {
	const userData = auth.decode(request.headers.authorization);
	if(userData.isAdmin){
		Courses.find({isActive:false})
		.then(result => response.send(result))
		.catch(error => response.send(false))
	} else {
		return response.send(false)
	}
}