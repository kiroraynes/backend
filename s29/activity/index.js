// S29 - MongoDB Query Operators and Field Projection:

/*

    Sample solution:

    return async function findName(db) {
        await (db.collectionName.find({
            $and: [
            	{field1: "value1"},
             	{field2: "value2"}
            ]
        }));
        
    }

Note: 
	- Do note change the functionName or modify the exports
	- Delete all the comments before pushing.

*/

// 1. Find users with letter s in their first name or d in their last name.
async function findName(db) {
	return await(

			db.users.find({
				$or : [
					{firstName: {$regex: 's',$options : 'i'}},
					{lastName: {$regex: 'd', $options: 'i'}}]
			},
			{
				firstName: 1,
				lastName: 1
			});

		);

};

// 2. Find users who are from the HR department and their age is greater than or equal to 70.
async function findDeptAge(db) {
	return await (

			// Add query here

		);

};


// 3. Find users with the letter e in their last name and has an age of less than or equal to 30.
async function findNameAge(db) {
	return await (

			// Add query here

		);
};


try{
    module.exports = {
        findName,
        findDeptAge,
        findNameAge
    };
} catch(err){

};

