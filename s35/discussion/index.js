const express = require('express');
// Mongoose is a package that allows creation of Schemas to Model our data structures
// also has access to a number of methods for manipulating our database
const mongoose = require('mongoose');

const app = express();
const port = 3001;

	// section: MongoDB connection
	// Connect to the database by passing your connection string
	// Due to update in MongoDB drivers that allow connection, the default connection string is being flagged as an error
	// by default a warning will be displayed in the terminal when the application is running.
	// {newUrlParser:true}
	// Syntax:
	// mongoose.connect("MongoDB string", {useNewUrlParser:true});

 mongoose.connect("mongodb+srv://admin:admin@batch288raynes.skaaxyv.mongodb.net/batch288-todo?retryWrites=true&w=majority", { useNewUrlParser:true});
let db = mongoose.connection;

// for catching the error justin case we had an error during the connection
// console.error.bind allows us to prin errors in the browser and in the terminal
db.on("error",console.error.bind(console,"Error! Can't connect to the Database"));
db.once("open", ()=> console.log("We're connected to the cloud database!"));

// [Section] Mongoose Schemas
// Schemas determine the structure of the document to be written in the database
// Schemas act as blueprints top our data
// use the Schema() constructor of the mongoose module to create a new Schema object.

const taskSchema = new mongoose.Schema({
	// define the fields with the corresponding data type
	name: String,
	status: {
		type: String,
		default: "pending"
	}
});

// [Section] Models
// Uses schema and are used to create/instantiate objects that corresponds to the schema.
// Models use Schema and they act as the middleman from the server(JS code) to our database.
// To create a model we are goin to use the model();

const Task = mongoose.model('Task', taskSchema);


// Middlewares

app.use(express.json());

app.use(express.urlencoded({extended:true}));


// Section: Routes
// Create a POST route to create a new task
// Create a new task
// Business logic:
	// 1. Add a functionality to check whether there are duplicate tasks
		// if the task is existing in the database, we return an erro 
		// if the task doesn't exist in the database, we add it in the database.
	// 2. The Task data will be coming from the request's body
app.post("/tasks", (request,response) => {
	//"findOne" method is a mongoose method that acts similar to "find" in MongoDB.
	// if the findOne finds a document that matches the criteria it will return the object/document and if there's no object that matches the criteria it will return an empty object or null.
	Task.findOne({name: request.body.name})
	.then(result => {
		// we can use if statement to check or verify whether we have object found.
		if(result){
			return response.send("Duplicate task found!");
		} else {
			// create a new task and save it to the database.
			let newTask = new Task({
				name: request.body.name
			})

			newTask.save();

			return response.send("New task created");
		}
	})
})

// Get all the tasks in our collection
// 1. Retrieve all the documents
// 2. If an error is encountered, print the error
// 3. if no error/s is/are found, send a success status to the client and show the documents retrieved

app.get("/task",(request,response) => {
	// find the method is a mongoose method that is similar to MongoDB fin
	Task.find({}).then(result => {
		return response.send(result);
	}).catch(error => response.send(error));
});




if(require.main === module){
	app.listen(port, () => {
	console.log(`Server is running at port ${port}`);
	})
}

module.exports = app;