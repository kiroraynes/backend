const jwt = require("jsonwebtoken");

// User defined string data that will be used to create our JSON Web token.
// Used in the algorithm for encryping our data which makes it difficult to decode the information without the defined keyword.
const secret = "CourseBookingAPI"; //To be put kept separately, not in the code package.

// Section: JSON Web token
// JSON web token or JWT is a way of securely passing information from the server to the front end or to the parts of the server.

// Information is kept secure through theuse of the secret code.

// Function for token creation
// Analogy:
/*
	Pack the gift and provide a lock with the secret code as the key.
*/

// the argument that will be passed in the parameter will be the document or object that contains the info of the user.
module.exports.createAccessToken = (user) => {
	const data = {
		id : user._id,
		isAdmin : user.isAdmin,
		email : user.email
	}
	// Generate a JSON web token using JWT's sign method
// generate the toke using the form data and the secret code with no additional options provided.
	return jwt.sign(data, secret, {});
}

// Token verification
/*
	Analogy:
		Receive gift and open the lock to verify if the sender is legitimate and the gift was not tampered
*/
module.exports.verify = (request, response, next) => {
	let token = request.headers.authorization;

	if (token) {
		token = token.slice(7,token.length);

		// validate the token using the "verify" method in decrypting the token using the secret code.
		return jwt.verify(token,secret, (error,data) =>{
			if(error){
				return response.send(false)
			} else {
				next();
			}
		})
	} else {
		return response.send(false);
	}
}

module.exports.decode = (token) => {
	token = token.slice(7,token.length);

	// The decode method is used to obtain the information from the JWT
	// The {complete: true} option allows us to return additional informatio nfrom the JWT token.

	return jwt.decode(token,{complete:true}).payload;
}


