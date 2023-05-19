// console.log("Hello World!");

//Functions
	// Functions in JavaScript are lines/blocks of codes that tell our device/applicatio to perform a certain task when called/ invoke.
	// Functions are mostly created to create complicated tasks to run several lines of code in succession.

// Function declarations
	// defines a function with the specified parameters
	// syntax:
		/*
			function functionName(){
				codeBlock/statements;
			}
		*/

	// function keyword - used to defined a JavaScript function
	//functionName - the function name. Functions are named to be able to use later in the code for the invocation
	// function block ({}) -  the statements which comprise the body of the function. This is where the code will be executed.

		//Example:
			function printName(){
				console.log("My name is John!");
			};
//Function Invocation
	// The code block and statements inside a function is not immediately executed when the function is defined. The codeblock and statements inside the function is executed when the function is invoked or called.
	// It is common to use the term "call a funcion" instead of "invoke a function".

			//Let's invoke/ call the function that we declare.
			printName();

// Function Declaration vs. Expression
	//Function Declaration
		// A function can be created through function declaration by busing the using the function keyword and adding the function name
		// Declared function/s can be hoisted. 

		declaredFunction();
		//Note: Hoistin is a JavaScript behavior for certain variables and functions to run or use before their declaration
		function declaredFunction(){
			console.log("Hello World from declaredFunction!")
		}

	//Function Expression
		//A function can also be stored in a variable.
		//A function expression is an anonymous function assigned to a varibale function.
		// variableFunction();

		let variableFunction = function(){
			console.log( "Hello Again!");
		};

		variableFunction();

		// We can also create a function expression of a named function.

		let funcExpression = function funcName(){
			console.log("Hello from the other side!")
		};

		funcExpression();

		//You can reassign declared functions and function expressions to new anonymous function.

		declaredFunction = function(){
			console.log("Updated declaredFunction!")
		};

		declaredFunction();

		funcExpression = function(){
			console.log("Updated funcExpression!");
		};
		funcExpression();

		// However, we cannot re-assign a function expression initialized with const.

		const constantFunc = function(){
			console.log("Initialized with const!");
			let x = 5;
		};
		constantFunc();

		/*constantFunc = function(){
			console.log("Cannot be re-assgined!");
		};

		constantFunc();*/

// Function Scope
	// JavaScript has function scope: each function creates a new scope.
	// variables defined inside a function cannot be accessed outside the function

	function showNames(){
		const functionConst = "John";
		let functionLet = "Jane";
		// return functionLet
	}

	// console.log(functionConst); (not defined)
	// console.log(functionLet); (not defined)

	// console.log(showNames

	// Nested functions
		//  You can create another function inside a function. This is called a nested function.

	function myNewFunction(){
		let name = "Jane";

		// nested function
		function nestedFunction(){
			console.log(name);
		}
	}
		// need to invoke the parent function while invoking the nestedfunction inside the scope.

	// return statement
		// allows us to output a value from a function to be passed to the line/block of code that was invoked
	function returnFullName(){
		let fullName = "Jeffrey Smith Bezos";

		return fullName;
	}

	returnFullName();

	// function naming conventions
		// function names should be definitive of the task it will perform