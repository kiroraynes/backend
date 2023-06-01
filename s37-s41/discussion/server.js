const express = require("express");
const mongoose = require("mongoose");

// It will allow our backend applications to be available to our frontend application
const cors = require('cors');

const port = 4001;
const app = express();

// mongodb conn

mongoose.connect("mongodb+srv://admin:admin@batch288raynes.skaaxyv.mongodb.net/CourseBookingAPI?retryWrites=true&w=majority",{
		useNewUrlParser:true,
		useUnifiedTopology: true
	});
const db = mongoose.connection;
	db.on("error", console.error.bind(console, "Error, can't connect to database!"))
	db.once("open",()=> console.log("We are connected to the database."))

// Middlewares

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Reminder  that we are going to use this for the sake of the bootcamp
app.use(cors());


app.listen(port, () => {
	console.log(`Server is running at localhost:${port}`)
});