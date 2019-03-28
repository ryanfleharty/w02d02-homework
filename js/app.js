console.log("RUNNING");

const pokemonCards = [
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

////TRACK rounds and score
const game = {
    rounds: 0
}
//player object
const player = {
     name: "Eggbert",
     score: 0,
     cards: [],
     cardsTwo:[],
     cardsThree:[],
     cardInPlay:"",
}
//computer object
const computer = {
    name: "Computer",
    score: 0,
    cards: [],
    cardsTwo:[],
    cardsThree:[],
    cardInPlay:""
}
console.log("1",player.cards)
console.log("2",computer.cards)

//player pick 3 cards 
const getPlayerCards = () => {
    for (let i = 0; i < 3; i++){
        player.cards.push(pokemonCards[Math.floor(Math.random() * 15) + 1])
    }
}
 //computer pick 3 cards   
const getComputerCards = () => {
        for (let i = 0; i < 3; i++){
            computer.cards.push(pokemonCards[Math.floor(Math.random() * 15) + 1])
        }
    }
//call both
getComputerCards();
getPlayerCards();

//player pick card in play
const pickCardPlayer = () => {
    player.cardInPlay = player.cards[0]
}
//computer pick card in play
const pickCardComputer = () => {
    computer.cardInPlay = computer.cards[0]
}
// call both
pickCardPlayer();
pickCardComputer();


//compare card in play
// const compare = () => {
//     //if player wins
const startGame = () => {
    if (player.cards.length > 0 || computer.cards.length > 0) {  // while(game.rounds < 3){
  if (player.cardInPlay.damage > computer.cardInPlay.damage){
            console.log("point for player")
            player.score +=1
            game.rounds +=1
            player.cards.splice(0,1)
            computer.cards.splice(0,1)
            console.log(player.cards)
      
        } else if (computer.cardInPlay.damage > player.cardInPlay.damage){
            console.log("point for computer")
            computer.score +=1
            game.rounds +=1
            computer.cards.splice(0,1)
            player.cards.splice(0,1)
            console.log(computer.cards)

        } else {

            console.log("Tie! Draw again!")
            game.rounds +=1
            computer.cards.splice(0,1)
            player.cards.splice(0,1)
            console.log(computer, player)
    }}}
startGame();
    console.log(computer, player)

//call card in play function

const endround = ()=> {
    if (player.cards.length === 0 || computer.cards.length === 0){
        game.rounds =+1
        console.log("end of round" + game.rounds);
        
    }}


const reset = () => {
    if (game.rounds < 3){
        getPlayerCards();
        getComputerCards()
    }}

endround();

while (game.rounds < 3){
    startGame();
    endround();
    reset();}








// const computer = new Player("computer");              
// const player1 = new Person("Shadi");                  



// const scoreboard = [
//                 pointsPlayer 0,
//                 pointsComp = 0,                 //scoreboard
//                 roundsWonPlayer = 0,
//                 roundsWonComp = 0]
//             },

//             dealCards (){
                
//             }

//             //Need lots of small function to make one big function 




// 1. get cards
// 2. choose cards
// 2. display cards
// 3. compare cards
// 4. reset




// ## Example Play

// - There are 18 Pokemon cards in the deck//DONE
// - Eggbert (the player) is dealt three random cards from the deck//DONE
// - The computer is dealt three random cards from the deck //DONE
// - Eggbert chooses a card and plays it! It has a damage of 10.
// - The computer randomly chooses a card and plays it! It has a damage of 8.//
// - Eggbert wins!

// The score is displayed: 
// - Score: Eggbert: 1, Computer: 0
// - Rounds Won: Eggbert: 0, Computer: 0

// They do this again two more times. 
// The round ends.

// The score is displayed.
// The rounds won are displayed.







// let stillPlaying = true;
// const ship = {
//     hull: 20,
//     firepower: 5,
//     accuracy: .7,
//     attack(target){
//         if (Math.random() < this.accuracy) {
//             console.log('YOU HIT THE ALIEN');
//             target.hull -= this.firepower;
//         }
//     }
// }
// class Alien {
//     constructor(){
//         this.hull = Math.floor(Math.random() * 4) + 3;
//         this.firepower = Math.floor(Math.random() * 3) + 2;
//         this.accuracy = (Math.floor(Math.random() * 21) + 60)/100;
//     }
//     attack(target){
//         if (Math.random() < this.accuracy) {
//             console.log('THE ALIEN HIT YOU');
//             target.hull -= this.firepower;
//         }
//     }
// }
// const aliens = [];
// for(let i = 0; i < 6; i++){
//     aliens.push(new Alien());
// }
// console.log(aliens);

// const executeRound = () => {
//     ship.attack(aliens[0]);
//     if(aliens[0].hull > 0){
//         aliens[0].attack(ship);
//         if(ship.hull <= 0){
//             youLose();
//         }
//     }else{
//         aliens.shift();
//         if(aliens.length > 0){
//             chooseToRetreat();
//         }else{
//             youWin();
//         } 
//     }
// }
// const chooseToRetreat = () => {
//     let choice;
//     while(choice !== 'y' && choice !== 'n'){
//         choice = prompt(`Would you like to keep fighting? You have ${ship.hull} health remaining to fight ${aliens.length} enemies. Choose y or n`);
//     }
//     if(choice === 'n'){
//         stillPlaying = false;
//         youLose();
//     }
// }
// const youWin = () => {
//     alert("HOORAY YOUR PLANET IS SAFE OR MAYBE THEIRS IS DOOMED");
// }
// const youLose = () => {
//     alert("YOU STINK LOSER")
// }
// while(stillPlaying && aliens.length && ship.hull > 0){
//     executeRound();
// }