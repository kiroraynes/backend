const Task = require("../models/task.js");
/*Controllers*/

/*this Controller will get/retrieve all the document from the tasks collections*/

module.exports.createNewTask = (request, response) => {
	Task.findOne({name: request.body.name})
	.then(result => {
		if(result){
			return response.send("Duplicate task found!");
		} else {
			let newTask = new Task({
				name: request.body.name
			});
			newTask.save();

			return response.send("New task created");
		}
	});
}

module.exports.getAllTasks = (request,response) =>{
	Task.find({}).then(result => {
		return response.send(result);
	}).catch(error => response.send(error));
}

module.exports.deleteTask = (request, response) => {
	Task.findByIdAndRemove(request.params.id)
	.then(result => {
		return response.send(`The document that has the _id of ${request.params.id} has been deleted`);
	}).catch(error => response.send(error))
}