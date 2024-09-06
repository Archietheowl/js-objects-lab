const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { name: "potion", quantity: 4 },
        { name: "pokeball", quantity: 8 },
        { name: "rare candy", quantity: 99 },
    ],
}


//console.log(pokemon[58])


//console.log(game)


/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". 
How would you assign it?

Solve Exercise 3 here: */

game.difficulty = 'Easy'

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?

Solve Exercise 4 here:
*/

const starters = []

const getStarters = () => {
    for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].starter === true){
        starters.push(pokemon[i])    
    }
}}
const selectStarter = () =>{
    getStarters()
    randint = Math.floor(Math.random() * 4)
    return(starters[randint])
}
const addStartToParty = () => {
    game.party.push(selectStarter())
}

addStartToParty()
//console.log(game)


/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. 
Which array method will you use to add them?

Solve Exercise 5 here:
*/

function morePokemon(){
    count = 0
    for (let i = 0; i < pokemon.length; i++) {
        if (pokemon[i].hp > 120 && count <= 3){
            count ++
            game.party.push(pokemon[i])
        }
    }
}

morePokemon()
//console.log(game)

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the 
`completed` property.

Solve Exercise 6 here:
*/
function completedGyms(){
    for (let i = 0; i < game.gyms.length; i++) {
        if(game.gyms[i].difficulty <= 3){
            game.gyms[i].completed = true
        }
    }
}
completedGyms()
//console.log(game)

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon 
evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the 
Pokemon it evolved into. When working with an array of objects, the splice() array 
method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
const darwin = () => {
    let p = game.party[0].number
    if (p === 1 || p === 4 || p === 7 || p === 25) {
        game.party.splice(0, 1, pokemon[p])
    }
}

darwin()
//console.log(game)

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/
const roleCall = game.party.toSpliced(1, 0);    

console.log(roleCall)

// console.log(starters)
// console.log(Math.floor(Math.random() * 4))
//console.log(element));




//selectStarter()

//console.log(game)
//console.dir(pokemon, { maxArrayLength: null })
