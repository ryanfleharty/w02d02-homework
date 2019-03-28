//ask for player's name with alert box 
//loop through game.rounds (while loop through game.rounds)
//player chooses card 
    //by writing index in console? NOPE make it random
    //(move to player.cardInPlay)
//random card selected for computer 
    //(move to computer.cardsInPlay)
//compare damage 
//(if player.cardInPlay.damage > computer.cardInPlay.damage)
    //game.playerPoints + 1
    //ui.roundWinner[i].winner = player
//(else if player.cardInPlay.damage < computer.cardInPlay.damage)
    //game.computerPoints +1
    //ui.roundWinner[i].winner = computer
//(else its a tie)
    //nothing happens
//round reset 
    //print game.playerPoints and game.computerPoints
    //move player.cardInPlay to player.cardsPlayed
    //move computer.cardInPlay to computer.cardsPlayed
    //empty ui.cardsInPlay - replace with new cards
//once all rounds are played (loop is over)
//compare game.playerPoints versus game.computerPoints - game.checkWinner();
    //(if game.playerPoints > game.computerPoints)
    //alert "Player.name has won."
    //(if game.playerPoints < game.computerPoints)
    //alert "Computer has won."

//ryans advice
    //dealStartHands() - battle() - cleanUp()


//////////
// The game should be able to:
// 1. keep a library of all the Pokemon cards that can be played (see 
//the array in the "The Cards" section)
// 2. know what cards have been played
// 3. know how many cards are left to be played/dealt overall
// 4. track points for both the player and the computer Note: Points are 
//determined by the following: If the player's card beats the computer's 
//card, the player gets one point (and vice versa). If there is a tie, 
//no one gets a point.
// 5. track rounds
// 6. track number of rounds won for both player and computer
// 7. automatically deal 3 cards from the library to the player and 3 
//cards to the computer each round
// 8. determine the winner of each play
// 9. stop once there are no cards left or not enough to deal 3 to each 
//the player and computer

// The player should be able to:
//1. see their stats: their points and how many rounds they've won.
//2. see what cards they have been dealt/see what cards are left in 
//their hand
//3. pick a card from the hand that has been dealt to them (thereby 
//playing this card agaist the computer's card). The round ends once 
//this has happened 3 times. //part of game play code
//4. receive new cards given to them by the game each round.
//5. see the cards that they have played in the past.

// The user should see the following in the console:
// the scoreboard after each round
// the cards in the player's hand
// the cards in the computer's hand
// the cards that are in play
// the winner of each round (or if there was a tie)
// the winner of the game when the game is over
// the final score when the game is over




// Example Play
// There are 18 Pokemon cards in the deck
// Eggbert (the player) is dealt three random cards from the deck
// The computer is dealt three random cards from the deck
// Eggbert chooses a card and plays it! It has a damage of 10.
// The computer randomly chooses a card and plays it! It has a damage of 8.
// Eggbert wins!
// The score is displayed:

// Score: Eggbert: 1, Computer: 0
// Rounds Won: Eggbert: 0, Computer: 0
// They do this again two more times. The round ends.

// The score is displayed. The rounds won are displayed.

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


  const game = {
      cardsToPlay: [],
    //   cardsPlayed: [],
    //   cardsLeft: "",
      playerPoints: "",
      computerPoints: "",
      rounds: [1, 2, 3],
    //   roundWinner: [{round: 1, winner: "",}, {round: 2, winner: "",}, {round: 3, winner: "",}],
      deal() {
          //deal 3 random cards to player
          //3 random cards to computer
          //if no cards remain or there are 5 or less, game ends

    //game.deal gives 3 random cards to player and computer - game.deal()
    //use for loop loop through 3 times
    //take from game.cardsToPlay and store in player.playerCardsDealt 
    //and computerCardsDealt)
          console.log('something')
        },
      checkWinner() {
          //check winner and alert
          console.log('something');
      },
      reset() {
        //reset game
        //(move player.cardInPlay to player.cardsPlayed)
        //move computer.cardInPlay to computer.cardsPlayed
        //empty ui.cardsInPlay - replace with new cards
      }
  }

  
const player = {
    name: "",
    //stats her so player can always see them (print player) unnecessary b/c it's in ui?
    //stats: {Points: game.playerPoints, roundsWon: "", roundsLost: "",},//push round winner if == player}
    cardsDealt: [], //first 3 from new deal
    cardInPlay: [],
    cardsPlayed: [], //cards played
    // cardsLeft: "", //number of cards left in hand
}

const computer = {
    //stats: {points: game.computerPoints, roundsWon: "", roundsLost: "",},//push round winner if == computer}
    cardsDealt: [], //first 3 from new deal
    cardInPlay: [],
    cardsPlayed: [], //cards played
    // cardsLeft: "", //number of cards left in hand
    pickCard() {
        //pick random card
    }
}


const ui = {
    //scores: [{playerScore:"", computerScore: "",}], //display after each round
    //cardsInHand: [{playersCards: [], computerCards: [],}],
    //cardsInPlay: [],
    roundWinner: [{round: 1, winner: "",}, {round: 2, winner: "",}, {round: 3, winner: "",}],
    //gameWinner: "",
    finalScore: [{playerFinalScore:"", computerFinalScore: "",}],
}