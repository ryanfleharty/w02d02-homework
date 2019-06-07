console.log('running');

const cards = [{
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
console.log(cards);
// Establishing both player and computer
let drawn = [];
const player = {
    cardsDealt: [],
    cardInPlay: [],
    cardsPlayed: [],
    score: 0
}
const computer = {
    cardsDealt: [],
    cardInPlay: [],
    cardsPlayed: [],
    score: 0
}

// FUNCTIONS


// The plan is to use the draw from Deck function 3 times and make another modified version of it to draw from the drawn cards.
const drawFromDeckPlayer = () => {
    if (cards.length > 5) {
        for (let i = 0; i < 3; i++) {
            let randomCard = cards.splice(Math.floor(Math.random() * cards.length), 1);
            player.cardsDealt.push(randomCard);
        }
    }
}
const drawFromDeckComp = () => {
    if (cards.length > 5) {
        for (let i = 0; i < 3; i++) {
            let randomCard = cards.splice(Math.floor(Math.random() * cards.length), 1);
            computer.cardsDealt.push(randomCard);
        }
    }
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
        if (cards.length > 5){
    for (let i = 0; i < 3; i++) {
        let randomCard = cards.splice(Math.floor(Math.random() * cards.length), 1);
        computer.cardsDealt.push(randomCard);
        }
    }
}
const playerChooses = () => {
    player.cardInPlay = player.cardsDealt[Math.floor(Math.random() * player.cardsDealt.length)];
    computer.cardInPlay = computer.cardsDealt[Math.floor(Math.random() * computer.cardsDealt.length)];
}
// rest round function
const reset = () => {
    const playAgain = prompt("Want to play again? y/n");
    if (playAgain === "y") {
        playGame();
    } else {
        console.log("Thanks for playing.")
    }
}
// compare cards between player 1 and 2.
const battle = () => {
    const playerDamage = player.cardInPlay[0].damage;
    const computerDamage = computer.cardInPlay[0].damage;
    if (playerDamage > computerDamage) {
        console.log('You win!')
        player.score++;
    } else if (playerDamage < computerDamage) {
        console.log('You lose!');
        computer.score++;
    } else {
        console.log("It's a tie!");
    }
    player.cardsPlayed.push(player.cardInPlay);
    computer.cardsPlayed.push(computer.cardInPlay);
}
// add score to the winner



const scoreCompare = () => {
    if (player.score > computer.score) {
        console.log(`You won with ${player.score} points! Way to go!`);
    } else if (player.score < computer.score) {
        console.log(`Computer won with ${computer.score} points. Better luck next time.`);
    } else {
        console.log("It's a tie. You should play again.")
    }
}



const playGame = () => {
    for (let i = 0; i < 3; i++) {
        drawFromDeckPlayer();
        console.log(player.cardsDealt);

        drawFromDeckComp();
        console.log(computer.cardsDealt);
        playerChooses()
        console.log(player); 
        console.log(computer.cardsPlayed);
        battle();
        console.log(`player: ${player.score}`); //check score and cardsPlayed
        console.log(`computer: ${computer.score} `);
    }
}
    scoreCompare();
    reset();

const startGame = () => {
    computerChooses();
    playerChooses();
    battle();
    reset();
}
