const http = require('http');

const port = 8888;

const server = http.createServer((request,response) => {
	if(request.url == '/greetings'){
		response.writeHead(200, {'Content-Type': 'text-plain'})

		response.end('Hello Michael Jordan')
	} else if ( request.url == '/homepage'){
		response.writeHead(200, {'Content-Type' : 'text/plain'})
		response.end('This is the homepage')
	} else {
		response.writeHead(200, {'Content-Type' : 'text/plain'})
		response.end('Hey! Page is not available')
	}
})

server.listen(port);

console.log(`Server is now accessible at localhost: ${port}.`);