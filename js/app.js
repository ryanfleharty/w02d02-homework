console.log("Pokemon Game");
//Pokemon cards--array of objects!

// 1. keep a library of all the Pokemon cards that can be played (see the array in the "The Cards" section)
const game = {
    deck: [
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
      ],
      cardsPlayed: [],
      cardsLeft: 18,
      round: 1,
      wins: {
          player: 0,
          computer: 0
      },
      dealThree(){

      },
      whoWins(){

      },

};

console.log(game.deck[0].name); // ==> Bulbasaur

// 2. know what cards have been played
    // game.cardsPlayed is an empty array--will need to push card objects into it during gameplay

// 3. know how many cards are left to be played/dealt overall
    // game.cardsLeft begins as a value of 18 and gets subtracted from each deal

// 4. track points for both the player and the computer Note: Points are determined by the following: 
    // If the player's card beats the computer's card, the player gets one point (and vice versa). 
    // If there is a tie, no one gets a point.
    // *** This will need to be a function with loops, conditionals, and other crazy things

// 5. track rounds
    // game.round starts at one and will need to be counted up once a round

// 6. track number of rounds won for both player and computer
    // game.wins.player/computer holds values of zero 

// 7. automatically deal 3 cards from the library to the player and 3 cards to the computer each round
    // dealThree is a function that will provide three randomized cards as options for both players.
    // once each played has played all three of their cards, currentRound needs to increase by one.

// 8. determine the winner of each play
    // whoWins is a function containing a conditional that compares the damages of each card. Whoever is 
    // highest earns one point in game.wins.player/computer

// 9. stop once there are no cards left or not enough to deal 3 to each the player and computer
    // function that maybe needs to be outside of the the object? 

const player = {
    stats: {
        points: 0,
        roundsWon: 0
    },
    currentHand: [],
    playCard(){

    },
    cardsPlayed: []
};

// 1. see their stats: their points and how many rounds they've won.

// 2. see what cards they have been dealt/see what cards are left in their hand
    // currentHand is an array into which card objects will be pushed by dealThree.
    // MUST be cleared each time a number is added to game.round

// 3. pick a card from the hand that has been dealt to them (thereby playing this 
    // card agaist the computer's card). The round ends once this has happened 3 times.
    // FUNCTION that prompts the user to choose one of three cards. 

// 4. receive new cards given to them by the game each round.
    // dealThree will repopulate the cleared currentHand

// 5. see the cards that they have played in the past.
    // each card played will get pushed into player.cardsPlayed

