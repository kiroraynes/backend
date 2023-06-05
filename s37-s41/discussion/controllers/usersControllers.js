const User = require('../models/user.js');
const Courses = require("../models/Courses.js");
const bcrypt = require("bcrypt");
const auth = require("../auth.js")
// 

// Create a controller for the signup

// registerUser
/* Business logic/ Flow 
	1. First, we have to validate whether the use is existing or not
	2. If the user email is existing, we will prompt an error telling the user that the email is taken.
	3. Otherwise, we will sign up or add the user in our database.*/

module.exports.registerUser = (request,response) => {
	// find method: it will return an array of object that fits the given criteria
	// 
	User.findOne({email : request.body.email})
	.then(result => {
		if(result){
			response.send(`${request.body.email} is already taken. Try logging in or use a different email to sign up.`)
		} else {
			let newUser = new User({
				firstName: request.body.firstName,
				lastName: request.body.lastName,
				email: request.body.email,
				// hashSync method : it hashes/encrypts our password
				// the second argument salt rounds
				password: bcrypt.hashSync(request.body.password, 10),
				isAdmin: request.body.isAdmin,
				mobileNo: request.body.mobileNo
			});
			newUser.save().then(saved => response.send(`${request.body.email} is now registered.`)).catch(error => response.send(error))
		}
	}).catch(error => response.send(error))
}

// new controller for the authentication of the user
module.exports.loginUser = (request, response) => {
	User.findOne({email : request.body.email})
	.then(result => {
		if (!result) {
			return response.send(`${request.body.email} is not yet registered`)
		} else {
			const isPasswordCorrect = bcrypt.compareSync(request.body.password, result.password);
			if (isPasswordCorrect){
				return response.send({
					auth: auth.createAccessToken(result)
				})
			} else {
				return response.send("Please check your password");
			}
		}
	}).catch(error => response.send(error));
}

module.exports.getProfile = (request, response) => {

	const userData = auth.decode(request.headers.authorization)
	// console.log(userData)

	if (userData.isAdmin) {
		User.findById(request.body.id)
		.then(result => {
			if (result){
				result.password = "*".repeat(result.password.length)
				return response.send(result)
			} else {
				return response.send("User not found.")
			}
		})
	} else {
		return response.send(`You are not an admin, you don't have access to this route.`)
	}
}

module.exports.enrollCourse = async (request,response) => {

	const courseId = request.body.id;
	const userData = auth.decode(request.headers.authorization);

	if(userData.isAdmin){
		return response.send("Admin cannot enroll a course")
	} else {
		// push to user doc
		let isUserUpdated = User.findOne({_id: userData.id})
		.then(result => {
			result.enrollments.push({
				courseId: courseId
			})
			result.save()
			.then(saved => true)
			.catch(erro => false)
		})
		.catch(error => false)

		let isCourseUpdated = Courses.findOne({_id : courseId})
		.then(result => {
			result.enrollees.push({
				userId: userData.id
			})

			result.save()
			.then(saved => true)
			.catch(error => false)
		}).catch(error => false)

		if(isUserUpdated && isCourseUpdated){
			return response.send('Enrollment is successful.')
		} else {
			return response.send('There was an error in the enrollment please try again!')
		}
	}

}