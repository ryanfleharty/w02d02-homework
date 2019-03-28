console.log('Up and running!');

let pokemonLib = [
  {
    name: 'Bulbasaur',
    damage: 60,
    cardImage: 'images/bulbasaur.png',
  }, {
    name: 'Caterpie',
    damage: 40,
    cardImage: 'images/caterpie.png',
  }, {
    name: 'Charmander',
    damage: 60,
    cardImage: 'images/charmander.png',
  }, {
    name: 'Clefairy',
    damage: 50,
    cardImage: 'images/clefairy.png',
  }, {
    name: 'Jigglypuff',
    damage: 60,
    cardImage: 'images/jigglypuff.png',
  }, {
    name: 'Mankey',
    damage: 30,
    cardImage: 'images/mankey.png',
  }, {
    name: 'Meowth',
    damage: 60,
    cardImage: 'images/meowth.png',
  }, {
    name: 'Nidoran - female',
    damage: 60,
    cardImage: 'images/NidoranFemale.png',
  }, {
    name: 'Nidoran - male',
    damage: 50,
    cardImage: 'images/NidoranMale.png',
  }, {
    name: 'Oddish',
    damage: 40,
    cardImage: 'images/oddish.png',
  }, {
    name: 'Pidgey',
    damage: 50,
    cardImage: 'images/pidgey.png',
  }, {
    name: 'Pikachu',
    damage: 50,
    cardImage: 'images/pikachu.png',
  }, {
    name: 'Poliwag',
    damage: 50,
    cardImage: 'images/poliwag.png',
  }, {
    name: 'Psyduck',
    damage: 60,
    cardImage: 'images/psyduck.png',
  }, {
    name: 'Rattata',
    damage: 30,
    cardImage: 'images/rattata.png',
  }, {
    name: 'Squirtle',
    damage: 60,
    cardImage: 'images/squirtle.png',
  }, {
    name: 'Vulpix',
    damage: 50,
    cardImage: 'images/vulpix.png',
  }, {
    name: 'Weedle',
    damage: 40,
    cardImage: 'images/weedle.png',
  },
];

// Sleep algorithm from stack exchange utilizing system clock
const sleep = (milliseconds) => {
  const start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
};

// forceRedraw from Stack Overflow
// https://stackoverflow.com/questions/8840580/force-dom-redraw-refresh-on-chrome-mac
const forceRedraw = (element) => {
  const disp = element.style.display;
  element.style.display = 'none';
  const trick = element.offsetHeight;
  element.style.display = disp;
};

