console.log('Pokemon Homework');
let poCards = [                    
  {name: "Bulbasaur", damage: 60}, //poison/grass
  {name: "Caterpie", damage: 40},  //bug 
  {name: "Charmander", damage: 60}, //fire
  {name: "Clefairy", damage: 50 }, //fairy
  {name: "Jigglypuff", damage: 60}, //normal/fairy
  {name: "Mankey", damage: 30}, //fight
  {name: "Meowth", damage: 60}, //normal
  {name: "Nidoran - female", damage: 60}, //poison
  {name: "Nidoran - male", damage: 50}, //poison
  {name: "Oddish", damage: 40}, //grass/ poison
  {name: "Pidgey", damage: 50}, //normal /flying
  {name: "Pikachu", damage: 50}, //electric
  {name: "Poliwag", damage: 50}, //water
  {name: "Psyduck", damage: 60}, //water
  {name: "Rattata", damage: 30}, //normal
  {name: "Squirtle", damage: 60}, //water
  {name: "Vulpix", damage: 50},  //fire
  {name: "Weedle", damage: 40}  //bug / poison
    ];
  
const theGame = {
  cardsInPlay: [],
  rounds: [0, 1, 2]
}
const poPlayer = {
  poHandDealt: [],
  inPlay: [],
}
const comp = {
  handDealt: [],
  inPlay: [],
}
const scoreboard = {
  playScore: 0,
  playWon: 0,
  compScore: 0,
  compWon: 0, 
  tie: 0,
}
const dealPlay = () => {
  if (poCards.length > 5);
  for(let i = 0; i < 3; i++){
  let cards = Math.floor(Math.random() * poCards.length);
  poPlayer["poHandDealt"].push(poCards[cards]);
  poCards.splice(cards, 1);

  }
  console.log(comp["handDealt"]);
}
const dealComp = () => {
  if (poCards.length > 5);
  for (let i = 0; i < 3; i++) {
    let cards = Math.floor(Math.random() * poCards.length);
   comp["handDealt"].push(poCards[cards]);
   poCards.splice(cards, 1);
}
  console.log(comp["handDealt"]);
}
const pickPokemon= () => {
  poPlayer.inPlay = poPlayer.inPlay[Math.floor(Math.random() * poPlayer.inPlay.length)];
    comp.inPlay = comp.inPlay[Math.floor(Math.random() * comp.inPlay.length)];
}
const compare = () => {
  for (let i = 0; i < poPlayer.poHandDealt.length; i++) {
    if(comp.handDealt[i].damage > poPlayer.poHandDealt[i].damage) {
      console.log(poPlayer.poHandDealt[i].damage);
      console.log("YOU LOSE!");
      scoreboard["compScore"]++;
    } 
    else if (comp["handDealt"][i].damage < poPlayer["poHandDealt"][i].damage){
      console.log("YOU WIN");
      scoreboard["playScore"]++;
    } else {
      scoreboard.tie++;
      console.log("TIE");
    }
  }
} 
console.log(poPlayer.poHandDealt.damage);
const compareCards = () => {
  for(let i = 0; i < poPlayer.poHandDealt.length; i++){
    if(scoreboard["playScore"] > scoreboard["compScore"]) {
      scoreboard["playScore"]++;
} else if (scoreboard["playScore"] < scoreboard["compScore"]) {
      scoreboard["compScore"]++;
  } else {
    scoreboard["tie"]++;
    }
  }
}
const compareLast = () => {
  for (let i = 0; i < poPlayer.poHandDealt.length; i++)
  if(scoreboard["playScore"] > scoreboard["compScore"]) {
    console.log(`You won with a ${scoreboard.playScore} points!! Go You!`);
  } else if (scoreboard["playScore"] > scoreboard["compScore"]) {
    console.log(`UI won with a ${scoreboard.compScore} points! Loser.`);
  } else {
    console.log("TIE");
     }  
   }
const reset = () => {
    const anotherRound = prompt("Want to play another game? yes / no" );
    if (anotherRound === "yes"){
      playGame();
    } else {
      console.log("THANK YOU, FOR PLAYING!");
    }
  }
const playGame = () => {
dealPlay();
dealComp();
compare();
compareCards();
compareLast();
reset();
}
playGame();

   // I am still trying to figure out how to implement a round limit, or a fail-safe to end the game
   //before it runs out of pokemon cards. 


// Pseudo
// I need player obj, computer obj, scoreboard obj, game obj. (Start with Basic Layout)


//I wanted to use type to add damage points. (Focus on what "client" Is asking for first. If no bug's then consider adding type.)
/*const poType = []; 
  for (let i = 0; i < cards.length; i++){
   poType.push(cards[i].type);
  }
  console.log(poType);*/
// Code did work but, I couldn't get it to fit in the flow the way I wanted. 
  //Remeber to practice more with this function. 
 /*shuffle() {
    for (let i = 0; i < cards.length - 1; i++) {
    let x = i + Math.floor(Math.random() * (cards.length - i));
    let temp = cards[x];
    cards[x] = cards[i];
    cards[i] = temp;
    }
  
  return cards;
} 
deal() {
    let index = Math.floor(Math.random() * 18);
    let poCard = cards[index];
    cards.splice(index, 2);
    return poCard;
},
} */