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
  score: 0,
  rounds: 0
}

const computer = {
  score: 0,
  rounds: 0
}

let playerHand = [];

let computerHand = [];

const dealCards = () => {
  for(i = 0; i < 3; i++) {
     playerHand.unshift(cards.splice([Math.floor(Math.random() * cards.length)], 1));
  }
  for(x = 0; x < 3; x++) {
    computerHand.unshift(cards.splice([Math.floor(Math.random() * cards.length)], 1));
  }
}

let cardsPlayed = 0;

const playerCard = [];

const playerPlay = () => {
  playerCard.unshift(playerHand.splice([Math.floor(Math.random() * playerHand.length)], 1));
  console.log("You play " + playerCard[0][0][0].name + " for " + playerCard[0][0][0].damage + " damage.");
  cardsPlayed += 1;
}

const computerCard = [];

const computerPlay = () => {
  computerCard.unshift(computerHand.splice([Math.floor(Math.random() * computerHand.length)], 1));
  console.log("The computer plays " + computerCard[0][0][0].name + " for " + computerCard[0][0][0].damage + " damage.");
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

const playersBattle = () => {
    playerPlay();
    computerPlay();
    compareCards();
  }

  const playRound = () => {
    dealCards();
    console.log("In your hand, you have " + playerHand[0][0].name + ", " + playerHand[1][0].name + ", and " + playerHand[2][0].name + ".");
    console.log("In its hand, the computer has " + computerHand[0][0].name + ", " + computerHand[1][0].name + ", and " + computerHand[2][0].name + ".");
    for(i = 0; i < 3; i++) {
      playersBattle();
    }
    if(player.score > computer.score) {
      console.log("You win the round!");
      player.rounds += 1;
      player.score = 0;
      computer.score = 0;
    } else if(player.score < computer.score) {
      console.log("You lose the round.");
      computer.rounds += 1;
      player.score = 0;
      computer.score = 0;
    } else {
      console.log("The round is a tie!");
      player.score = 0;
      computer.score = 0;
    }
  }

  const playGame = () => {
    console.log("ROUND 1");
    playRound();
    console.log("ROUND 2");
    playRound();
    console.log("ROUND 3");
    playRound();
    console.log("The final score is " + player.rounds + " rounds to " + computer.rounds + " rounds.");
    if(player.rounds > computer.rounds) {
      console.log("Congratulations! You win!");
    } else if(player.rounds < computer.rounds) {
      console.log("Aww! You just lost to a computer!");
    } else {
      console.log("Well, would you look at that! A tie!");
    }
  }

  playGame();
