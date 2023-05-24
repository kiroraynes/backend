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

async function findDeptAge(db) {
	return await (

			db.users.find({
				$and :
				[
					{department: 'HR'},
					{age: {$gte: 70}}]
			})

		);

};

async function findNameAge(db) {
	return await (

			db.users.find({
				$and :
				[
					{lastName: {$regex: 'e',$options: 'i'}},
					{age: {$lte: 30}}
					]
			});

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

