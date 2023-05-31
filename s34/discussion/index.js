const express = require('express');

const app = express();

const port = 8080;

// Middlewares
    // is software that provides common services andncapabilities to application outside of what's offered by the operating system.
    // ALlow our express to read json data
    app.use(express.json());

    // THis one will allow us to read data fro forms
    // BY defauly, information received from the url can only be received as a string or an array.
    app.use(express.urlencoded({extended: true})); // by applying the option of 'extended  : true' this will allow us to receive information in other data types such as an objectwhich will use throughout our application.

    
    // This route expets to receive a GET request at the URI "/hello"
    app.get("/", (request, response) => {
        response.send("Hello World!");

    });  // this route expects to receive a get request

    app.get("/hello",(request, response) => {
        response.send("Hello from the /hello endpoint");
    })

    app.post("/hello", (request,response) => {
        console.log(request.body);
        response.send(`Hello there ${request.body.firstName} ${request.body.lastName}`);
    });

    // An array will store user objects when the "/signup" route is accessed
    // This will serve as our mock database
    let users = [];

    app.post("/signup", (request,response) => {
        console.log(request.body);

        if (request.body.username !== "" && request.body.password !== "") {
            users.push(request.body);
            response.send(`User ${request.body.username} successfully registered!`)
        } else {
            response.send("Please input BOTH username and password.");
        }
    });

    app.put("/change-password", (request,response) => {
        let message;
        for (let index =0; index < users.length; index++){
            if(request.body.username == users[index].username){
                users[index].password = request.body.password;
                message = `User ${request.body.username}'s password has been updated!`
                break;
            } else {
                message = 'User does not exist.'
            }
        }
        response.send(message);
    })

    app.get("/home", (request, response) => {
        response.send("Welcome to the home page");

    });

    app.get("/users", (request, response) => {
        response.send(users);

    });

    app.delete("/delete-user", (request, response) => {
        console.log(request.body.username)
        let message;
        for (let index =0; index < users.length; index++){
            if(request.body.username == users[index].username){
                users.splice(index,1);
                message = `User ${request.body.username} has been deleted!`
                break;
            }
        }
        if (message) {
            response.send(message);
        } else {
            response.send('No users found.')
        }
    });

    
if(require.main === module){
    app.listen(port, () => console.log(`Server running at ${port}`));
}

module.exports = app;