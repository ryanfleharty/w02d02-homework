console.log("Pokemon");



// game deals 3 cards to the player
// each card has a damage value
// player picks one of the 3 cards
// computer chooses a random card
// 
// if check which card has a higher damage value
// whichever card has the higher value wins a point
//
// after the player cards array reaches zero, restart
// 
// variables needed: 
// whowins each point - object with keys eggbert and computer
// cards played discard pile
// who wins each round stored
// 
// 




const cards = [
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

// created variable to store the cards for each round
// when cards are played/dealt, they are removed from this array, 
// not original cards array

let cardsEachRound = [];

for (i = 0; i < cards.length; i++){
    cardsEachRound.push(cards[i]);
};
console.log(cardsEachRound);

// playGame funciton houses the game. To start game, call playGame()
const playGame = () => {
    let playerHand = [];
    const compHand = [];
    
    const gamePoints = {
        player: 0,
        comp: 0,
        tie: 0
    };
    
    const roundPoints = {
        player: 0,
        comp: 0,
        tie: 0
    };
    

    // THE DEAL FUNCTION
    // loop generates random card from cardsEachRound, gets the index of the
    // card generated, pushes to playerHand, and removes from cardsEachRound
    
    const deal = () => {
        for (let i = 0; i < 3; i++){
            let randomCard = cardsEachRound[Math.floor(Math.random() * cardsEachRound.length)];
            let indexRandCard = cardsEachRound.indexOf(randomCard);
            playerHand.push(randomCard);
            cardsEachRound.splice(indexRandCard, 1);

            let randomCompCard = cardsEachRound[Math.floor(Math.random() * cardsEachRound.length)];
            let indexRandCompCard = cardsEachRound.indexOf(randomCompCard);
            compHand.push(randomCompCard);
            cardsEachRound.splice(indexRandCard, 1);
        }
        
    };

    deal();
    console.log(playerHand); 
    console.log(cardsEachRound);

    // DEFINES NEW ARR FOR CURRENT CARD IN PLAY
    let userCardsInPlay = [];
    
    // PICK A CARD FUNCTION PROMPTS USER TO ENTER ONE OF THEIR CARDS FROM THEIR HAND
    const pickACard = () => {
    let askUser = prompt(`You have been dealt:
    ${playerHand[0].name}, damage ${playerHand[0].damage},
    ${playerHand[1].name}, damage ${playerHand[1].damage}, and 
    ${playerHand[2].name}, damage ${playerHand[2].damage}. 
    
    Pick your card!`);

    console.log(playerHand[0].name)
    if (askUser === playerHand[0].name){
        userCardsInPlay.push(playerHand[0])
        playerHand.splice(0, 1);
    } else if (askUser === playerHand[1].name){
        userCardsInPlay.push(playerHand[1]);
        playerHand.splice(1, 1);
    } else if (askUser === playerHand[2].name){
        userCardsInPlay.push(playerHand[2])
        playerHand.splice(2, 1);
    } else {
        prompt("Please enter one of your cards")
    };
    
    console.log(userCardsInPlay[0]);
    

    // if the string the user types === playerHand[0].name, then push playerHand[0] to cardsInPlay 
    // which is a new variable we need to make. need to use toUpperCase on both before 
    // comparing

    }
    pickACard();

    let compCardInPlay = [compHand[Math.floor(Math.random() * compHand.length)]];
    let indexCompCard = compHand.indexOf(compCardInPlay);
    console.log(compCardInPlay);
    compHand.splice(indexCompCard, 1);
    
    console.log(playerHand);
    console.log(compHand);


    console.log(userCardsInPlay[0].damage);
    console.log(compCardInPlay[0].damage);
    // right now both the player (userCardsInPlay), and computer (compCardInPlay)
    // have selected their card to compare to each other

    if(userCardsInPlay[0].damage > compCardInPlay[0].damage){
        roundPoints.player++;
    } else if (userCardsInPlay[0].damage < compCardInPlay[0].damage){
        roundPoints.comp++;
    } else {
        roundPoints.tie++;
    }

    console.log(roundPoints);
    console.log(`You played a ${userCardsInPlay[0].name} for ${userCardsInPlay[0].damage}`);
    console.log(`The computer played a ${compCardInPlay[0].name} for ${compCardInPlay[0].damage}`);
    console.log(`After play 1, you have ${roundPoints.player} points and the computer has ${roundPoints.comp}`);
    //FIRST PLAY OF ROUND 1 ENDS HERE

    //CLEARS CARDS IN PLAY ARRAYS
    userCardsInPlay.pop();
    //console.log(userCardsInPlay);
    compCardInPlay.pop();
    //console.log(compCardInPlay);
    
    //START PLAY 2 OF ROUND 1 HERE

    const pickASecondCard = () => {
        let askUser = prompt(`You have:
        ${playerHand[0].name}, damage ${playerHand[0].damage}
        ${playerHand[1].name}, damage ${playerHand[1].damage}
        
        Pick your card!`);
    
        
        if (askUser === playerHand[0].name){
            userCardsInPlay.push(playerHand[0])
            playerHand.splice(0, 1);
        } else if (askUser === playerHand[1].name){
            userCardsInPlay.push(playerHand[1]);
            playerHand.splice(1, 1);
        } else {
            prompt("Please enter one of your cards")
        };
        
        console.log(userCardsInPlay);
        }

        pickASecondCard();
        
        //
        compCardInPlay.push(compHand[Math.floor(Math.random() * compHand.length)]);
        indexCompCard = compHand.indexOf(compCardInPlay);
        console.log(compCardInPlay);
        compHand.splice(indexCompCard, 1);
        
        console.log(playerHand);
        console.log(compHand);
    
    
        console.log(userCardsInPlay[0].damage);
        console.log(compCardInPlay[0].damage);

        if(userCardsInPlay[0].damage > compCardInPlay[0].damage){
            roundPoints.player++;
        } else if (userCardsInPlay[0].damage < compCardInPlay[0].damage){
            roundPoints.comp++;
        } else {
            roundPoints.tie++;
        }

        console.log(roundPoints);
        console.log(`You played a ${userCardsInPlay[0].name} for ${userCardsInPlay[0].damage}`);
        console.log(`The computer played a ${compCardInPlay[0].name} for ${compCardInPlay[0].damage}`);
        console.log(`After the second play, you have ${roundPoints.player} points and the computer has ${roundPoints.comp}. You have tied ${roundPoints.tie} times.`);
        
        //CLEARS CARDS IN PLAY ARRAYS
        userCardsInPlay.pop();
        compCardInPlay.pop();

        //END OF PLAY 2 FOR ROUND 1

                //START PLAY 3 FOR ROUND 1

        alert(`Your only card left is ${playerHand[0].name}, hit OK to set it loose!`);
        
        if (playerHand[0].damage > compHand[0].damage){
            roundPoints.player++;
        } else if (playerHand[0].damage < compHand[0].damage){
            roundPoints.comp++;
        } else {
            roundPoints.tie++;
        };

        console.log(roundPoints);
        if (roundPoints.player > roundPoints.comp){
            console.log('You won the first round!');
            gamePoints.player++;
        } else if (roundPoints.player < roundPoints.comp){
            console.log('The computer won the first round');
            gamePoints.player++;
        } else {
            console.log('The first round was a tie');
            gamePoints.tie++;
        };

        console.log(`The current score is You: ${gamePoints.player}, Computer: ${gamePoints.comp}, with ${gamePoints.tie} ties`);

        




}

playGame();