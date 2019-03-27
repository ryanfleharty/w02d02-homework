// POKEMON HOMEWORK


/* PSUEDO


**EXTRA THING**
add a random multiplier that adds a random number between (-5) thru 15 to a cards attack
*********


        **GAME PROCESS**

PROCESS 1 (game start)

--Player is prompted to input their name
--Player is asked to start the game

PROCESS 2 (dealing cards)

--Player is delt 3 random cards--

              *create a deal function

    -cards are removed from the deck
    -cards are placed in player's hand

              *player is notified of their cards

--Computer is delt 3 random cards--

    -cards are removed from the deck
    -cards are placed in computer's hand

PROCESS 3 (playing cards)

--Player chooses card to play--

              *create playerPlays function w/ the parameter as the card

    -chosen card goes into play

              *Random Multiplier applied to the card

--computer randomly plays a card----

              *create computerPlays function that runs when player plays

    -randomly chosen card goes into play

              *random multiplier applied to card

              *Notify which cards are in play, along w/ thier values
              *log each card's attack

PROCESS 4 (recording winner)

--the player who played the card with the higher damage value wins--

    -card damage values are compared

--the winner is displayed--

    -the score is recorded
    -all six active cards are discarded

              *player is instructed to begin the next round

PROCESS 5 (finishing round)

--the round ends and round number/rounds-won is displayed--

--the whole process repeates--

              *If there are no more cards left in the deck...

--the final winner is displayed and the game is over--

    -the game is reset

              *the player is asked if they would like to play again

      **GAME ITEMS**

--Stats object necissary-- (type stats to see it)
    -records current round and points
    -records the cards that are in their hand
    -records the discarded cards
    -records the cards left in the deck

--Unplayed deck of cards object--

--Player object--
    -contains cards in hand
    -contains current score

--Computer Object--
    -contains cards in hand
    -contains current score

--Discarded/Used cards--

--Score--
    -contains each player's Score
    -contains the current round

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
  name: "changethis",//prompt("Please enter your name"),
  hand: [],
  roundsWon: 0,
}

// rounds
let rounds = 0;

// computer
const computer = {
  name: "changethis2",//prompt("Please enter your rival's name"),
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
  }, 1000)

setTimeout(function(){
  if (computer.hand.length === 3) {
      console.log('You have chosen 3 Pokémon! Type "seeHand()" to see their information!');
    } else {
      console.log("Please draw another card!");
    }
  }, 1500)

    return '""""""""""""""""'
}



const seeHand = () => {
  console.log(player.hand);
  console.log("Choose which Pokémon to send into battle! The higher the damage the better the Pokémon!");
  console.log(`Type "iChooseYou('Name-Of-Pokemon')" to make your choice`);
  return '"""""""""""""""""';
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
  console.log(`I choose you! ${name}!`);

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
  console.log(`Type "attack()" to have ${battleField[0].name} attack!`);
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
  console.log('Type "drawCard()" to draw another card!');},6000)

  return '""""""""""'
}


// THIS IS THE FLOW OF THE ACTUAL GAME THAT PROMPTS USERS TO PLAY WITHOUT TYPED FUNCTIONS

console.log(`${computer.name} would like to battle!`);
console.log('Please type "acceptBattle()" to begin!');
console.log('""""""""""""""""');

const acceptBattle = function() {
  console.log(`${player.name} accepted the challenge! Let the battle begin!`);
  console.log('Please type "drawCard()" to choose your Pokémon!');
  return '""""""""""""""""'
}
