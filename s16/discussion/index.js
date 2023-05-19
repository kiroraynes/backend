/*console.log('Connected');*/




// Section Arithmetic operators

let	x = 1397;
let y = 7831;

let sum = x + y;

console.log("The sum of x + y is : " + sum);

let difference = y - x;

console.log("Result of subtraction is: " + difference);

// Multiplication Operator (*)
 let product = x * y;
 console.log("Result of multiplication operator: " + product);

 //Division Operator  (/)
let	quotient = y/x;
console.log("Result of division operator: "+quotient);


// Modulo operator (%)
let remainder = y % x;
console.log("Remainder is: " +remainder);

// [Section] Assignment Operators
	// Assignment  Operator (=)
	// This assigns/reassigns the value of the lhs with the rhs.
	let assignmentNumber = 8;

	// Addition assignment operator (+=)
	 //  The additon assignment operator adds the value of the RHS to the LHS

	assignmentNumber += 2;
	console.log(assignmentNumber);

	 assignmentNumber += 3;
	 console.log ("Result of addition assignment operator: " + assignmentNumber);

	 // Other operators -=, *=, /=

	 // MDAS - mult, div, add, sub

	 let mdas = 1 + 2 -3 * 4 / 5

	 // [Section] Increment and decrement

	 let z=1;

	 let increment = ++z;
	 console.log("Result of pre-increment: " + increment);

	 console.log("Result of pre-increment: " + z);

	 increment = z++;

	 console.log("The result of post-increment: " + increment);
	 console.log("The result of pre-increment: " + z);


	 let numA = '10';
	 let numB = 12;
	 let coercion = numA + numB;
	 console.log(typeof(coercion), coercion);

	 