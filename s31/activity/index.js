// 1. What directive is used by Node.js in loading the modules it needs?

	// Answer: require

// 2. What Node.js module contains a method for server creation?

	// Answer: http

// 3. What is the method of the http object responsible for creating a server using Node.js?

	// Answer: createServer();

// 4. What method of the response object allows us to set status codes and content types?
	
	// Answer: writeHead(status_code,)

// 5. Where will console.log() output its contents when run in Node.js?

	// Answer: bash terminal

// 6. What property of the request object contains the address's endpoint?

	// Answer: request.url


const http = require('http');

const port = 3000;

const server = http.createServer((request, response)=> {
	if (request.url == '/login'){
		response.writeHead(200, {'Content-Type': 'text/plain '});
		response.end('Welcome to the login page');
	} else {
		response.writeHead(200, {'Content-Type': 'text/plain '});
		response.end('Page not found');
	}
});

server.listen(port)
console.log(`Server is now accessible at localhost: ${port}.`);