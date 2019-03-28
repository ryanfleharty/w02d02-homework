console.log("app.js loaded");




//=======GLOBAL VARIABLES, OBJECTS, CLASSES GO BELOW=======


//here is the full deck:
deck = [
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

    playCard()
    {
        //chooses a random card and plays it
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


//=======FUNCTIONS GO BELOW=======


function customLog(s)
{
    //this function included for future flexibility
    console.log(s);
}

function htmlUpdateAll()
{
    //This function updates everything in the HTML to reflect
    //the latest of everything

    if (deckspoiled) {htmlUpdateDeck();}
    htmlUpdateHands();
    htmlUpdateScoreboard();
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
    htmlRemoveAllLi("playerhand");
    htmlRemoveAllLi("comphand");

    //Re-add all elements to the hands:

    for (let i = 0; i < player1.hand.length; i++)
    {
        htmlAddLi("playerhand", player1.hand[i].name);
    }

    for (let i = 0; i < computer.hand.length; i++)
    {
        htmlAddLi("comphand", computer.hand[i].name);
    }

}

function htmlUpdateScoreboard()
{
    document.getElementById("scoreboard").innerHTML=`${player1.name} score: ${player1.points}<br>${computer.name} score: ${computer.points}`;
}

function htmlAddLi(i, s)
{
    document.getElementById(i).appendChild(document.createElement('li')).appendChild(document.createTextNode(s));
}

function htmlRemoveAllLi(s)
{
    document.getElementById(s).innerHTML = "";
}

function spoilDeck()
{
    htmlUpdateDeck();
    document.getElementById("deckdiv").style.visibility = "visible";
    deckspoiled = true;
}




//=======MAIN CODE GOES BELOW=======


const player1 = new Player("Eggbert");
const computer = new Player("Computer");

player1.dealCards();
computer.dealCards();

htmlUpdateAll();



