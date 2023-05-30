// console.log("Hello World");

// [Section] JavaScript synchronous vs asynchronous execution
/* JavaScript is by default synchronous which means only one statement is executed at a time.*/

// Asynchronous can run multiple statements at the same time.

// [Section] Getting all posts
    // The FETCH API allows to asynchronously request for a resource data.
    // so it means the fetch method is by default asynchronous
    // SYntax:
    // fetch('URL);

    console.log(fetch('https://jsonplaceholder.typicode.com/posts'));

    //Syntax:
     /*
         fetch('URL')
         .then((response => response));
    */
    //Retrive all posts follow the REST API
    
    // fetch ('https://jsonplaceholder.typicode.com/posts') // It always includes a promise status
    // // .then(response => console.log(response)); // this is to catch only the response rather than the promise

    // //the "then" method captures the response object
    // //Use the "json" method from the Response object to convert the data retrived into JSON format to be used in our application
    // .then(response => {
    //     return response.json()
    // })
    // // can also use this (implicit return when one liner)
    // // we also add another .then because it will still output a promise, so .then allows us to skip the promise.
    // .then(json => console.log(json))

    // Other than .then, there's the "async" and "await" keywords, they are used inside functions to create an asynchronous function
    async function fetchData(){
        let result = await fetch('https://jsonplaceholder.typicode.com/posts');
        console.log(result);

        json = await result.json(); // await is used to wait for the object response rather than the promise
        console.log(json);
    };

    // fetchData();

    // [SECTION] getting specific post
    // retrieves specific post following REST API (/posts/:id)
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(real => console.log(real));

    // [SECTION] Creating post
    // Syntax:
    /* 
        options is an object that contains the method, the header and the body of the request
        // by default if you don't add the method in the fetch request, it will be a get method
        fetch('URL', options)
        .then()
    
    */

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            // sets the header data of the request object to be sent to the backend
            headers: {
                'Content-type': 'application/json'
            },
            // sets the content/body of the request 
            body: JSON.stringify({
                title:'New Post',
                body: 'Hello World',
                userId: 1
            })
        })
        .then(response => response.JSON)
        .then(json => console.log(json))


    // // [SSECTION] Update specific post (PUT)

    // fetch('https://jsonplaceholder.typicode.com/posts/1',{
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': "application/json"
    //     },
    //     body: JSON.stringify({
    //         title: 'Updated Post'
    //     })
    // })
    // .then(response => response.json())
    // .then(json => console.log(json))

    //  // PATCH

    //  fetch('https://jsonplaceholder.typicode.com/posts/1',{
    //     method: 'PATCH',
    //     headers: {
    //         'Content-Type': "application/json"
    //     },
    //     body: JSON.stringify({
    //         title: 'Updated Post'
    //     })
    // })
    // .then(response => response.json())
    // .then(json => console.log(json))

    // [Section] Deleting a post

    // 
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(json => console.log(json))