// [Section] Exponent Operator;
	// Before the ES6 update
	// Math.pow(base,exponent);

	// 8 raise to the power of 2
	const firstNum=Math.pow(8,2);
	console.log(firstNum);

	// AFter the ES6 update

	const thirdNum = 8 ** 2;


// Template literals
	//  ES6 update
	name = "John"
	message = `Hello ${name}! Welcome to programminbg`;

// [Section] Array destructuring

	/*
		allows to unpack elements in array into distinct variables

		Syntax:
			let/const [variableNameA, variableNameB]
	*/

	const fullName = ["Juan","Dela","Cruz"];

	// before
	// let firstName = fullName[0], middleName = fullName[1], lastName = fullName[2];


	// After
		const [name1, name2, name3] = fullName;
		console.log(name1);
		console.log(name2);
		console.log(name3);

	//[Section] Object destructuring
		// allow us to unpack properties of objects into distinct variables;
		// shortens the syntax for accessing properties from objects
		/*
			syntax:
			let/const {propertyNameA, propertyNameB} = objectName;
		*/

	person = {
		givenName: 'Juan',
		middleName: 'Dela',
		familyName: 'Cruz'
	}
	let {givenName, middleName, familyName} = person

// [section] Arrow function without parameter
	const hello = () => {
		console.log("Hello World");
	}

	hello();

	// Arrow function with parameter

	/*
		syntax:
		const/let variableName = (parameter) => {
			statement/codeblock;
		}
	*/

	const printFullName = (firstName, middleInitial, lastName ) => {
		console.log(`${firstName} ${middleInitial} ${lastName}`);
	}

	printFullName("John", "D", "Smith");

	// arrow function in loops

	students = ['John','Jane','Judy'];

	students.forEach((student) => {
		console.log(`${student} is a student`);
	})

	// [Section] implicit return in Arrow function
		// example:
		// if the function will run one line or one statement the arrow function will implicitly return the value
			const add = (x,y) => x+y /* {x+y} will not return anything automatically*/;
			let total = add(10,12)

			console.log(total);

// [Section] Default Function argument value
			// provides a default function argument value if none is provided

		const greet = (name = "User") => {
			return `Good morning, ${name}`
		}

		// better to use undefined to skip an argument if you have more than one args

// [Section] Class-based object blueprints
	// allow us to create/instantiate objects using a class as blueprint

		// syntax:
		/*
			class className{
				constructor(objectPropertyA, objectPropertyB){
					this.objectPropertyA = objectValueA;
					this.objectPropertyB = objectValueB;
				}
			}
		*/

class Car {
	constructor(brand, name,year){
		this.brand = brand;
		this.name = name;
		this.year = year;
	}
}

// instantiate an object

const myCar = new Car("Ford","Ranger Raptor","2021");

console.log(myCar);