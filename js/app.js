



const cards = [
  {name: "Bulbasaur", damage: 60}, 
  {name: "Caterpie", damage: 40}, 
  {name: "Charmander", damage: 60},
  {name: "Clefairy", damage: 50},
  {name: "Jigglypuff", damage: 60}, 
  {name: "Mankey", damage: 30}, 
  {name: "Meowth", damage: 60}, 
  {name: "Nidoran - female", damage: 60}, 
  {name: "Nidoran - male", damage: 50}, 
  {name: "Oddish", damage: 40}, 
  {name: "Pidgey", damage: 50}, 
  {name: "Pikachu", damage: 50}, 
  {name: "Poliwag", damage: 50}, 
  {name: "Psyduck", damage: 60}, 
  {name: "Rattata", damage: 30}, 
  {name: "Squirtle", damage: 60}, 
  {name: "Vulpix", damage: 50}, 
  {name: "Weedle", damage: 40}
]
  const playedCards = [];

  const eggBert = {

    currentHand: [],  
    roundsWon: 0,
    points: 0,

  };
  const opponent = {

    currentHand: [],
    roundsWon: 0,
    points: 0,

  };

const game = {
  deal()  {
    let rng = Math.floor(Math.random() * cards.length);
    let dealt = cards.splice(rng, 1)[0];
    return dealt;
  },
  start() {
    if(eggBert.currentHand.length === 0){
    for(let i = 0; i < 3;i++) {
      eggBert.currentHand.push(this.deal());
      opponent.currentHand.push(this.deal());
    }
  };
          console.log(eggBert.currentHand);
          console.log(opponent.currentHand);
          console.log(cards)

  },
myChoice() {
    for (let i = 0; i < eggBert.currentHand.length; i++) {
        let myCard = eggBert.currentHand[0];  
    }
        let myChoice = alert(`Eggbert's hand is ${JSON.stringify(eggBert.currentHand)}. A card will be selected at random`);

  },


showdown() {
      if(eggBert.currentHand.length == 0){
      this.deal();
    };
    let myCard = eggBert.currentHand.splice(0, 1)[0];
    let computerCard = opponent.currentHand.splice(0, 1)[0];
    alert(`Eggbert played ${JSON.stringify(myCard)}`);
    alert(`computer played ${JSON.stringify(computerCard)}`);
    if (myCard.damage > computerCard.damage) {
      alert("Eggbert wins");
      eggBert.points++;
      document.write(`Eggbert has ${eggBert.points} points.<br>`)
    } else if (computerCard.damage > myCard.damage) {
      alert("Eggbert lost");
      opponent.points++;
      document.write(`The computer has ${opponent.points} points.<br>`);
    }
  playedCards.push(myCard);
  playedCards.push(computerCard);

  },

  round() {
    this.deal();
    for (let i = 0; i < 8; i++) {
      this.start();
      this.myChoice();
      this.showdown();
    if (eggBert.points > opponent.points) {
      eggBert.roundsWon++;
      alert(`Eggbert won this round. ${eggBert.roundsWon} rounds won.`);
    } else if (opponent.points > eggBert.points) {
      opponent.roundsWon++;
      alert(`The computer has won ${opponent.roundsWon} rounds.`)
      }
    }
    eggBert.points = 0;
    opponent.points = 0;
    this.round++;
  },


  startGame() {
    while (cards.length > 5) {
    this.round();
    }
    if(eggBert.roundsWon > opponent.roundsWon){
      alert("Eggbert Won! Game-Over!");
      document.write("Eggbert Won!");

    } else if (opponent.roundsWon > eggBert.roundsWon) {
      alert("Game Over... Eggbert lost.");
      document.write("Eggbert Lost!");

    }
  },


};








// game.deal();
// game.start();
// game.myChoice();
// game.showdown();
// game.round();
game.startGame();




