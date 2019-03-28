console.log('running');

const pokemon = [{
    name: "Bulbasaur",
    damage: 60
}, {
    name: "Caterpie",
    damage: 40
}, {
    name: "Charmander",
    damage: 60
}, {
    name: "Clefairy",
    damage: 50
}, {
    name: "Jigglypuff",
    damage: 60
}, {
    name: "Mankey",
    damage: 30
}, {
    name: "Meowth",
    damage: 60
}, {
    name: "Nidoran - female",
    damage: 60
}, {
    name: "Nidoran - male",
    damage: 50
}, {
    name: "Oddish",
    damage: 40
}, {
    name: "Pidgey",
    damage: 50
}, {
    name: "Pikachu",
    damage: 50
}, {
    name: "Poliwag",
    damage: 50
}, {
    name: "Psyduck",
    damage: 60
}, {
    name: "Rattata",
    damage: 30
}, {
    name: "Squirtle",
    damage: 60
}, {
    name: "Vulpix",
    damage: 50
}, {
    name: "Weedle",
    damage: 40
}];
console.log(pokemon);
// Establishing both player and computer
let drawn = [];
const player = {
    hand: [],
    pokemon: '',
    score: 0
}
const computer = {
    hand: [],
    pokemon: '',
    score: 0
}

// FUNCTIONS


// The plan is to use the draw from Deck function 3 times and make another modified version of it to draw from the drawn cards.
const drawFromDeckPlayer = () => {
    // for (let i = a.length - 1; i > 0; i--) {
        // I'm having trouble drawing  the objects from the array. 
        let drawnCards = pokemon[Math.floor(Math.random() * pokemon.length)]; // Draws a random card from the pokemon Array
        let deck = drawnCards
        
    player.hand.push(deck);
}
const drawFromDeckComp = () => {
    // for (let i = a.length - 1; i > 0; i--) {

    let drawnCards = pokemon[Math.floor(Math.random() * pokemon.length)]; // Draws a random card from the pokemon Array
    let deck = drawnCards

    Computer.hand.push(deck);
}
const drawFromHandPlayer = () => {
    let drawnCards = player.hand[Math.floor(Math.random() * player.hand.length)]; // Draws a random card from the pokemon Array
    let deck = drawnCards;

    console.log(deck)

}
const drawFromHandComp = () => {
    let drawnCards = player.hand[Math.floor(Math.random() * player.hand.length)]; // Draws a random card from the pokemon Array
    let deck = drawnCards;

    console.log(deck)

}

// Pick 3 pokemon cards function
const computerChooses = () => {
//     const randomIndex = Math.floor(Math.random() * pokemon.length);
//     const computerPokemon = pokemon[randomIndex];
//     computer.pokemon.push(computerPokemon);
let drawn = computer.pokemon[Math.floor(Math.random() * pokemon.length)];
    
   }
// console.log(computer.Pokemon);
// }
const playerChooses = () => {
    //     const randomIndex = Math.floor(Math.random() * pokemon.length);
    //     const playerPokemon = pokemon[randomIndex];
    //     player.pokemon.push(playerPokemon);
let drawn = player.pokemon[Math.floor(Math.random() * pokemon.length)];
    player.pokemon = drawn;
// player.choice = selected;
}

console.log(drawn);

// rest round function
const reset = () => {
        const tryAgain = prompt("play again? y/n");
        if (tryAgain === "y") {
            startRound();
        }
    }
// compare cards between player 1 and 2.
const battle = () => {
    if (player.pokemon.damage > computer.pokemon.damage) {
        console.log(`${computer.pokemon.name} has fainted! You Win!`);
        player.score++;
    } else if (player.pokemon.damage < computer.pokemon.damage) {
        console.log(`${player.pokemon.name} has fainted! You Lose!`);
        computer.score++;
    }
}


// add score to the winner



const startGame = () => {
    computerChooses();
    playerChooses();
    battle();
    reset();
}
