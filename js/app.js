//Pokemon
//HEY RYAN: I couldn't fix the array within an array within an array problem. So I just went along with it. I promise to fix it in the future. I just have to figure out what the hell is going on.

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

const player = {
  score: 0
}

const computer = {
  score: 0
}

const playerHand = [];

const computerHand = [];

const dealCards = () => {
 playerHand.unshift(cards.splice([Math.floor(Math.random() * cards.length)], 1));
 playerHand.unshift(cards.splice([Math.floor(Math.random() * cards.length)], 1));
 playerHand.unshift(cards.splice([Math.floor(Math.random() * cards.length)], 1));
 computerHand.unshift(cards.splice([Math.floor(Math.random() * cards.length)], 1));
 computerHand.unshift(cards.splice([Math.floor(Math.random() * cards.length)], 1));
 computerHand.unshift(cards.splice([Math.floor(Math.random() * cards.length)], 1));
}

let cardsPlayed = 0;

const playerCard = [];

const playerPlay = () => {
  playerCard.unshift(playerHand.splice([Math.floor(Math.random() * playerHand.length)], 1));
  console.log("You played " + playerCard[0][0][0].name + " for " + playerCard[0][0][0].damage + " damage.");
  cardsPlayed += 1;
}

const computerCard = [];

const computerPlay = () => {
  computerCard.unshift(computerHand.splice([Math.floor(Math.random() * computerHand.length)], 1));
  console.log("The computer played " + computerCard[0][0][0].name + " for " + computerCard[0][0][0].damage + " damage.");
  cardsPlayed += 1;
}

const rounds = [];

const compareCards = () => {
  if(playerCard[0][0][0].damage > computerCard[0][0][0].damage) {
    console.log("You get a point!");
    player.score += 1;
    console.log("The score is Player: " + player.score + ", Computer: " + computer.score + ".");
  } else if (computerCard[0][0][0].damage > playerCard[0][0][0].damage) {
    console.log("The computer gets a point!");
    computer.score += 1;
    console.log("The score is Player: " + player.score + ", Computer: " + computer.score + ".");
  } else {
    console.log("It's a tie!");
    console.log("The score is Player: " + player.score + ", Computer: " + computer.score + ".");
  }
}

const firstRound = () => {
  while(cardsPlayed < 6){
    dealCards();
    playerPlay();
    computerPlay();
    compareCards();
  } if(cardsPlayed === 6) {
    //remove elements from players hand arrays
    //start new round
  }
}

firstRound();

/**
if(cardsPlayed === 2)
//for empty function

const winRound =

const winGame = () => {
  //after three rounds, determine score and declare winner
  //If the rounds array >= 3, compare scores
  //Identify player with greatest score
  //Declare winner
  //end game
}
**/
