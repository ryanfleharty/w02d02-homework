console.log('loaded'); 



const pokemonCards =
[
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


//let reset = true; 

const computer = {

	wins: 0
}

const player = {

	wins: 0
}


//function deals three cards to each player
// pulls at random from pokemonCards array
  //fills player/computerHand
  
 



let computerHand = []; 
console.log(computerHand);
let playerHand = [];
console.log(playerHand);

 dealCard = () =>{
    for(let i =0; i < 3; i++){  
    playerHand = Math.floor(Math.random()*pokemonCards.length);
    computerHand = Math.floor(Math.random()*pokemonCards.length);
 
    console.log(playerHand);
    console.log(computerHand);
  }
}
dealCard();
    dealCard.push(playerHand);
    dealCard.push(computerHand);

const cardsPlayed = 0

const startRound = () => {

  
}
startRound();

//const rounds = []; 

const compareCards = () =>{
  // WHO WON THE ROUND 
  //if playerCard damage > computerCard damage
  // player wins
  //if computerCard damage > playerCard damage
  //computerWins
//point goes to player with the highest damage delt 

}

// const winningRound = () =>{
  // after three
// }
















//let dealComputerCard = 0
  // const computerCard = Math.floor(Math.random() * pokemonCards.length);
 //       let dealPlayerCard = 0 
  // const playerCard = Math.floor(Math.random() * pokemonCards.length); // * 3
 //  }
 

    //deal to player 
    //deal to computer 
    // playerChooses();
    // // one of three cards delt 
    // computerChooses();
    // // one of three cards delt
    // compareCards(); 
    // // if playerCard > computerCard 
      //playerCard wins! next card is picked
    // else if comnputerCard > playerCard
      // computerCard wins! next cardc is picked

    // if computerCard === playerCard 
      // log "tie game"


// reset 

// computer object?
//player object?



// function start round
	// deal 3 cards to player    		- dealStartingHand()=    - function dealStartiingHand(){
	// deal 3 cards to computer			- battle() = 				for(let i=0; i < 3; i++){
	//battle 3 pokemon 					- cleanUp() =					dealCard(computer)
	// compare damage delt 												dealCard(player)
	// keep track of points														
	//															function dealCard(player){}




// function beginBattle1() = 
//  for(let i = 0; i < 3; i++){}
	// if computerCard1 > playerCard1				// battle each card 
	// return computerCard1							// 3 seperate battles 
	// record damage delat 							// or all three at once

	// else 
	// playerCard1 > computerCard1
	// return playerCard1
	// record damage dealt


// battle2 
















