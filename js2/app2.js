


// keep a library of all the Pokemon cards that can be played (see the array in the "The Cards" section)
// know what cards have been played
// know how many cards are left to be played/dealt overall
// track points for both the player and the computer Note: Points are determined by the following: If the player's card beats the computer's card, the player gets one point (and vice versa). If there is a tie, no one gets a point.
// track rounds
// track number of rounds won for both player and computer
// automatically deal 3 cards from the library to the player and 3 cards to the computer each round
// determine the winner of each play
// stop once there are no cards left or not enough to deal 3 to each the player and computer
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
  ];

  
discard = []; // push into this when a card is played 

const player = {
    name: "Eggbert",
    wins: 0,
    roundsWon: 0,
    currentHand: [],
    currentCard: "",
    cardsPlayed: []
};

const computer = {
    name: "The computer",
    wins: 0,
    roundsWon: 0,
    currentHand: [],
    currentCard: "",
    cardsPlayed: []
};

const dealThree = (object) => {
    while (object.currentHand.length <= 2) {
        let randomThree = Math.floor(Math.random()* deck.length);
        object.currentCard = deck[randomThree];
        object.currentHand.push(object.currentCard);
        deck.splice(randomThree, 1);
      };
      console.log(`${object.name} drew ${object.currentHand[0].name}, ${object.currentHand[1].name}, and ${object.currentHand[2].name}.`);
};


const chooseCard = (object) => {
    // for (let i = 0; i <= object.currentHand.length + 1; i++) {
        let randomOne = Math.floor(Math.random()* object.currentHand.length);
        object.currentCard = object.currentHand[randomOne];
        object.cardsPlayed.push(object.currentCard);
        object.currentHand.splice(randomOne, 1);
        console.log(`${object.name} chose ${object.currentCard.name}!`);

    //   };
};

battle = () => {
    // for (i = 0; i < playerHand.length; i++){
        if (player.currentCard.damage === computer.currentCard.damage) {
          console.log(`Tie game! No one earns any points. Eggbert: ${player.wins}, Computer: ${computer.wins}`);
        } else if (player.currentCard.damage > computer.currentCard.damage) {
          console.log(`Eggbert's ${player.currentCard.name} knocked out the 
          computer's ${computer.currentCard.name}!`);
          player.wins++;
          console.log(`Eggbert: ${player.wins}, Computer: ${computer.wins}`);
        } else {
          console.log(`The computer's ${computer.currentCard.name} knocked out 
          Eggbert's ${player.currentCard.name}!`);
          computer.wins++;
          console.log(`Eggbert: ${player.wins}, Computer: ${computer.wins}`);
        };
      };
      


// see their stats: their points and how many rounds they've won.
// see what cards they have been dealt/see what cards are left in their hand
// pick a card from the hand that has been dealt to them (thereby playing this card agaist the computer's card). 
    // The round ends once this has happened 3 times.
// receive new cards given to them by the game each round.
// see the cards that they have played in the past.

startRound = () => {
    dealThree(player); // randomly selects three cards from deck to whatever player is run through parameter
    dealThree(computer);
    for (i = 0; i <= computer.currentHand.length + 1; i++) {
        chooseCard(player); // computer's card is generated, user's is supplied via prompt
        chooseCard(computer);
        battle(); // chosen cards are compared. Winner earns one point. Choose card again, then battle. Choose
                // card again, then battle. THEN loop back to dealThree.
    };
};

startRound();