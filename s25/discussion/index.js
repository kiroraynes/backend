console.log("Good game Lakers!");

// [Section] JSON Obbjects
    // JSON stands for JavaScript object notation
    // JSON is also used in other programming language hence the name JavaScript Object Notation.
    // Core JavaScript has a built in JSON object that contains methods for parsing objects and converting strings into JavaScript Objects.
    // .json file, JSON File
    // JavaScript objects are not to be confused with JSON
    // Serialization is the process of converting data into series of bytes for easier transmisison/transmission of information/data
/*
Syntax:

*/

// [Section] JSON Arrays
/* 
    "cities": [
        {"city": "Quezon City", "province": "Metro Manila","country":"Philippines"}
    ]
*/

// [Section] JSON Methods
    // The jSON object contains methods for parsing and converting data into stringified JSON.

    // Converting Data into Stringified JSON
        // Stringified JSON is a JS object converted into a string to be used in other functions of a JS application 
        // They are commonly used in HTTP request where information is required to be sent and received in a stringified version
        // Requests are an important type of programming where an application commnicates with a backend application to perform different tasks such as getting/creating data in a database.

    let batchesArr = [ {
        batchName: 'Batch X'
    }, {batchName: 'Batch Y'}]

    console.log(batchesArr);
    console.log('Result from stringify method');
    console.log(JSON.stringify(batchesArr));

    // Using a stringify method with variables
        /* 
            Syntax:
                JSON.stringify({
                    propety A: variableA,
                    propertyB: variable B
                });
        */
    // User details
    // let firstName = prompt('What is your first name?');
    // let lastName = prompt('What is your last name?');
    // let address = {
    //     city: prompt('Which city do you live in?'),
    //     country: prompt('Which country does your city address belong to?')
    // }

    // let otherData = JSON.stringify({
    //     firstName: firstName,
    //     lastName : lastName,
    //     age : age,
    //     address : address
    // });

    // console.log(otherData);

    // Converting stringified into JavaScript Objects
    // Objects are common data types used in applications because of the complex data structures that can be created out of them

    let batchesJSON = '[{"batchName": "Batch X"},{"batchName": "Batch Y"}]';
    console.log(batchesJSON);
    console.log('Result from parse method:')
    console.log(JSON.parse(batchesJSON));

    