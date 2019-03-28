console.log("Gotta catch 'em all!");


const fullDeck = [
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

let eggDeck = [];
let autoDeck = [];
const scoreboard = {
	eggScore: 0,
	autoScore: 0,
	eggRoundsWon: 0,
	autoRoundsWon: 0,
	eggPoints: 0,
	autoPoints: 0,
	eggDiscards: [],
	autoDiscards: []
}

const dealToEgg = () => {
	console.log('cards dealt to egg:');
	for (let i = 0; i < 3; i++) {
	let randCard = Math.floor(Math.random() * fullDeck.length);
	eggDeck.push(fullDeck[randCard]);
	fullDeck.splice(randCard, 1);
	}
	console.log(eggDeck);
}

const dealToAuto = () => {
	console.log('cards dealt to the computer:');
	for (let i = 0; i < 3; i++) {
	let randCard = Math.floor(Math.random() * fullDeck.length);
	autoDeck.push(fullDeck[randCard]);
	fullDeck.splice(randCard, 1);
	}
	console.log(autoDeck);
}



const compareCards = () => {
	for (let i = 0; i < 3; i++) {
		if (eggDeck[i].damage > autoDeck[i].damage) {
			scoreboard.eggScore++;
		} else if (eggDeck[i].damage < autoDeck[i].damage) {
			scoreboard.autoScore++;
			}
	}
	if (scoreboard.autoScore > scoreboard.eggScore) {
		scoreboard.autoRoundsWon++;
		console.log('point computer.');
	} else if (scoreboard.eggScore > scoreboard.autoScore) {
		scoreboard.eggRoundsWon++;
		console.log('point egg!');
	} else {
	console.log('round is a tie!');
	}
	alert(`Round over! Score is Eggbert: ${scoreboard.eggRoundsWon}, Autoplayer: ${scoreboard.autoRoundsWon} `)
}



const reset = () => {
	scoreboard.eggScore = 0;
	scoreboard.autoScore = 0;
	eggDeck = [];
	autoDeck = [];
	scoreboard.eggDiscards.push(eggDeck);
	scoreboard.autoDiscards.push(autoDeck);
}


const startGame = () => {
	for (let i = 0; i < 3; i++) {	
	dealToEgg();
	dealToAuto();
	compareCards();
	reset();
	}
	console.log(scoreboard);
	if (scoreboard.eggRoundsWon > scoreboard.autoRoundsWon) {
		console.log("Egg has triumphed!");
	} else if (scoreboard.autoRoundsWon > scoreboard.eggRoundsWon) {
		console.log("Egg is dead, long live Autoplayer!");
	} else {
		console.log('Tie game! How anti-climactic.');
	}
	console.log(`Final score is Eggbert: ${scoreboard.eggRoundsWon}, Autoplayer: ${scoreboard.autoRoundsWon} `)
}













