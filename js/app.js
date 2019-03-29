console.log("app.js loaded");




//=======GLOBAL VARIABLES, OBJECTS, CLASSES GO BELOW=======


//here is the full deck:
const deck = [
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


const table = []; //This will be an array of cardOnTable objects

class cardOnTable
{
	constructor(c, w)
	{
		this.card = c;
		this.who = w;
	}
}

class Player
{
	constructor(n)
	{
		this.name = n;
		this.hand = []; //Array of card objects
		this.points = 0;
		this.roundswon = 0;
		customLog(`Added a player: ${this.name}`);
	}

	reset()
	{
		this.hand = [];
		this.points = 0;
		//this.roundswon = 0;
		customLog(`Player ${this.name} was reset`);
	}

	playCard(c)
	{
		//customLog(c);
		//if c = -1, chooses a random card and plays it
		let rn = c;
		if (c < 0)
		{
			//customLog("found c < 0");
			//customLog(this);
			rn = Math.floor(Math.random() * this.hand.length);
			//customLog("done with c < 0");
		}

		//customLog(`rn = ${rn}`);
		const newCard = new cardOnTable(this.hand[rn], this.name);
		//Add card to table:
		table.push(newCard);
		//customLog(`${this.name} played ${this.hand[rn].name}`);
		//Remove card from hand:
		this.hand.splice(rn, 1);

		htmlUpdateAll();
	}

	dealCards()
	{
		//gets three cards from the deck
		//Adds them to this.hand array
		//Removes them from the deck array

		customLog(`Dealing cards for ${this.name}`);

		let randi = 0; //Random "i" index

		//do this three (3) times
		for (let i = 0; i <= 2; i++)
		{
			//Pick random card from array
			randi = Math.floor(Math.random() * deck.length);
			customLog(`Picked random card #${i} from deck: ${deck[randi].name}`);
			//Add to this.hand:
			this.hand.push(deck[randi]);
			//Remove from deck:
			deck.splice(randi, 1);
			customLog(`Removed it from deck and placed it in this.hand`);
		}
		customLog(`Full hand has now been dealt for player ${this.name}. Here are the contents of it:`);
		for (let i = 0; i < this.hand.length; i++)
		{
			customLog(`Card #${i}: ${this.hand[i].name}`);
		}
		//htmlUpdateAll();
	}
}

//debug flags:
let deckspoiled = false;
let debugmsgflag = false;


//=======FUNCTIONS GO BELOW=======


function customLog(s)
{
	//this function included for future flexibility
	console.log(s);
	if (debugmsgflag) {htmlAddDebugLine(s);}
}

function htmlUpdateAll()
{
	//This function updates everything in the HTML to reflect
	//the latest of everything

	if (deckspoiled) {htmlUpdateDeck();}
	htmlUpdateHands();
	htmlUpdateScoreboard();
	htmlUpdateTable();
}

function htmlUpdateDeck()
{
	//Remove all cards from the deck list:
	htmlRemoveAllLi("decklist");
	//Re-add all of the cards:
	for (let i = 0; i < deck.length; i++)
	{
		htmlAddLi("decklist", deck[i].name)
	}
}

function htmlUpdateHands()
{
	//Remove all elements from the hand lists:
	document.getElementById("playername").innerHTML = `Cards in ${player1.name}'s hand:`
	htmlRemoveAllLi("playerhand");
	htmlRemoveAllLi("comphand");

	//Re-add all elements to the hands:

	for (let i = 0; i < player1.hand.length; i++)
	{
		htmlAddLi("playerhand", `Card ${i + 1}: ${player1.hand[i].name} (damage: ${player1.hand[i].damage})`);
	}

	for (let i = 0; i < computer.hand.length; i++)
	{
		htmlAddLi("comphand", `Card ${i + 1}: ${computer.hand[i].name} (damage: ${computer.hand[i].damage})`);
	}

}

function htmlUpdateTable()
{
	//Remove all cards from table list:
	htmlRemoveAllLi("table");
	//Re-add all updated cards to table list:
	for (let i = 0; i < table.length; i++)
	{
		htmlAddLi("table", `${table[i].card.name} - damage ${table[i].card.damage} - (played by ${table[i].who})`);
	}
}

function htmlUpdateScoreboard()
{
	document.getElementById("scoreboard").innerHTML=
	`${player1.name} score: ${player1.points}<br>${computer.name} score: ${computer.points}<br>
	${player1.name} rounds won: ${player1.roundswon}<br>${computer.name} rounds won: ${computer.roundswon}`;
}

function htmlAddLi(i, s)
{
	document.getElementById(i).appendChild(document.createElement('li')).appendChild(document.createTextNode(s));
}

function htmlRemoveAllLi(s)
{
	document.getElementById(s).innerHTML = "";
}

function htmlAddDebugLine(s)
{
	document.getElementById("debugconsole").innerHTML = document.getElementById("debugconsole").innerHTML + "<br>" + s;
}

function spoilDeck()
{
	htmlUpdateDeck();
	document.getElementById("deckdiv").style.visibility = "visible";
	deckspoiled = true;
}

function turnDebugMsgOn()
{
	document.getElementById("debugmsgdiv").style.visibility = "visible";
	debugmsgflag = true;
}

function setUpGame()
{
	if (deck.length == 0 && player1.hand.length == 0)
	{
		newMainMsg("Deck is empty! Game is finished");
	}
	else if (player1.hand.length != 0)
	{
		newMainMsg("Already playing a round!");
	}
	else
	{
		newMainMsg("Play a card");
		player1.reset();
		computer.reset();
		player1.dealCards();
		computer.dealCards();
	}

	htmlUpdateAll();
}

function cardPlay(c)
{
	if (player1.hand.length == 0)
	{
		newMainMsg("Hand is empty! Press start to begin new round");
	}
	else if (c > player1.hand.length - 1)
	{
		newMainMsg("Card does not exist in hand!");
	}
	else
	{
		resetTable();
		//Player plays card, computer also plays card
		player1.playCard(c);
		computer.playCard(-1);

		if (table[1].card.damage < table[0].card.damage)
		{
			newMainMsg(`${table[1].who} played ${table[1].card.name}: you win`);
			player1.points++;
		}
		else if (table[1].card.damage > table[0].card.damage)
		{
			newMainMsg(`${table[1].who} played ${table[1].card.name}: you lose`);
			computer.points++;
		}
		else //tie
		{
			newMainMsg(`TIE`);
		}
		

		if (player1.hand.length == 0) //player has played all cards in hand
		{
			if (player1.points > computer.points)
			{
				player1.roundswon++;
				newMainMsg(`You won this round!`);
			}
			else if (player1.points < computer.points)
			{
				computer.roundswon++;
				newMainMsg(`You lost this round!`);
			}
			else
			{
				newMainMsg(`This round was a tie!`);
			}
			//player1.points = 0;
			//computer.points = 0;
		}
	}

	htmlUpdateAll();
}

function newMainMsg(s)
{
	document.getElementById("mainmsg").innerHTML = s;
	customLog(s);
}

function resetTable()
{
	//resets the round
	
	//remove all cards from the table:
	let temp = table.length;
	for (let i = 0; i < temp; i++)
	{
		table.pop();
	}

	htmlUpdateAll();

}

//=======MAIN CODE GOES BELOW=======

const player1 = new Player(prompt("Please enter a name for Player 1!"));
const computer = new Player("Computer");


htmlUpdateAll();


