 // console.log("hello world")


 // conditional statement

// [Section] if, else if, and else statement

let numA= -1;

// if statement
	// executes a statement if the specificied condition is met or true.

	if(numA<0){
		console.log('hello')
	}

	let city = "New York";

	if (city === "New York"){
		console.log("Welcome to New York")
	}


// else if statement

	let numH = 1;
	if (numH > 2){
		console.log('Hello')
	}
	else if (numH < 2){
		console.log('World')
	}

	numH = 2;
	if (numH ===2){
		console.log("Hello");
	}

	else if (numH > 1){
		console.log('World')
	}

	function determineTyphoonIntensity(windspeed){
		if (windspeed < 0){
			return "Invalid wind speed";
		}
		else if (windspeed <= 38){
			return "Tropical Depression"
		}
		else if (windspeed >=39 && windspeed <= 78){
			return "Tropical Storm"
		}
		else if (windspeed >=74 && windspeed <= 95){
			return "Category 1"
		}
		else if (windspeed >=96 && windspeed <= 110){
			return "Category 2"
		}
		else if (windspeed >=111 && windspeed <= 129){
			return "Category 3"
		}
		else if (windspeed >=130 && windspeed <= 156){
			return "Category 4"
		}
		else {
			return "Category 5"
		}
	}

// Switch case syntax

let day = prompt("What day is it today?").toLowercase();

switch(day){
	case 'monday':
		console.log("the color of the day is red!")
		break;

	default:
		console.log("Invalid input")

}

// [Section] try - catch - finally

function showIntensityAlert(windspeed){
	try{
		alert(determineTyphoonIntensity(windspeed))p
	}
	// the catch will only run if and only if there was an error in the statement insidie our try.
	catch(error){
		console.warn(error.message);
	}

	finally{
		// continue execution of code regardless of success and failure of code execution in the try block.
		alert("Intensity updates will show new alert!");
	}
}

showIntensityAlert(30);

console.log("Hi im after the showIntensityAlert");