/* Fisher-Yates (or Knuth) Shuffle algorithm
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
const shuffle = function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

// Objects
const game = {
  rounds: 3,
  currRound: 1,
  cardsPlayed: [],
};

const player = {
  score: 0,
  roundsWon: 0,
  cards: [],
};

const computer = {
  score: 0,
  roundsWon: 0,
  cards: [],
};

// DOM constants
const commsBar = document.getElementById('comms-bar');
const playerHeading = document.getElementById('player-heading');
const computerHeading = document.getElementById('computer-heading');
const playNext = document.getElementById('play-next');

function checkForWinner(playerCard, computerCard) {
  let message;
  if ((pokemonLib.length === 6 || pokemonLib.length === 12) && game.cardsPlayed.length === 6) {
    playNext.innerHTML = 'Click here to PLAY NEXT ROUND';
    playNext.style.opacity = 1.0;
    playNext.style.pointerEvents = 'auto';
    setTimeout(forceRedraw(playNext), 500);
    if (player.score > computer.score) {
      message = 'Congratulations, you have won the round. Please click the below "PLAY NEXT ROUND" button to proceed.';
      commsBar.style.color = 'green';
      playerHeading.innerHTML = `Player's Cards | Rounds Won: ${++player.roundsWon} | Score: ${++player.score}`;
      console.log(`Player's Cards | Rounds Won: ${player.roundsWon} | Score: ${player.score}`);
    } else if (computer.score > player.score) {
      message = 'Unfortunately, the Computer has won this round, Please click the below "PLAY NEXT ROUND" button to proceed.';
      commsBar.style.color = 'red';
      computerHeading.innerHTML = `Computer's Cards | Rounds Won: ${++computer.roundsWon} | Score: ${++computer.score}`;
      console.log(`Computer's Cards | Rounds Won: ${computer.roundsWon} | Score: ${computer.score}`);
    } else { /*(computer.score == player.score)*/
      message = 'Unfortunately, the round ended in a tie and will not be counted. Please click the below "PLAY NEXT ROUND" button to proceed.';
      commsBar.style.color = 'black';
      console.log(`Computer's Cards | Rounds Won: ${computer.roundsWon} | Score: ${computer.score}`);
    }
  } else if (pokemonLib.length === 0 && game.cardsPlayed.length === 6) {
    playNext.innerHTML = 'Please Refresh to Play Again';
    playNext.style.opacity = 0.4;
    playNext.style.pointerEvents = 'none';
    setTimeout(forceRedraw(playNext), 500);
    if (player.roundsWon > computer.roundsWon || (player.roundsWon === computer.roundsWon && player.score > computer.score)) {
      message = 'Congratulations, you have won the final round AND the game! Please refresh the browser to play again.';
      commsBar.style.color = 'green';
      playerHeading.innerHTML = `Player's Cards | Rounds Won: ${++player.roundsWon} | Score: ${++player.score}`;
      console.log(`Player's Cards | Rounds Won: ${player.roundsWon} | Score: ${player.score}`);
    } else if (computer.roundsWon > player.roundsWon || (player.roundsWon === computer.roundsWon && computer.score > player.score)) {
      message = 'Unfortunately, the Computer has won the final round AND the game. Please refresh the browser to play again.';
      commsBar.style.color = 'red';
      computerHeading.innerHTML = `Computer's Cards | Rounds Won: ${++computer.roundsWon} | Score: ${++computer.score}`;
      console.log(`Computer's Cards | Rounds Won: ${computer.roundsWon} | Score: ${computer.score}`);
    } else { /*(computer.score == player.score)*/
      message = 'Unfortunately, the game has ended in a tie with one Round Won a piece. Please refresh the browser to play again.';
      commsBar.style.color = 'black';
      computerHeading.innerHTML = `Computer's Cards | Rounds Won: ${computer.roundsWon} | Score: ${computer.score}`;
      console.log(`Computer's Cards | Rounds Won: ${computer.roundsWon} | Score: ${computer.score}`);
    }
  } else {
    playNext.innerHTML = 'Click a Player Card below to Play';
    playNext.style.opacity = 0.4;
    playNext.style.pointerEvents = 'none';
    setTimeout(forceRedraw(playNext), 500);
    if (playerCard.damage > computerCard.damage) {
      message = `You attacked with "${playerCard.name}" for ${playerCard.damage}, which was stronger than the computer's "${computerCard.name}" attack of ${computerCard.damage}, so you get a point!`;
      commsBar.style.color = 'green';
      playerHeading.innerHTML = `Player's Cards | Rounds Won: ${player.roundsWon} | Score: ${++player.score}`;
      console.log(`Player's Cards | Rounds Won: ${player.roundsWon} | Score: ${player.score}`);
    } else if (computerCard.damage > playerCard.damage) {
      message = `The Computer attacked with "${computerCard.name}" for ${computerCard.damage}, which was stronger than your "${playerCard.name}" attack of ${playerCard.damage}, so they get a point! \n`;
      commsBar.style.color = 'red';
      computerHeading.innerHTML = `Computer's Cards | Rounds Won: ${computer.roundsWon} | Score: ${++computer.score}`;
      console.log(`Computer's Cards | Rounds Won: ${computer.roundsWon} | Score: ${computer.score}`);
    } else { // (playerCard.damage === computerCard.damage) {
      message = 'The damage value of the cards in play were equal so this battle was a tie! No one gets a point.';
      commsBar.style.color = 'black';
    }
  }
  commsBar.innerHTML = message;
  console.log(message);
  setTimeout(forceRedraw(commsBar), 500);
}

