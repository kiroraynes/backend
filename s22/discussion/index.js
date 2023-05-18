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

    // spine()
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

    // join()
    let users = ['John','Jane','Joe', 'Robert'];

    console.log(users.join());
    console.log(users.join(''));

    // [Section] Iteration methods
    

