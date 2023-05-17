// console.log("Hello World");

//Objective 1
let string = 'supercalifragilisticexpialidocious';
console.log(string);
let filteredString = ''
for (let i = 0; i < string.length; i++) {
    x = string[i]
    if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u"){
        continue;
    }
    else {
        filteredString += string[i];
    }
}

console.log(filteredString);





//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
    module.exports = {

        filteredString: typeof filteredString !== 'undefined' ? filteredString : null

    }
} catch(err){

}