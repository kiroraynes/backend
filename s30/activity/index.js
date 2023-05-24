async function fruitsOnSale(db) {
	return await(

			db.fruits.aggregate([
				{$match : {onSale: true}},
				{$group : {
					_id : null,
					fruits : {$count :{}}
				}},
				])
			)
}

async function fruitsInStock(db) {
	return await(

			db.fruits.aggregate([
				{$match : {stock: {$gte : 20}}},
				{$group : {
					_id : null,
					fruits : {$count :{}}
				}},
				])

		);
};


async function fruitsAvePrice(db) {
	return await(

			db.fruits.aggregate([
				{$match: {onSale: true}},
				{$group: {
					_id: "$supplier_id",
					AvgPrice: {$avg: "$price"}
				}}])

		);
};


async function fruitsHighPrice(db) {
	return await(

			db.fruits.aggregate([
				{$group: {
					_id: "$supplier_id",
					maxPrice: {$max: "$price"}
				}}])


		);
};


async function fruitsLowPrice(db) {
	return await(

			db.fruits.aggregate([
				{$group: {
					_id: "$supplier_id",
					minPrice: {$min: "$price"}
				}}])

		);
}


try{
    module.exports = {
        fruitsOnSale,
        fruitsInStock,
        fruitsAvePrice,
        fruitsHighPrice,
        fruitsLowPrice
    };
} catch(err){

};
