// [Section] MongoDB aggregation
/*
	- generate manipulated data and perform operations to create filtered results that helps analyzing data.
	- compared to doing CRUD Operations on our data from previous sessions, aggregation gives us access to manipulate, filter and compute for results providing us with information to make necessary development decisions without having to create a front-end application.

*/

// using aggregate method
db.fruits.aggregate([
	{ $match : {onSale: true}},
	{ $group : {_id : "$supplier_id", total: {
		$sum: "$stock"
	}}}
	]);

db.fruits.aggregate([
	{ $match: {onSale: true}},
	{ $group: {
		_id : "$color",
		max : { $max: "$stock"},
		sum : { $sum: "$stock"}
		}
	}
]);

// Field projection with aggregation
// used to exclude a field from the returned result

db.fruits.aggregate([
	{ $match: {onSale: true}},
	{ $group: {
		_id : "$color",
		max : { $max: "$stock"},
		sum : { $sum: "$stock"}
		}
	},
	{ $project: {_id : 0}}
])

// Sorting aggregated result

db.fruits.aggregate([
	{$match : {onSale: true}},
	{$group : {
		_id : "$supplier_id",
		total : {$sum : "$stock"}
	}},
	{$sort : {total : -1}}
]);

db.fruits.aggregate([
	{$match : { onSale: true}},
	{$group : {
		_id : "$name",
		stocks : {$sum : "$stock"}
	}},
	{ $sort : {
		_id : 1
	}}
])


db.fruits.aggregate([
	{$match : { onSale: true}},
	{$group : {
		_id : "$name",
		stocks : {$sum : "$stock"}
	}},
	{$project: {
		_id : 0
	}},
	{ $sort : {
		_id : 1
	}}
])

// Aggregating results based on an array field
// unwind operator

/*
	deconstructs an array field from a collection/field with array value to output a result for each element
*/

db.fruits.aggregate([
	{ $unwind : "$origin"}
	])

// Display fruit documents by their origin and the kinds of fruits that are supplied

db.fruits.aggregate([
	{$unwind : "$origin"},
	{$group : {
		_id : "$origin",
		kinds : {$sum : 1}
	}},
	{$sort : {kinds : 1}}
	])