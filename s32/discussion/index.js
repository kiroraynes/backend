const http = require('http');

const port = 8080;

const server = http.createServer((request, response) => {
	if (request.url == '/items' && request.method == "GET") {
		response.writeHead(200,{'Content-Type': 'text/plain'});
		response.end('Data retrieved from the database.')
	} else if (request.url == '/items' && request.method == 'POST') {
		response.writeHead(200,{'Content-Type': 'text/plain'});
		response.end('Data to be sent to the database.')
	}
}).listen(port);

console.log(`Server running at localhost: ${port}`);