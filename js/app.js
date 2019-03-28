// POKEMON HOMEWORK

/* UPDATES

- use the user prompt more
- have each round consist of three battles (use each card once)
- have a display that shows both players current hands, rounds, etc, in html. (get rid of seeHand() function)
- change drawCard() to drawThreeCards()
- make each round more obvious start/end
- add a start game button

- use if (prompt === x) {run function} to make it user friendly!!


*/

// DEFINING OBJECTS

// cards to be played
const cards = [{
  name: "Venusaur",
  attack: "Razor Leaf",
  damage: 100,
}, {
  name: "Charizard",
  attack: "Flamethrower",
  damage: 100,
}, {
  name: "Blastoise",
  attack: "Hydro-Pump",
  damage: 100,
}, {
  name: "Pidgeot",
  attack: "Steel Wing",
  damage: 85,
}, {
  name: "Golem",
  attack: "Earthquake",
  damage: 90,
}, {
  name: "Primeape",
  attack: "Dynamic Punch",
  damage: 75,
}, {
  name: "Persian",
  attack: "Payday",
  damage: 70,
}, {
  name: "Nidoqueen",
  attack: "Mega-Kick",
  damage: 80,
}, {
  name: "Nidoking",
  attack: "Horn-Drill",
  damage: 85,
}, {
  name: "Bellossom",
  attack: "Poisonpowder",
  damage: 65,
}, {
  name: "Magikarp",
  attack: "Splash",
  damage: 0,
}, {
  name: "Raichu",
  attack: "Thunderbolt",
  damage: 80,
}, {
  name: "Poliwrath",
  attack: "Surf",
  damage: 75,
}, {
  name: "Gyarados",
  attack: "Dragon-Rage",
  damage: 95,
}, {
  name: "Machamp",
  attack: "Strength",
  damage: 70,
}, {
  name: "Ninetails",
  attack: "Fire-Blast",
  damage: 85,
}, {
  name: "Alakazam",
  attack: "Psychic",
  damage: 95,
}, {
  name: "Mewtwo",
  attack: "Hyper Beam",
  damage: 150,
}]
//18 cards

// discarded cards
const discarded = [];

// cards in play
const battleField = [];

// player
const player = {
  name: prompt("Please enter your name"),
  hand: [],
  roundsWon: 0,
}

// rounds
let rounds = 0;

// computer
const computer = {
  name: prompt("Please enter your rival's name"),
  hand: [],
  roundsWon: 0,
}

var randomNumber = Math.floor(Math.random() * 2);

const createAttackMultiplier = () => {return (Math.floor(Math.random() * 20) - 5)}


const randomCard = (user) => {
    let randomCard = Math.floor(Math.random() * cards.length)
    user.hand.push(cards[randomCard]);
    console.log(`${cards[randomCard].name} was drawn!`);
    cards.splice(randomCard,1);
}



const drawCard = () => {
    setTimeout(function(){
      console.log(`${player.name} drew a card!`)
    randomCard(player);
  }, 500)

    setTimeout(function(){
      console.log(`${computer.name} drew a card!`)
    randomCard(computer);
  }, 2000)

setTimeout(function(){
  if (computer.hand.length === 3) {
      console.log("You have chosen 3 Pokémon!");
      seeHand();
    } else {
      drawCard();
    }
  }, 3000)

    return '""""""""""""""""'
}



const seeHand = () => {
  console.log(player.hand);
  let choice = prompt(`Choose which Pokémon to send into battle!\n${player.hand[0].name},${player.hand[1].name}, or ${player.hand[2].name}`);
  for (i = 0; i < 3; i++){
  if (choice === player.hand[0].name ||choice === player.hand[1].name ||choice === player.hand[2].name){
  iChooseYou(choice);
} else {
  seeHand()
  }
  return '"""""""""""""""""';
}
}



const iChooseYou = (name) => {
  for (i = 0; i < 3; i++){
    if (player.hand[0]['name'] === name) {
        battleField.push(player.hand[0]);
        player.hand.splice(0,1);
    } else {
        discarded.push(player.hand[0]);
        player.hand.splice(0,1);
    }
  }
  alert(`I choose you! ${name}!`);

  setTimeout(function(){computerChoosePokemon(randomNumber);},2000);

  return '"""""""""""""""'
}

const computerChoosePokemon = (num) => {
  battleField.push(computer.hand[num]);
  console.log(`${computer.name} sent ${computer.hand[num].name} into battle!`);
  computer.hand.splice(num,1);
  for (i = 0; i < 2; i++){
  discarded.push(computer.hand[i]);
  computer.hand.splice(i,1);
  }
  const order = () =>{
  let command = prompt(`Would you like to have ${battleField[0].name} use the ${battleField[0].attack} attack? Type y/n`);
  if (command !== "n") {
    attack();
  } else {
    order();
  }
}
order();
}


const attack = () => {

  let playerDamage = battleField[0].damage + createAttackMultiplier();
  let computerDamage = battleField[1].damage + createAttackMultiplier();

  console.log(`${battleField[0].name} used ${battleField[0].attack} for ${playerDamage} damage!`);

  setTimeout(function(){console.log(`${battleField[1].name} used ${battleField[1].attack} for ${computerDamage} damage!`);},2000)

  setTimeout(function(){
    if (playerDamage > computerDamage) {
      console.log(`${battleField[0].name} wins! ${battleField[1].name} fainted! Great job!`);
      player.roundsWon++;
      rounds++
      if (rounds === 3 && player.roundsWon > computer.roundsWon) {
        alert(`Congratulations! You win! Refresh the page to try again!`)
      } else if (rounds === 3 && player.roundsWon < computer.roundsWon) {
        alert(`I'm Sorry! You lose! Refresh the page to try again!`)
      } else if (rounds === 3) {
        alert("Tie game! Refresh the page to try again!")
      }
  } else if (playerDamage === computerDamage) {
      console.log(`The attack failed...${battleField[0].name} did nothing...`);
      rounds++
      if (rounds === 3 && player.roundsWon > computer.roundsWon) {
        alert(`Congratulations! You win! Refresh the page to try again!`)
      } else if (rounds === 3 && player.roundsWon < computer.roundsWon) {
        alert(`I'm Sorry! You lose! Refresh the page to try again!`)
      } else if (rounds === 3) {
        alert("Tie game! Refresh the page to try again!")
      }
  } else {
    console.log(`${battleField[1].name} wins! ${battleField[0].name} fainted!`);
    computer.roundsWon++;
    rounds++

  }},4000)
  setTimeout(function(){discarded.push(battleField[0]);
  discarded.push(battleField[1]);
  battleField.splice(0,2);

  const playAgain = () => {
    let chhooiice = prompt("would you like to draw again? type y/n")
  if(chhooiice === "n"){
    alert("Game Over!")
  } else {
    drawCard();
  }
}
  playAgain()
  },6000)
  return '""""""""""'
}

const acceptBattle = function() {
  alert(`${player.name} accepted the challenge! Let the battle begin!`);
  drawCard()
  return '""""""""""""""""'
}



prompt(`${computer.name} would like to battle! Please type anything to accept!`);
acceptBattle();
