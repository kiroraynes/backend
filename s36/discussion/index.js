// [Section] separation of concern (model > controller>router>server)
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routers/taskRoutes.js")
const port = 4000;

const app = express();

// set up mongodb conn
mongoose.connect("mongodb+srv://admin:admin@batch288raynes.skaaxyv.mongodb.net/batch288-todo?retryWrites=true&w=majority",{useNewUrlParser: true});
const db = mongoose.connection;
	db.on("error", console.error.bind(console, "error, can't connect to the db!"));
	db.once("open", () => console.log('We are now connected to the db!'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/tasks", taskRoutes)


app.listen(port, () => {
	console.log(`Server is running at localhost:${port}`)
});