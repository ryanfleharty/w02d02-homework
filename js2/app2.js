// FINALIZED POKEMON HOMEWORK

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
      

let round = 0;

startRound = () => {
    while (round < 3) {
        dealThree(player); // randomly selects three cards from deck to whatever player is run through parameter
        dealThree(computer);
        for (i = 0; i <= computer.currentHand.length + 1; i++) {
            chooseCard(player); 
            chooseCard(computer);
            battle(); // chosen cards are compared. Winner earns one point. Choose card again, then battle. Choose
                    // card again, then battle. THEN loop back to dealThree.
        };
        round++;
        if (player.wins > computer.wins) {
            player.roundsWon++;
        } else {
            computer.roundsWon++;
        }
        console.log(`Round ${round} complete! Rounds won by Eggbert: ${player.roundsWon}, by Computer: ${computer.roundsWon}`);
    };
    console.log(`FINAL SCORES: Eggbert: ${player.wins} Computer: ${computer.wins}`)
};

startRound();