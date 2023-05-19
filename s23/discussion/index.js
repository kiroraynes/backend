// Creating objects using constructor notation

function Laptop(a, b){
    this.name = a;
    this.mf = b;
}

let laptop1 = new Laptop("Lenovo", "Lenovo Group Limited");
let laptop2 = new Laptop("Macbook", "Apple");

// Creating empty object
let computer = {};
let myComputer = new Object();

// [Section] Accessing Object Properties

// using the dot notation
console.log(laptop1.name);

// using square bracket notation
console.log('Result from square bracket:', laptop1['name']);

// accessing array objects

/* -Accessing array elements can also be done using square brackets
- accessing object properties using the square bracket notation and array indices can cause confusion
- by using dot notation, this easily helps us differentiate accessing elements from arrays and properties from objects.
-Object properties have names that make it easier to associate pieces of informaiton
*/
let array =[laptop1, laptop2]
console.log(array[0]['name']);
console.log(array[0].name);

// [Section] INitializing/adding.deleting.reassigning OBject properties
/*
 Like any other variable in JS, objects may have their properties initializied/added after the object was created/declared 
 THis is useful for times when an object's properties are undetermined at the time of creating them
*/

let car = {};
//INitializing/ adding object properties using dot naotation
car.name = "Honda Civic";
console.log("Adding prop using dot:" , car);

// Initializing/adding object prop using sqyare
/* While using the square bracket will allow access to space when assgining property names to make it easier to read, this alsmo makes it so that object properties can only be accessed using the square bracket notation
thi also makes names or object prop to not follow commonly used naming conventions for them
*/
car['manufacture date'] = 2019;
console.log(car);

console.log('deleting prop');
delete car['manufacture date'];
console.log(car);

console.log('reassigning');
car.name = "Dodge Charger R/T";
console.log(car);

// [Section] OBject methods
/*
    - also functions and one of the key differences they have is that methods are functions related to a specific object
    - useful for creating object specific functions which are used to perform tasks on them
*/

let person = {
    name: 'John',
    talk: function(){
        console.log("Hello my name is " + this.name)
    }
}
console.log(person);
console.log("object methods: ");
person.talk();

// adding methods to objects
person.walk = function(){
    console.log(this.name, 'walked 25 steps forward');
}

person.walk();

// methods are useful for creating reusable functions that perform tasks related to objects

let friend = {
    firstName: 'Joe',
    lastName: 'Smith',
    address: {
        city: "Austin",
        state:'Texas'
    },
    emails: ['joe@gmail.com','joesmith@mail.xyz'],
    introduce:function(){
        console.log('Hello my name is', this.firstName,this.lastName)
    }
};

friend.introduce();

// [Seciton] Real world application of objects

let myPokemon = {
    name: "Pikachu",
    level: 3,
    health: 100,
    attack: 50,
    tackle: function(){
        console.log("This pokemon tackled targetPokemon");
        console.log("targetPokemon's health is now reduced to _targetPokemonhealth_");
    },
    faint: function(){
        console.log("Pokemon fainted");    
    }
}

console.log(myPokemon);

function Pokemon(name, level){
    this.name = name;
    this.level = level;
    this.health = 2 * level;
    this.attack = level;

    // methods
    this.tackle = function(target){
        console.log(this.name, 'tackled', target.name);
        console.log("target pokemon's health is now reduced to _targetPokemonhealth_");
    };
    this.faint = function(){
        console.log(this.name, 'fainted');
    };
};

let pikachu = new Pokemon("Pikachu", 16);
let rattata = new Pokemon("Rattata", 8);

pikachu.tackle(rattata);