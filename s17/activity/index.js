console.log("Hello World")

/*
	1. Create a function named getUserInfo which is able to return an object. 

		The object returned should have the following properties:
		
		- key - data type

		- name - String
		- age -  Number
		- address - String
		- isMarried - Boolean
		- petName - String

		Note: Property names given is required and should not be changed.

		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		Note: This is optional.

*/

function getUserInfo(){
	userInfo = {
		name: 'John Doe',
		age: 25,
		address: '123 Street, Quezon City', 
		isMarried: false, 
		petName: 'Danny'
	}

	return userInfo;
}

userInfo = getUserInfo()
console.log(userInfo)


/*
	2. Create a function named getArtistsArray which is able to return an array with at least 5 names of your favorite bands or artists.
		
		- Note: the array returned should have at least 5 elements as strings.
			    function name given is required and cannot be changed.


		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		Note: This is optional.
	
*/

function getArtistsArray(){
	artistsArray = ['Charlie Puth', '2NE1','BLACKPINK','Maroon 5', 'Eminem'];
	return artistsArray;
}




/*
	3. Create a function named getSongsArray which is able to return an array with at least 5 titles of your favorite songs.

		- Note: the array returned should have at least 5 elements as strings.
		        function name given is required and cannot be changed.

		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		Note: This is optional.
*/

function getSongsArray(){
	songsArray = ['She will be loved','Venom','Tally','Killshot','Animals']
	return songsArray;
}




/*
	4. Create a function named getMoviesArray which is able to return an array with at least 5 titles of your favorite movies.

		- Note: the array returned should have at least 5 elements as strings.
		        function name given is required and cannot be changed.

		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		Note: This is optional.
*/

function getMoviesArray(){
	moviesArray = ['Transformers 1', 'Transformers 2', 'Transformers 3','Transformers 4', 'Transformers 5']
	return moviesArray;
}


/*
	5. Create a function named getPrimeNumberArray which is able to return an array with at least 5 prime numbers.

			- Note: the array returned should have numbers only.
			        function name given is required and cannot be changed.

			To check, create a variable to save the value returned by the function.
			Then log the variable in the console.

			Note: This is optional.
			
*/

function getPrimeNumberArray(){
	number = 5;
	primeNumbers = [2,3,5,7,11];
	// dummy = 0;

	// for (let i = 2; i< (number+1); i++) {
	// 	for (let j = 2; j<(i+1); j++){
	// 		if (j%i ==0) {
	// 			dummy++;
	// 		}
		
	// 		if (j==1){
	// 			primeNumbers.push(j);
	// 		}
	// 		if (dummy==2){
	// 			primeNumbers.push(j);
	// 		}
	// 	}
	// }
	// dummy = 0;
	return primeNumbers;
}



//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
	module.exports = {

		getUserInfo: typeof getUserInfo !== 'undefined' ? getUserInfo : null,
		getArtistsArray: typeof getArtistsArray !== 'undefined' ? getArtistsArray : null,
		getSongsArray: typeof getSongsArray !== 'undefined' ? getSongsArray : null,
		getMoviesArray: typeof getMoviesArray !== 'undefined' ? getMoviesArray : null,
		getPrimeNumberArray: typeof getPrimeNumberArray !== 'undefined' ? getPrimeNumberArray : null,

	}
} catch(err){


}