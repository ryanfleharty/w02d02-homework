console.log("app.js loaded");




//FUNCTIONS AND CLASSES GO HERE


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
    constructor()
    {
        this.hand = []; //Array of card objects
        this.points = 0;
        this.roundswon = 0;
    }

    playCard()
    {
        //chooses a random card and plays it
    }

    dealCards()
    {
        //gets three cards from the deck
    }
}


function htmlPopulateDeck()
{
    for (let i = 0; i < deck.length; i++)
    {
        htmlAddLi("deck", deck[i].name)
    }
}

function htmlUpdateScoreboard(s)
{
    document.getElementById("scoreboard").innerHTML=s
}

function htmlAddLi(i, s)
{
    document.getElementById(i).appendChild(document.createElement('li')).appendChild(document.createTextNode(s));
}



//=======MAIN CODE GOES HERE=======


htmlPopulateDeck();
htmlUpdateScoreboard("score goes here");
