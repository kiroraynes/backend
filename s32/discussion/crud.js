const http = require('http');

// mock database

let directory = [
	{
		'name':'Brandon',
		'email':'brandon@mail.com'
	},
	{
		'name':'Jobert',
		'email':'jobert@mail.com'
}];

const port = 8080;

const server = http.createServer((request, response) => {
	if(request.url == '/users' && request.method == 'GET'){
		// 'application/json' - sets response output to jSON data type
		response.writeHead(200,{'Content-Type': 'application/json'});
		// response.write()-method in Node.js that is used to write data to the response body in a HTTP server
		// JSON.stringify()
		response.write(JSON.stringify(directory));
		response.end();
	}

	// POST Method

	else if (request.url == '/addUser' && request.method == "POST"){
		
		let requestBody = '';
		
		// request.on() - event listener in Node.js that is used to handle incoming data in HTTP server
		request.on('data', function(data){
			requestBody += data;
		});

		//  response end step
		request.on('end',function(){
			requestBody = JSON.parse(requestBody);

			let newUser = {
				"name":requestBody.name,
				'email': requestBody.email
			}
			directory.push(newUser);
			console.log(directory);

			response.writeHead(200,{'Content-Type': 'application/json'});
			response.write(JSON.stringify(newUser));
			response.end();

		});
	}
	}
).listen(port);

console.log(`Server running at localhost: ${port}`);