const theCards = [{
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
}]
const player = {
    name: "Egbert",
    hand: [],
    chosenCard: {},
    collection: [], 
}
const cpu = {
    name: "The Computer",
    hand: [],
    chosenCard: {},
    collection: [],
}
const scoreboard = {
    cardsPlayed: 0,
    cardsRemaining: 0,
    playerScore: 0,
    playerRoundsWon: 0,
    cpuScore: 0,
    computerRoundsWon: 0,
    round: 1,

     
}
const beginGame = () => {
    console.log("Welcome to POKEMON let's play!")
}
const startRound = () => {
    console.log(`${player.name} has ${scoreboard.playerScore} points, ${cpu.name} has ${scoreboard.cpuScore} points`)
    console.log(`ROUND ${scoreboard.round} BEGIN!`)   
}
 const dealRandomCard = () => {
         const maxCards = theCards.length;
         return Math.floor(Math.random() * (maxCards - 0) + 0);        
}
 const dealPlayer = () => {
     return player.hand.push(theCards[dealRandomCard()])
 }
//     Eggbert(the player) is dealt three random cards from the deck -
// const dealPlayer = ()=> {
    
//     console.log(`${player.name} has been dealt:`)
//     console.log(`${player.hand[0].name} - damage ${player.hand[1].damage}, ${player.hand[2].name} - damage ${player.hand[0].damage} and ${player.hand[0].name} - damage ${player.hand[0].damage}`)
// }
//     The computer is dealt three random cards from the deck -


const playerChoose = () => {
    console.log("PLAYER CHOOSE check for best card in hand arr chooses that card from hand")
    bestCard = ""
    for (i=0; i>player.hand.length; i++){
        
        if ([i].damage>[i].a.damage+1){
            bestCard = [i].a;
            console.log(bestCard)
        }else {bestCard = ([i].a);
        }
        if (([i].a.damage+1) > ([i].a.damage +2)) {bestCard = ([i]+1).a
        }else{bestCard = ([i].a.damage + 2)}
    }
    console.log(bestCard) 
    player.chosenOne = bestCard;
}
//     Eggbert chooses a card and plays it!It has a damage of 10. -
const playerPlays = () => {
    console.log( "PLAYER PLAYS console.log() player play....it has damage of...")
}
//The computer randomly chooses a card and plays it!It has a damage of 8. -
const cpuPlays = () => {
    console.log('CPU PLAYS cpu plays math.random card it has damage of')
}
const roundWinner = () => {
//     Eggbert wins!
//"if/else Egberts choosen card > computer Math.random... "
if (player.chosenCard > cpu.chosenCard){
    console.log(player.name + " wins this round!")
    scoreboard.playerScore++
}
else if (player.chosenCard === cpu.chosenCard){console.log("It's a tie!")
        } else {  console.log(cpu.name + " wins this round!")
                scoreboard.cpuScore++    
    }
}

//     The score is displayed:
//     -Score: Eggbert: 1, Computer: 0 -
//     Rounds Won: Eggbert: 0, Computer: 0
const endRound = () => {
console.log(`END OF ROUND ${scoreboard.round}`)
player.hand = []
scoreboard.round++

}
const gameOver = () => {
    console.log( "GAME OVER");
    console.log(scoreboard)
}


// They do this again two more times.
// The round ends.

// The score is displayed.
// The rounds won are displayed.


// ## The `game`
// object


// #### The game should be able to:

//     1. keep a library of all the Pokemon cards that can be played(see the array in the "The Cards"
//         section)
// 2. know what cards have been played
// 3. know how many cards are left to be played / dealt overall
// 4. track points
// for both the player and the computer
// Note: Points are determined by the following: If the player 's card beats the computer'
// s card, the player gets one point(and vice versa).If there is a tie, no one gets a point.
// 5. track rounds
// 6. track number of rounds won
// for both player and computer
// 7. automatically deal 3 cards from the library to the player and 3 cards to the computer each round
// 8. determine the winner of each play
// 9. stop once there are no cards left or not enough to deal 3 to each the player and computer


// ## The `player`
// object

// ### The player should be able to:

//     1. see their stats: their points and how many rounds they 've won.
// 2. see what cards they have been dealt / see what cards are left in their hand
// 3. pick a card from the hand that has been dealt to them(thereby playing this card agaist the computer 's card). The round ends once this has happened 3 times.
//         4. receive new cards given to them by the game each round.5. see the cards that they have played in the past.


//         ##The "UI"

//         The user should see the following in the console:

//         -the scoreboard after each round -
//         the cards in the player 's hand -
//         the cards in the computer 's hand -
//         the cards that are in play -
//         the winner of each round(or
//             if there was a tie) -
//         the winner of the game when the game is over -
//         the final score when the game is over
beginGame();
startRound();
playerChoose();
playerPlays();
cpuPlays();
roundWinner();
endRound();
gameOver();



// startGame(
// if (deck != deck[0].length){
// dealPlayer();
// dealCpu();
// compareCards(
//     if (player.hand.checkDamage() > cpu.hand.checkDamage()) {
//         scoreboard.playerScore++
//     } else cpuScore++
// )
// }
// ]else {console.log('game over');
//     //show scoreboard
// }
// Math.floor(Math.random()*cards.length)].name)
