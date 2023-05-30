//Note: don't add a semicolon at the end of then().
//Fetch answers must be inside the await () for each function.
//Each function will be used to check the fetch answers.
//Don't console log the result/json, return it.

// Get Single To Do [Sample]
async function getSingleToDo(){

    return await (

       //add fetch here.
       
       fetch('<urlSample>')
       .then((response) => response.json())
       .then((json) => json)
   
   
   );

}



// Getting all to do list item
async function getAllToDo(){

   return await (

      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        arr = json.map(object => {
            const {['title']: title} = object;
            return title;
        })
        return arr
      })
  );

}
getAllToDo().then(json => console.log(json));

// [Section] Getting a specific to do list item
async function getSpecificToDo(){
   
   return await (

       fetch('https://jsonplaceholder.typicode.com/todos/1')
       .then(response => response.json())
       .then(json => json)
   );

}

getSpecificToDo().then(json => console.log(json))

// [Section] Creating a to do list item using POST method
async function createToDo(){
   
   return await (

       fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            completed : false,
            userId: 1,
            title: 'Created to do list item'
       })
       })
       .then(response => response.json())
        .then(json => json)

   );

}
createToDo().then(json => console.log(json));

// [Section] Updating a to do list item using PUT method
async function updateToDo(){
   
   return await (
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            dateCompleted : 'Pending',
            description: 'To update the my to do list with a different data structure',
            status: "pending",
            userId: 1,
            title: 'Updated to do list item'
       })
       })
       .then(response => response.json())
        .then(json => json)

   );

}
updateToDo().then(json => console.log(json))

// [Section] Deleting a to do list item
async function deleteToDo(){
   
   return await (

       fetch('https://jsonplaceholder.typicode.com/todos/2', {
        method: 'DELETE'})
        .then(response => response.json())
        .then(json => console.log(json))
   );

}

deleteToDo().then(json => console.log(json));



//Do not modify
//For exporting to test.js
try{
   module.exports = {
       getSingleToDo: typeof getSingleToDo !== 'undefined' ? getSingleToDo : null,
       getAllToDo: typeof getAllToDo !== 'undefined' ? getAllToDo : null,
       getSpecificToDo: typeof getSpecificToDo !== 'undefined' ? getSpecificToDo : null,
       createToDo: typeof createToDo !== 'undefined' ? createToDo : null,
       updateToDo: typeof updateToDo !== 'undefined' ? updateToDo : null,
       deleteToDo: typeof deleteToDo !== 'undefined' ? deleteToDo : null,
   }
} catch(err){

}

