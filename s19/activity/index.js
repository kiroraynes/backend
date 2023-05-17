// console.log("hello world")
function test(a,b,c){
    console.log(a,b,c);
}
function login(username ,password, role){
    if (!(username == "" || username) || !(password == "" || password) || !(role == "" || role)){
        return "Inputs must not be empty";
    }
    else{
        switch(role){
            case 'admin':
                return 'Welcome back to the class portal, admin!';
                break;
            
            case 'teacher':
                return 'Thank you for logging in, teacher!';
                break;

            case 'rookie':
                return 'Welcome to the class portal, student!';
                break;

            default:
                return 'Role out of range.';
                break;
        }
    }
}

function checkAverage(a,b,c,d){
    arr = [a,b,c,d]
    average = (a + b + c + d)/4;
    average = Math.round(average);
    console.log(average);

    if (average<=74){
        return "Hello, student, your average is " + average + ". The letter equivalent is F";
    }
    else if ( average >= 75 && average <= 79){
        return 'Hello, student, your average is ' + average + '. The letter equivalent is D'
    }
    else if(average>=80 && average <= 84){
        return 'Hello, student, your average is ' + average + '. The letter equivalent is C'
    }
    else if (average >= 85 && average <= 89){
        return 'Hello, student, your average is ' + average + '. The letter equivalent is B'
    }
    else if (average >= 90 && average <= 95){
        return 'Hello, student, your average is ' + average + '. The letter equivalent is A'
    }
    else if (average >= 96){
        return 'Hello, student, your average is ' + average + '. The letter equivalent is A+'
    }
}


try {
    module.exports = {
        login: typeof login !== 'undefined' ? login : null,
        checkAverage: typeof checkAverage !== 'undefined' ? checkAverage :null
    }
} catch(err){

}