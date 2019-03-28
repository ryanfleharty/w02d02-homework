const choices = [
  {
    name: "Bulbasaur",
    damage: 80
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 100
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 100
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 120
  }, {
    name: "Nidoran - male",
    damage: 110
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 150
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 75
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 90
  }, {
    name: "Vulpix",
    damage: 90
  }, {
    name: "Weedle",
    damage: 40
  }
]

const player = {
  wins : 0,//starting point
  hand:[],
  currentCard: 0,
  score: 0
}
const opponent = {
  wins: 0,
  hand: [],
  currentCard: 0,
  score: 0
}
let totalRounds = 0

let gameObj = {
  score: "",
  deck: choices

}
let randomizeDeck = () => {
  choices.sort(() => Math.random() - 0.5);
}

const drawCard = () => {
  let playerCards = choices.splice(0,3)//draw 3 cards each player
  player.hand.unshift(playerCards)//push cards into hand
  let playerHand = [].concat.apply([], player.hand); //flattenning nested array
  player.hand = playerHand

  let opponentCards = choices.splice(0,3)
  opponent.hand.unshift(opponentCards)
  let opponentHand = [].concat.apply([], opponent.hand);
  opponent.hand = opponentHand
}

const playerTurn = () => {
  let message  = "Your cards are:"
  for( let i = 0; i < player.hand.length; i++){
    message += ` \n${player.hand[i].name} ${player.hand[i].damage} damage   (Press ${i}) `
  }
  //display message to user
  //get user input
  //assign user input to variable
  //access array of hand
  //store index
  //player can choose 0, 1, 2
let input = prompt(message)
let playedCard = player.hand.splice(input, 1)[0]
player.currentCard = playedCard
debugger
}
const opponentTurn = () => {
  const oppInput = Math.floor(Math.random() * opponent.hand.length)
  let playedCard = opponent.hand.splice(oppInput, 1)[0]
  opponent.currentCard = playedCard
}

const battle = () => {

  let playerDamage = player.currentCard.damage
  let oppDamage = opponent.currentCard.damage

  if (playerDamage < oppDamage) {
    opponent.score += 1
    alert("You Lost This Turn!")
  } else if (playerDamage > oppDamage) {
    player.score += 1
    alert("You Won This Turn!")
  } else {
    alert("Tie!")
  }
}
const startRound = () => {
  drawCard()
  let i = 1
  while(i <= 3){
    playerTurn()
    opponentTurn()
    battle()
    i++
  }
  determineRoundWinner()
  totalRounds += 1
  reset()
}
const determineRoundWinner = () => {
  if (player.score < opponent.score){
    opponent.wins += 1
    alert("Opponent Wins Round!")
  }else if (player.score > opponent.score) {
    player.wins += 1
    alert("You Won This Round!")
  }else {
    alert("Tie!")
  }
}
const reset = () => {

  player.currentCard = 0
  opponent.currentCard = 0
  player.score = 0
  opponent.score = 0
}
const startGame = () => {
  randomizeDeck()
  startRound()


}

// const startRound = () => { //create function
//   playerChooses();
//   oppenentChooses();
//   compareChoices();
//   restart();
// }
