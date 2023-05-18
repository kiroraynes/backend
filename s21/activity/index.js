let users = ["Dwayne Johnson","Steve Austin","Kurt Angle","Dave Bautista"];

console.log("Original Array:")
console.log(users);

/*
    Important note: Don't pass the array as an argument to the function. 
    The functions must be able to manipulate the current users array.
*/

/*
    1. Create a function called addItem which is able to receive a single argument and add the input at the end of the users array.
        -function should be able to receive a single argument.
        -add the input data at the end of the array.
        -The function should not be able to return data.
        -invoke and add an argument to be passed in the function.
        -log the users array in the console.

*/

function addItem(item){
    users[users.length] = item;
    console.log(users);
}
/*
    2. Create function called getItemByIndex which is able to receive an index number as a single argument return the item accessed by its index.
        -function should be able to receive a single argument.
        -return the item accessed by the index.
        -Create a global variable called outside of the function called itemFound and store the value returned by the function in it.
        -log the itemFound variable in the console.

*/

function getItemByIndex(index){
    return users[index];
}
itemFound = getItemByIndex(Number(prompt("Give me the index")))

/*
    3. Create function called deleteItem which is able to delete the last item in the array and return the deleted item.
        -Create a function scoped variable to store the last item in the users array.
        -Shorten the length of the array by at least 1 to delete the last item.
        -return the last item in the array which was stored in the variable.

*/
function deleteItem(){
    users.length = users.length-1;
    last = users[users.length-1];
    return last;
}


/*
    4. Create function called updateItemByIndex which is able to update a specific item in the array by its index.
        -Function should be able to receive 2 arguments, the update and the index number.
        -First, access and locate the item by its index then re-assign the item with the update.
        -This function should not have a return.
        -Invoke the function and add the update and index number as arguments.
        -log the users array in the console.

*/
function updateItemByIndex(a,b){
    users[b] = a;
    console.log(users);
}


/*
    5. Create function called deleteAll which is able to delete all items in the array.
        -You can modify/set the length of the array.
        -The function should not return anything.

*/
function deleteAll(a){
    a.length -= a.length;
}



/*
    6. Create a function called isEmpty which is able to check if the array is empty.
        -Add an if statement to check if the length of the users array is greater than 0.
            -If it is, return false.
        -Else, return true.
        -Create a global variable called outside of the function  called isUsersEmpty and store the returned value from the function.
        -log the isUsersEmpty variable in the console.

*/
function isEmpty(a){
   if (a.length > 0){
       return false;
   }
   else{
       return true;
   }
}
let isUsersEmpty = isEmpty(users);

//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
    module.exports = {

        users: typeof users !== 'undefined' ? users : null,
        addItem: typeof addItem !== 'undefined' ? addItem : null,
        getItemByIndex: typeof getItemByIndex !== 'undefined' ? getItemByIndex : null,
        deleteItem: typeof deleteItem !== 'undefined' ? deleteItem : null,
        updateItemByIndex: typeof updateItemByIndex !== 'undefined' ? updateItemByIndex : null,
        deleteAll: typeof deleteAll !== 'undefined' ? deleteAll : null,
        isEmpty: typeof isEmpty !== 'undefined' ? isEmpty : null,

    }
} catch(err){

}