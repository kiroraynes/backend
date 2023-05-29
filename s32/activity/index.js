const http = require('http');

const port = 4000;

const app = http.createServer((request,response) => {
	if (request.url == '/profile') {
		response.writeHead(200,{'Content-Type': 'text/plain'});
		response.end('Welcome to your profile');
	} else if (request.url == '/courses') {
		response.writeHead(200,{'Content-Type': 'text/plain'});
		response.end("Here's our courses available");
	} else if (request.url == '/addcourse') {
		response.writeHead(200,{'Content-Type': 'text/plain'});
		response.end("Add a course to our resoureces");
	} else if (request.url == '/updatecourse') {
		response.writeHead(200,{'Content-Type': 'text/plain'});
		response.end("Update a course to our resources");
	} else if (request.url == '/archivecourses') {
		response.writeHead(200,{'Content-Type': 'text/plain'});
		response.end("Archive courses to our resources");
	} else {
		response.writeHead(200,{'Content-Type': 'text/plain'});
		response.end("Welcome to Booking System");
	}
})


//Do not modify
//Make sure to save the server in variable called app
if(require.main === module){
    app.listen(4000, () => console.log(`Server running at port 4000`));
}

module.exports = app;