console.log("Pokemon Game");

let fullDeck = [
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
	name: "Ash",
	cardsHeld: [],
	discard: []
}

const computer = {
	name: "CPU",
	cardsHeld: [],
	discard: []
}

const scoreboard = {
	playerScore: 0,
	playerTotalPoints: 0,
	playerRoundsWon: 0,
	computerScore: 0,
	computerTotalPoints: 0,
	computerRoundsWon: 0,
	tieGame: 0,
	totalTieGame: 0
}

const dealPlayerCards = () => {
	for(let i = 0; i < 3; i++){
	let randomCard = Math.floor(Math.random() * fullDeck.length);
	// console.log(randomCard);
	player.cardsHeld.push(fullDeck[randomCard]);
	fullDeck.splice(randomCard, 1);
}
	console.log(player.cardsHeld);
	console.log("You dealt Ash cards");
}

const dealComputerCards = () => {
	for(let i = 0; i < 3; i++){
	let randomCard = Math.floor(Math.random() * fullDeck.length);
	// console.log(randomCard);
	computer.cardsHeld.push(fullDeck[randomCard]);
	fullDeck.splice(randomCard, 1);
}
	console.log(computer.cardsHeld);
	console.log("You dealt CPU cards");
}

const compareCards = () => {
	for(let i = 0; i < player.cardsHeld.length; i++){
	if(computer.cardsHeld[i].damage > player.cardsHeld[i].damage){
		scoreboard.computerScore++ ;
	} else if(computer.cardsHeld[i].damage < player.cardsHeld[i].damage){
		scoreboard.playerScore++;
	} else {
		scoreboard.tieGame++;
	}
}
// console.log(scoreboard);
if(scoreboard.playerScore > scoreboard.computerScore){
	scoreboard.playerRoundsWon++;
} else if(scoreboard.playerScore < scoreboard.computerScore){
	scoreboard.computerRoundsWon++;
} else {
	scoreboard.tieGame++;
}

console.log(scoreboard);
}

const reset = () => {
	scoreboard.playerTotalPoints = scoreboard.playerTotalPoints + scoreboard.playerScore;
	scoreboard.playerScore = 0;
	scoreboard.computerTotalPoints = scoreboard.computerTotalPoints + scoreboard.computerScore;
	scoreboard.computerScore = 0;
	scoreboard.totalTieGame = scoreboard.tieGame;
	scoreboard.tieGame = 0;
	player.discard.push(player.cardsHeld);
	player.cardsHeld = [];
	computer.discard.push(computer.cardsHeld);
	computer.cardsHeld = [];
	console.log(scoreboard);
	console.log(player);
	console.log(computer);
}

const playGame = () => {
	for(let i = 0; i < fullDeck.length; i++){
		dealPlayerCards();
		dealComputerCards();
		compareCards();
		reset();
	}
	if(scoreboard.playerRoundsWon > scoreboard.computerRoundsWon){
		console.log("Ash Won!")
	} else if(scoreboard.playerRoundsWon < scoreboard.computerRoundsWon){
		console.log("CPU Won!");
	} else {
		console.log("DANG, it was a tie game!")
	}
}















// const playGame = () => {
// 	let playerHand = [];
// 	let compHand = [];

// 	const gamePoints = {
// 		player: 0,
// 		comp: 0
// 	};
// 	const roundPoints = {
// 		player: 0,
// 		comp: 0
// 	};
	
// 	for(let i = 0; i < 3; i++){
// 	playerHand.push(cards[Math.floor(Math.random() * cards.length)]); 
// }
// 	// cards 
// 	// cards = cards - playerHand;
// 	return console.log(playerHand);
// }
// playGame();

//indexOf with splice

//function 1 that will loop startRound
	//deal 3 cards to each
		//deal starting hands
			//function dealStartingHands(){
				//for(let i = 0; i <3; i++){
					//dealCard(computer);
					//dealCard(player);
				//}
				//function dealCard(player){

					//}
			//}
		//battle
		//clean up
	//battle 3 pokemon
		//compare damage
		//keep track of points in round
		//give the winer a "Win"

//function 2 that will loop WITH promps 
	//give player choice of which to choose from his/her/their three cards
	//computer randomly chooses from it's hand
	//compare value of the two cards chosen
	//winner = if damage a > damage b 
	//assign point in game points to winner
	//repeat twice 
		//when there no cards left to play, compare the game points
		//whoever has the most, give 1 point in round points 


// const dealCard = (player) => {
// 	let randomCard = cards(Math.floor(Math.random() * cards.length));
// }




		



