function printName(name){
    console.log("My Name is " + name);
}

printName("Kirt")

//variables can also be passed as an argument

let sampleVariable = "Curry";

printName(sampleVariable);


function checkDivisibilityBy8(num){
    return num%8 == 0;
}

// function as an argument
function argumentFunction(){
    console.log("This is a function passed as an argument");
}

function invokeFunction(func){
    func();
}

// multiple params

function createFullName(param1, param2, param3){
    console.log(param1, param2, param3);
}

// In JS, providing more or less params will not result to an error.