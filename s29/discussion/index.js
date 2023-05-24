// advanced queries

// Query an embedded document / object
db.users.find({
	contact : {
		email: "stephenhawking@gmail.com"
	}
// }); will not return a match

// Use the dot notation
db.users.find({
	"contact.email" : "stephenhawking@gmail.com"
});

// query an array with exact element
db.users.find({
	courses:["CSS","Javascript","Python"]
});

// query an array from one element or two (not all)

db.users.find({courses: {
	$all: ["React"]
}});

// Query operators

// [Section] Comparison Query Operators
	// $gt/$gte operator
	/*
		- will only work if the field is a number or int
		- find docs that have values greater or equal to a value
		Syntaxc:
		db.collectionName.find({field: {
			$gt: value
		}})
	*/
db.users.find({age : {$gt: 72}});

// $lt/$lte operator
db.users.find({age : {$lt: 72}});

// $ne operator
db.users.find({age: {$ne: 76}});

// $in operator more specific than $all

db.users.find({ lastName: {$in: ["Hawking","Doe"]}});

db.users.find({courses :
	{
		$in : ["React", "Laravel"]
		}
	});

// [Section] Logical Query Operators
	// $or operator
	/*
		- allow us to find a document that matches a single criteria from multiple provided search criterion
		Syntax:
			db.collectionName.Find({
				$or : [{fieldA: valueA"}, {fieldB: valueB}]
			});

	*/

db.users.find({
	$or : [{firstName: "Neil"},{age:25}]
});

// multiple operators
db.users.find({
	$or : [{firstName: "Neil"}, {age: { $gt: 25}}]


db.users.find({
	$or : 
	[
		{firstName: "Neil"}, 
		{age: { $gt: 25}},
		{courses: {$in: ["CSS","React"]}}
	]
});

// $and operator
/*
	allows us to find documents that match both criterion

	db.collectionName.Find({
	$and :
		[
			{fieldA: valueA},
			{fieldB: valueB}
		]
	})
*/

db.users.find({
	$and:
	[
		{ age: {$ne: 76}},
		{ age: {$ne: 82}}
		]
})

// Mini-activity

db.users.find({
	$and :
	[
		{ age: {$gt: 30}},
		{ courses: {$in: ["CSS","HTML"]}}
		]
});


// [Section] Field Projection
/*
	retrieving documents are common operations that we do and by default MongoDB returns the whole document
*/

// Inclusion

/*
	- allows us to include or add specific fields only when retrieving documents:
	Syntax:
	db.collectionName.find({criteria}, {field: 1});
*/

db.users.find(
	{ firstName: "Jane"},
	{
		firstName: 1,
		lastName: 1,
		contact: 1
	});

// exclusion
/*
	allows to exclude/remove specific fields only when retrieving documents
	syntax:
		db.users.find({criteria}, {field: 0})
*/

db.users.find(
	{firstName : "Jane"},
	{
		"contact.email": 0,
		department: 0
	});

// Evaluation Query operator
	// $regex operator
	/*
		allow us to find documents that match a specific string pattern using regular expression,.
		- syntax:
		db.users.find({
			field: $regex: 'pattern', option: 'optionValue'
		})
	*/

db.users.find({firstName: { $regex: 'N'}}):