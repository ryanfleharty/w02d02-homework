const cards = [
    {
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
    }
  ]

const game = {
      cardsToPlay: [],
      rounds: [1, 2, 3],
}   

const player = {
    cardsDealt: [],
    cardInPlay: [],
    cardsPlayed: [], 
    score: 0,
}

const computer = {
    cardsDealt: [],
    cardInPlay: [],
    cardsPlayed: [],
    score: 0,
}


//Functions
const dealPlayer = () => {
    if (cards.length > 5){
        for (let i = 0; i < 3; i++){
            let randomCard = cards.splice(Math.floor(Math.random() * cards.length), 1);
            player.cardsDealt.push(randomCard);          
        }
    }

//3 random cards to computer
//if no cards remain or there are 5 or less, game ends
//take from game.cardsToPlay and store in player.playerCardsDealt 
//and computerCardsDealt)
}

// dealPlayer();
// console.log(player.cardsDealt);
// console.log(cards);

const dealComputer = () => {
    if (cards.length > 5){
        for (let i = 0; i < 3; i++){
            let randomCard = cards.splice(Math.floor(Math.random() * cards.length), 1);
            computer.cardsDealt.push(randomCard);          
        }
    }
}

// dealComputer();
// console.log(computer.cardsDealt);
// console.log(cards);

const pickCards = () => {
    //pick random card
    player.cardInPlay = player.cardsDealt[Math.floor(Math.random() * player.cardsDealt.length)];
    computer.cardInPlay = computer.cardsDealt[Math.floor(Math.random() * computer.cardsDealt.length)];
}

// pickCards();
// console.log(player.cardInPlay);
// console.log(computer.cardInPlay);


const compareCards = () => {
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

// compareCards();
// console.log(player); //check score and cardsPlayed
// console.log(computer);

const finalCompare = () => {
    if (player.score > computer.score) {
        console.log(`You won with ${player.score} points! Way to go!`);
    } else if (player.score < computer.score) {
        console.log(`Computer won with ${computer.score} points. Better luck next time.`);
    } else {
        console.log("It's a tie. You should play again.")
    }
}
// finalCompare();

const reset = () => {
    const playAgain = prompt("Want to play again? y/n");
    if (playAgain === "y"){
        playGame();
    } else {
        console.log("Thanks for playing.")
    }
}

const playGame = () => {
    for (let i = 0; i < 3; i++){
    dealPlayer();
    console.log(player.cardsDealt);

    dealComputer();
        console.log(computer.cardsDealt);
    pickCards()
        console.log(player); //check score and cardsPlayed
        console.log(computer);
    compareCards();
        console.log(player); //check score and cardsPlayed
        console.log(computer);
    }
    finalCompare();
    reset();
}

playGame();