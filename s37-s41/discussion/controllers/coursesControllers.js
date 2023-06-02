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