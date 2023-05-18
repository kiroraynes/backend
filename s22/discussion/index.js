// console.log("Good Afternoon Batch 288")

    // Mutator methods
    // Mutators methods are functions that "mutate" or change an array after they're created
    // These methods manipulate the original array performing various such as adding or removing elements.
    let fruits = ['Apple', 'Orange', 'Kiwi','Dragon Fruit'];

    // push() 
    /*
     - adds an element at the end of an array and returns the array's length
     Syntax:
        arrayName.push();
    */

    console.log(fruits);

    fruits.push('Mango');

    console.log(fruits);

    // pop()
    // removes the last element and returns the removed element

    fruits.pop();
    console.log(fruits)

    // unshift()
    // -it adds one or more elements at the beginning of an array and it returns the updated array length

    fruits.unshift('Lime', 'Banana');

    console.log("mutated array from unshift method: ");
    console.log(fruits)

    // shift()
    // removes an element at the beginning of an array and returns the removed element.

    console.log(fruits);
    fruits.shift();
    console.log(fruits)

    // splice()
    // - simultaneously removes an element from aspecified index number and adds element;
    // syntax:
    /* arrayname.splice(startingIndex, deleteCount, elements to be added);
*/
    fruits.splice(1, 1);

    // sort()
    /*  rearranges the array elements in alphanumeric order
    syntax:
        arrayName.sort();
    */

    fruits.sort();

    // reverse() - reverses order

    fruits.reverse();


    // [Section] Non-mutator methods
    /* */

    let countries = ['US','PH','CAN','SG','TH','PH','FR','DE'];

    // indexOf() returns the index number ofthe first matching element found in an array;

    /* syntax:
        arrayName.indexOf(searchValue, startIndex optional);
    */
   let firstIndex = countries.indexOf('PH');
    console.log(firstIndex);

    // lastIndexOf()
    /* -returns the index number of the last matching element found in an array

    syntax:
    arrayName.lastIndexOf(searchValue, startIndex optional);
    */

    let lastIndex = countries.lastIndexOf('PH');

    invalidCountry = countries.lastIndexOf('BR');
    console.log(invalidCountry);

    // indexOf, starting from the starting index going to the last element(from left to right)
    // lastIndexOf, starting from the starting index going to the first element (from right to left)

    let slicedArrayA = countries.slice(2);
    console.log('Result from slice method:');
    console.log(slicedArrayA);

    let slicedArrayB = countries.slice(2,4);
    console.log('Result from the slice method: ');
    console.log(slicedArrayB);

    // toString()
    // returns an array as string separated bycommas syntax:
    // arrayName.toString();

    console.log(countries.toString());
    // concat()
    // combines arrays to an array or element and returns the combined result.

    let tasksArrayA = ['drink HTML','eat javascript'];
    let tasksArrayB = ['inhale CSS','breathe sass'];
    let tasksArrayC = ['get git','be node'];

    let tasks = tasksArrayA.concat(tasksArrayB);
    console.log(tasks);

    let allTasks = tasksArrayA.concat(tasksArrayB,tasksArrayC);

    // join()
    let users = ['John','Jane','Joe', 'Robert'];

    console.log(users.join());
    console.log(users.join(''));

    // [Section] Iteration methods
    // iteration methods are loops designed to perform repetitive tasks

    //forEach()
    // Similar to a for loop that iterates on each of array element.
    // syntax:
        // arrayName.forEach(function(indivElement){
            // CSSLayerStatementRule;})

    console.log(allTasks);
    allTasks.forEach(function(task){console.log(task)});

    // filteredTask variable will hold all the elements from  the allTasks array that is more than 10 characters
    let filteredTasks = [];
    allTasks.forEach(function(task){
        if (task.length > 10){
            filteredTasks.push(task);
        }
    });
    console.log(filteredTasks);

    // map()
    // iterates on each element and returns new afrray with different values depending on the result of the function's operation

    let numbers =[1,2,3,4,5];

    let numberMap = numbers.map(function(number){
        return number * number;
    })
    console.log(numberMap);

    // every()
    /* it will check if all elements in an array meet the given the condition - return true value if all elements meet the condition and false otherwise 
    syntax:
        let/const resultArry = arrayName.every(function(indivElement){
            return expression/condition
        })
    */

        let allValid = numbers.every(function(number){
            return (number<3);
        })
        console.log(allValid);

    // some()
    // check if at least one element in the array meets the given condition.

    // filter()
    // returns new array that contains elements which meets the given
    // returns an empty array if no elements were found

    let filterValid = numbers.filter(function(number){
        return (number%2 === 0);
    })
    console.log(filterValid);

    // includes()
        // checks if the argument passed can be found in the array
    
        let products = ['Mouse','Keyboard','Laptop','Monitor'];
    
        let productFound1 = products.includes('Mouse');
        console.log(productFound1);

        // reduce()
            // evaluates elements from left to right and returns/reduces the array into single value

        let reducedArray = numbers.reduce(function(x,y){
            console.log('Accumulator: ' + x);
            console.log('currentValue: ' +y);
            return x+y;
        })
        console.log(reducedArray);
