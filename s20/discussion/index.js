// [Section] While Loop

	// 	A while loop takes an expression/condition. Expressions are in unit of code that can be evaluated as true or false.

	let count = -1;

	while (count !== -5){
		console.log(count);

		count--;
	}

// Do while loop
	// do-while loops guarantees that the code will be executed at least once

// let number = Number(prompt("Give me a number:"));
// // The number function work similarly to the parseInt function

// do {
// 	console.log("Do while:", number)
// 	number++;
// } while (number<10);

// For loop
	// for loops are more flexible than do-while loops. It consists of a 3 parts, initialization, expression/condition that will be evaluated, which will determine whether the loop will run one more time, iteration
	// for (initialization; expression; iteration){
	// 	statement;
	// }

// for (let i = 0; i <= 10; i++){
// 	console.log('The current value is', i);
// }

// let str = prompt("Give me a string")
// for (let i=0; i < str.length; i++){
// 	console.log(str[i]);
// }


// let myName = prompt("Give me your name");
// // console.log(myName.toUpperCase()[0])
// for (let index = 0; index < myName.length; index++){
// 	x = myName.toUpperCase()[index];
// 	if (x === "A" || x === "E" || x === "I" || x === "O" || x === "U"){
// 		console.log(3);
// 	}
// 	else{
// 		console.log(myName[index]);
// 	}
// }

for (let i = 0; i<=20; i++){
	if (i%2===0){
		console.log('skipping');
	}
	else {
		console.log(i);	
	}
}