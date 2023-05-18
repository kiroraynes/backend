/*
    Create functions which can manipulate our arrays.
*/

/*
    Important note: Don't pass the arrays as an argument to the function. 
    The functions must be able to manipulate the current given arrays.
*/

let registeredUsers = [

    "James Jeffries",
    "Gunther Smith",
    "Macie West",
    "Michelle Queen",
    "Shane Miguelito",
    "Fernando Dela Cruz",
    "Akiko Yukihime"
];
let friendsList = [];

/*
    
   1. Create a function called register which will allow us to register into the registeredUsers list.
        - this function should be able to receive a string.
        - determine if the input username already exists in our registeredUsers array.
            -if it is, return the message:
                "Registration failed. Username already exists!"
            -if it is not, add the new username into the registeredUsers array and return the message:
                "Thank you for registering!"
        - invoke and register a new user.
        - outside the function log the registeredUsers array.

*/
function register(a){
    if (registeredUsers.includes(a)==false){
        registeredUsers.push(a);
        console.log("Thank you for registering!");
    }
    else {
        console.log("Registration failed. Username already exists!");
    }
}


/*
    2. Create a function called addFriend which will allow us to add a registered user into our friends list.
        - this function should be able to receive a string.
        - determine if the input username exists in our registeredUsers array.
            - if it is, add the foundUser in our friendList array.
                    -Then return the message with the following message:
                        - "You have added <registeredUser> as a friend!"
            - if it is not, return the message:
                - "User not found."
        - invoke the function and add a registered user in your friendsList.
        - Outside the function log the friendsList array in the console.

*/
function addFriend(a){
    if (registeredUsers.includes(a)){
        if(friendsList.includes(a)){
            console.log('Already added');
        }
        else {
            friendsList.push(a);
            console.log('You have added', a, 'as a friend!');
        }
    }
    else {
        console.log('User not found.')
    }
}

/*
    3. Create a function called displayFriends which will allow us to show/display the items in the friendList one by one on our console.
        - If the friendsList is empty return the message: 
            - "You currently have 0 friends. Add one first."
        - Invoke the function.

*/
    
function displayFriends(){
    friendsList.forEach(function(task){
        console.log(task);
    })
}

/*
    4. Create a function called displayNumberOfFriends which will display the amount of registered users in your friendsList.
        - If the friendsList is empty return the message:
            - "You currently have 0 friends. Add one first."
        - If the friendsList is not empty return the message:
            - "You currently have <numberOfFriends> friends."
        - Invoke the function

*/
function displayNumberOfFriends(){
    if (friendsList.length === 0){
        console.log('You currently have', friendsList.length, 'friends. Add one first');
    }
    else {
        console.log('You currently have',friendsList.length, 'friends.')
    }
}

/*
    5. Create a function called deleteFriend which will delete the last registeredUser you have added in the friendsList.
        - If the friendsList is empty return a message:
            - "You currently have 0 friends. Add one first."
        - Invoke the function.
        - Outside the function log the friendsList array.

*/

function deleteFriend(){
    if (friendsList.length > 0){
        
        friendsList.pop();
    }
    else {
        console.log('You currently have 0 friends. Add one first.');
    }
}
/*
    Stretch Goal:

    Instead of only deleting the last registered user in the friendsList delete a specific user instead.
        -You may get the user's index.
        -Then delete the specific user with splice().
*/

function delFriend(a){
    if (friendsList.length > 0){
        b = friendsList.indexOf(a);
        friendsList.splice(b,1);
    }
    else {
        console.log('You currently have 0 friends. Add one first.');
    }
    
}





//For exporting to test.js
try{
    module.exports = {

        registeredUsers: typeof registeredUsers !== 'undefined' ? registeredUsers : null,
        friendsList: typeof friendsList !== 'undefined' ? friendsList : null,
        register: typeof register !== 'undefined' ? register : null,
        addFriend: typeof addFriend !== 'undefined' ? addFriend : null,
        displayFriends: typeof displayFriends !== 'undefined' ? displayFriends : null,
        displayNumberOfFriends: typeof displayNumberOfFriends !== 'undefined' ? displayNumberOfFriends : null,
        deleteFriend: typeof deleteFriend !== 'undefined' ? deleteFriend : null

    }
} catch(err){

}