const User = require('../models/user.js');
const bcrypt = require("bcrypt");

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
				return response.send("Login successful!");
			} else {
				return response.send("Please check your password");
			}
		}
	}).catch(error => response.send(error));
}