function flipComputerCard() {
  let cardId = Math.floor(Math.random() * computer.cards.length);
  let computerCard = document.querySelectorAll('img[computerdata-id]')[cardId];

  while (computerCard.style.backgroundColor === 'red') {
    cardId = Math.floor(Math.random() * computer.cards.length);
    computerCard = document.querySelectorAll('img[computerdata-id]')[cardId];
  }

  game.cardsPlayed.push(computer.cards[cardId]);
  
  console.log(`Computer chose ${computer.cards[cardId].name}!`);
  console.log(computer.cards[cardId].cardImage);
  console.log(computer.cards[cardId].damage);

  computerCard.setAttribute('src', computer.cards[cardId].cardImage);
  computerCard.style.backgroundColor = 'red';
  computerCard.style.opacity = 0.4;

  if (game.cardsPlayed.length === 2) {
    computerCard.onload = function check() {
      setTimeout(checkForWinner(game.cardsPlayed[0], game.cardsPlayed[1]));
    };
  }
  else if (game.cardsPlayed.length === 4) {
    computerCard.onload = function check() {
      setTimeout(checkForWinner(game.cardsPlayed[2], game.cardsPlayed[3]));
    };
  }
  else if (game.cardsPlayed.length === 6) {
    computerCard.onload = function check() {
      setTimeout(checkForWinner(game.cardsPlayed[4], game.cardsPlayed[5]));
    };
  }
}

function choosePlayerCard() {
  const cardId = this.getAttribute('playerdata-id');
  game.cardsPlayed.push(player.cards[cardId]);
  alert(`Round: ${game.currRound}, Battle: ${Math.ceil(game.cardsPlayed.length / 2)}, Fight!`);
  console.log(`Round: ${game.currRound}, Battle: ${game.cardsPlayed.length}, Fight!`);
  console.log(`Player chose ${player.cards[cardId].name}!`);
  console.log(player.cards[cardId].cardImage);
  console.log(player.cards[cardId].damage);

  this.setAttribute('src', player.cards[cardId].cardImage);
  this.style.backgroundColor = 'green';
  sleep(1000);
  this.style.opacity = 0.4;
  this.style.pointerEvents = 'none';

  if (game.cardsPlayed.length === 1) {
    this.onload = function check() {
      setTimeout(flipComputerCard());
    };
  } else if (game.cardsPlayed.length === 3) {
    this.onload = function check() {
      setTimeout(flipComputerCard());
    };
  } else if (game.cardsPlayed.length === 5) {
    this.onload = function check() {
      setTimeout(flipComputerCard());
    };
  }
}

// create the initial game board for Player Cards and Computer Cards
const createBoard = (numCards) => {
  // shuffle the pokemon card library using Fisher-Yates
  pokemonLib = shuffle(pokemonLib);

  // populate the player.cards and computer.cards arrays with cards from shuffled deck
  player.cards = [];
  computer.cards = [];
  for (let i = 0; i < numCards; i++) {
    player.cards[i] = pokemonLib.shift();
    computer.cards[i] = pokemonLib.shift();
  }

  let cardElement; // generic cardElement variable

  // build player cards in DOM
  for (let i = 0; i < numCards; i++) {
    cardElement = document.createElement('img');
    cardElement.setAttribute('src', player.cards[i].cardImage);
    cardElement.setAttribute('playerdata-id', i);
    cardElement.addEventListener('click', choosePlayerCard);
    document.getElementById('player-board').appendChild(cardElement);

    cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/pokeback.png');
    cardElement.setAttribute('computerdata-id', i);
    // cardElement.addEventListener('click', flipComputerCard);
    document.getElementById('computer-board').appendChild(cardElement);
  }
};

const playNextRound = () => {
  commsBar.InnerHTML = 'Good Luck!';
  playNext.style.pointerEvents = 'none';
  playNext.style.opacity = 0.4;
  playNext.InnerHTML = 'Click a Player Card below to Play';
  setTimeout(forceRedraw(commsBar), 1000);

  game.cardsPlayed = [];
  player.score = 0;
  computer.score = 0;

  let oldBoard = document.getElementById('player-board');
  while (oldBoard.lastChild) {
    oldBoard.removeChild(oldBoard.lastChild);
  }

  oldBoard = document.getElementById('computer-board');
  while (oldBoard.lastChild) {
    oldBoard.removeChild(oldBoard.lastChild);
  }

  playerHeading.innerHTML = `Player's Cards | Rounds Won: ${player.roundsWon} | Score: ${player.score}`;
  computerHeading.innerHTML = `Computer's Cards | Rounds Won: ${computer.roundsWon} | Score: ${computer.score}`;

  createBoard(3);

  game.currRound++;
};

// instantiate the initial board with Player cards and Computer cards.
createBoard(3);

// add the play next round button click event listener.
playNext.addEventListener('click', playNextRound);
// disable the clickable Play Next Round button for initial state.
playNext.style.pointerEvents = 'none';
