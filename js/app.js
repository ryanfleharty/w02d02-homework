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
    playerScore: 0,
    cpuScore: 0,
    round: 1,    
}
const startRound = () => {
    console.log(`${player.name} has ${scoreboard.playerScore} points, ${cpu.name} has ${scoreboard.cpuScore} points`)
    console.log(`ROUND ${scoreboard.round} BEGIN!`)   
}
const dealCards =() => {
    dealPlayer();
    console.log(player.name + " has been dealt " + player.hand[0].name +' '+ player.hand[0].damage);
    dealCpu();
    console.log(cpu.name + " has been dealt " + cpu.hand[0].name + ' ' + cpu.hand[0].damage);
    dealPlayer();
    console.log(player.name + " has been dealt " + player.hand[1].name + ' ' + player.hand[1].damage);
    dealCpu();
    console.log(cpu.name + " has been dealt " + cpu.hand[1].name + ' ' + cpu.hand[1].damage);
    dealPlayer();
    console.log(player.name + " has been dealt " + player.hand[2].name + ' ' + player.hand[2].damage);
    dealCpu();
    console.log(cpu.name + " has been dealt " + cpu.hand[2].name + ' ' + cpu.hand[2].damage);
}
const dealRandomCard = () => {
         const maxCards = theCards.length;
         return Math.floor(Math.random() * (maxCards - 0) + 0);        
}
const dealPlayer = () => {
    return player.hand.push(theCards[dealRandomCard()])
}
const dealCpu = () => {
    return cpu.hand.push(theCards[dealRandomCard()]);
}
const clearHands = () => {
    clear =
    player.collection.push(player.hand[0], [1], [2]);
    cpu.collection.push(cpu.hand[0], [1], [2]);
    return clear
// move player hands array to player collection array
// move cpu hands array to cpu collection array
}
//Eggbert chooses a card and plays it!It has a damage of 10. -
const playerPlays = () => {
    player.chosenCard = player.hand[Math.floor(Math.random() * (player.hand.length - 0) + 0)];
    console.log(player.name + " plays "+ player.chosenCard.name) 
}
//The computer randomly chooses a card and plays it!It has a damage of 8. -
const cpuPlays = () => {
    cpu.chosenCard = cpu.hand[Math.floor(Math.random() * (cpu.hand.length - 0) + 0)];
    console.log( cpu.name +" plays " + cpu.chosenCard.name)

}
const roundWinner = () => {
//Eggbert wins!
//"if/else Egberts choosen card > computer Math.random... "
if (player.chosenCard.damage > cpu.chosenCard.damage){
    console.log(player.name + " wins this round!");
    scoreboard.playerScore++;
}
else if (player.chosenCard === cpu.chosenCard){console.log("It's a tie!")
        } else {console.log(cpu.name + " wins this round!");
                scoreboard.cpuScore++;
                 
    }
console.log(player, cpu)
}
//     The score is displayed:
//     -Score: Eggbert: 1, Computer: 0 -
//     Rounds Won: Eggbert: 0, Computer: 0
const endRound = () => {
console.log(`END OF ROUND ${scoreboard.round}`)
player.hand = [];
clearHands();
scoreboard.round++
}
const gameOver = () => {
    console.log( "GAME OVER");
    scoreboard.round -1
    console.log(scoreboard)
}
const beginGame = () => {
    console.log("Welcome to POKEMON let's play!");
    while (scoreboard.round < 4){
        startRound()
        dealCards();
        playerPlays();
        cpuPlays();
        roundWinner();
        endRound();
    }
    gameOver();
}

beginGame();
