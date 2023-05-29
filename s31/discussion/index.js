// use the "require" directive to load Node.js modules
// A modules is a software component or part of a program that contains one ore more routines
// The 'http module' lets NOde.Js transfer data using the hypertext transfer protocol
// In that way, HTTP is a protocol that allows the fetching of resources such as HTML documents
let http = require("http");

// using this modul;e's createServer() method, we can create an HTTP server that listens to request on a specified port and gives responses back to the client.
// a port  is a virtual point where network connections starts and end.
// The http mopdule has a createServer() method that acceopts
http.createServer(function (request, response) {	

	response.writeHead(200, {'Content-type': 'text/plain'});

	response.end('Hello World');
}).listen(8000);

console.log('Server running at localhost:8000');
