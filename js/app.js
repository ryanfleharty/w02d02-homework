// console.log('up and running');

const computer = {
    pokemon: [],
    wins: [],
    roundWins: [],
}

const player = {
    pokemon: [],
    wins: [],
    roundWins: [],
}
let pokemonAvailable = [

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
//WORKS
const dealStartingHands = () => {

  let humanCards = [];

  for(let card = 0; card < 3; card++){
    let randomCard = pokemonAvailable[Math.floor(Math.random() * pokemonAvailable.length)];
    humanCards.push(randomCard);
    }
    console.log(humanCards);
}

  let computerCards = [];

  for(let card = 0; card < 3; card++){
    let randomCard = pokemonAvailable[Math.floor(Math.random() * pokemonAvailable.length)];
    computerCards.push(randomCard);
    }
    console.log(computerCards);

dealStartingHands();



const pickSingleCard = () => {

let humanCardsSingleCard = [];

for(let card = 0; card < 1; card++){
  let humanCards = humanCards[Math.floor(Math.random() * humanCards.length)];
  humanCardsSingleCard.push(humanCards);

}
console.log(humanCardsSingleCard);


let computerCardsSingleCard = [];

for(let card = 0; card < 1; card++){
  let computerCards = computerCards[Math.floor(Math.random() * computerCards.length)];
  computerCardsSingleCard.push(computerCards);

}
console.log(computerCardsSingleCard);

pickSingleCard();
}
// humanCardsSingleCard.push(computerCards.length - 1)
// console.log(humanCardsSingleCard);

// }


// get one card from each user
// compare the cards
// decide who gets a point, what message to display
// remove that used card from the available cards
// repeat for every card remaining in the hand

//if humansinglecard.damage == computersinglecard.damage --> tie
//if humansinglecard.damage > computersinglecard.damage --> win --> human add 1 point--> repeat 
//if human singlecard.damage< computersinglecard.damaage--> lose --> computer add 1 point --> repeat
//if human

const compareChoices = () => {
    console.log(`Computer chose ${computer.choice} vs. the players ${player.choice}`)
    if(humanCardsSingleCard.damage === computerCardsSingleCard.damage){
        console.log("TIE MATCH");
    }else if(humanCardsSingleCard.damage > computerCardsSingleCard.damage){
            console.log("YOU WIN");
            player.wins++;
        }else if(humanCardsSingleCard.damage < computerCardsSingleCard.damage){
            console.log("YOU LOSE");
            computer.wins++;
        }
}

const roundWins = () => {
  let choice;
  if (roundWins === 3) {
      while(choice !== 'y' && choice !== 'n'){
     choice = prompt(`Would you like to keep playing? You have ${ship.hull} health remaining to fight ${aliens.length} enemies. Choose y or n`);
    }
    if(choice === 'n'){
        stillPlaying = false;
        youLose();
    }
    alert('you win the round');
  }
}


const startRound = () => {
dealStartingHands();
pickSingleCard();
compareChoices();

}



// function startRound = () => {



// // There are 18 Pokemon cards in the deck
// // Eggbert (the player) is dealt three random cards from the deck
// // The computer is dealt three random cards from the deck
// // Eggbert chooses a card and plays it! It has a damage of 10.
// // The computer randomly chooses a card and plays it! It has a damage of 8.
// // Eggbert wins!

// // keep a library of all the Pokemon cards that can be played (see the array in the "The Cards" section)
// // know what cards have been played
// // know how many cards are left to be played/dealt overall
// // track points for both the player and the computer Note: Points are determined by the following: If the player's card beats the computer's card, the player gets one point (and vice versa). If there is a tie, no one gets a point.
// // track rounds
// // track number of rounds won for both player and computer
// // automatically deal 3 cards from the library to the player and 3 cards to the computer each round
// // determine the winner of each play
// // stop once there are no cards left or not enough to deal 3 to each the player and computer






// }


// cardsPlayed = [],
// cardsremaining = 

































