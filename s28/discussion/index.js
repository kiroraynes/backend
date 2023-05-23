// show databases - list of db inside our cluster
// use 'dbName' - to use a specific database
// show collections - to list down collections

// CRUD operation
/*
	- CRUD operation is the heart of any backend applciation.
	- mastering the CRUD oepration is essential for any developer especially to those who want to become a backend developer
*/
// [SECTION] Inserting Document (Create)
	// Insert one document
		/*
			Since mongoDB deals with objects as its structure for documents we can easily create them by providing objects in our method/operation.
		

		Syntax:
			db.collectionName.insertOne({
				object
			})

		*/

db.users.insertOne({
	firstName: "Jane",
	lastName: "Doe",
	age: 21,
	contact: {
		phone:"123456789",
		email: "janedoe@gmail.com"
	},
	courses: ["CSS","JavaScript","python"],
	department: "none"
})


// Insert Many

/*
	syntax:
		db.collectionName.insertMany([{object},{objectB}])
*/

db.users.insertMany([
		{
			firstName: "Stephen",
			lastName: "Hawking",
			age: 76,
			contact: {
			 	phone: "876543321",
			 	email: "stephenhawking@gmail.com"},
			courses: ["Python","React","PHP"],
			department: "none"
		},
		{
			firstName: "Neil",
			lastName: "Armstrong",
			age: 82,
			contact: {
			 	phone: "87654321",
			 	email: "neilarmstrong@gmail.com"},
			courses: ["React","Laravel","Sass"],
			department: "none"
		}

	])

db.userss.insertOne({
	firstName: "Jane",
	lastName: "Doe",
	age: 21,
	contact: {
		phone:"123456789",
		email: "janedoe@gmail.com"
	},
	courses: ["CSS","JavaScript","python"],
	department: "none"
})

// [SECTION] Finding documents (Read operation)
	// Syntax db.collectionName.find();
	// db.collectionName.find({field:value});

db.users.find();

db.users.find({ firstName: "Stephen"});
db.users.find({ lastName: "Armstrong", age:82});
db.users.find({ firstName: "Jane"});

db.users.find({'contact.phone':"123456789"})

// [Section] Updating documents(update)

db.users.insertOne({
	firstName: "test",
	lastName: "test",
	age: 0,
	contact:{
		phone: "00000000",
		email: "test@gmail.com"
	},
	courses: [],
	department: "none"
})

// updateOne Method
/*
	syntax:
		db.collectionName.updateOne({criteria},
		{$set:  {field:value}});
*/

db.users.updateOne(
	{ firstName: "test"},
	{
		$set: {
			firstName: "Bill",
			lastName: "Gates",
			age: 65,
			contact: {
				phone: '12345678',
				email: "bill@gmail.com"
			},
			courses: ['PHP','Laravel','HTML'],
			department: "none"
		}
	})
// updating multiple documents
/*
Syntax:
	db.collectionName.updatemany(
	{criteria},
	{
		$set:{
			{field:value}
		}
	}
	)
*/

db.users.updateMany(
	{department: "none"},
	{
		$set: {
			department:"HR"
		}
	})

db.users.replaceOne(
	{firstName:"test"},
	{
			firstName: "Bill",
			lastName: "Gates",
			age: 65,
			contact: {},
			courses: [],
			department: "Operations"
	}
	)

// [Section] Deleting Documents

// Deleting SIngle document
/*
db.collectionName.deleteOne({criteria})
*/

db.users.deleteOne({firstName: "Bill"});

// deleting multiple documents
db.users.deleteMany({firstName:"Jane"});

// all documents will be deleted
db.users.deleteMany({});