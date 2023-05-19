function Pokemon(name, level){
    this.name = name;
    this.level = level;
    this.health = 2 * level;
    this.attack = level;

    // methods
    this.tackle = function(target){
        console.log(this.name, 'tackled', target.name);
        target.health = target.health - this.attack;
        console.log(target.name, "'s health is now reduced to", target.health);
        if (target.health <= 0){
            target.faint();
        }
    };
    this.faint = function(){
        console.log(this.name, 'has fainted.');
    };
};

let pikachu = new Pokemon("Pikachu", 12);
let geodude = new Pokemon("Geodude", 8);
let mewtwo = new Pokemon("Mewtwo", 100);

let trainer = {
    name: "Ash Kenchum",
    age: "10",
    pokemon: ['Pikachu','Charizard','Squirtle','Bulbasaur'],
    friends: {
        hoenn: ["May",'Max'],
        kanto: ['Brock','Misty']
    },
    talk: function(){
        console.log("Pikachu! I choose you!");
    }
}
console.log("Result of dot notaion:");
console.log(trainer.name);
console.log("Result of square bracket notation:")
console.log(trainer['pokemon']);
trainer.talk();

geodude.tackle(pikachu);
console.log(pikachu);
mewtwo.tackle(geodude);
console.log(geodude);