console.log("Pokemon");



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



let cardsEachRound = [];

for (i = 0; i < cards.length; i++){
    cardsEachRound.push(cards[i]);
};
//console.log(cardsEachRound);

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


//DEAL FUNCTION
const deal = () => {
  for (let i = 0; i < 3; i++){
      let randomCard = cardsEachRound[Math.floor(Math.random() * cardsEachRound.length)];
      let indexRandCard = cardsEachRound.indexOf(randomCard);
      playerHand.push(randomCard);
      cardsEachRound.splice(indexRandCard, 1);

      let randomCompCard = cardsEachRound[Math.floor(Math.random() * cardsEachRound.length)];
      let indexRandCompCard = cardsEachRound.indexOf(randomCompCard);
      compHand.push(randomCompCard);
      cardsEachRound.splice(indexRandCompCard, 1);
  }
  
};



// playGame funciton houses the game. To start game, call playGame()
const playGame = () => {

    deal();

    let userCardsInPlay = [];
    
    // PICK A CARD FUNCTION PROMPTS USER TO ENTER ONE OF THEIR CARDS FROM THEIR HAND
    const pickACard = () => {
    let askUser = prompt(`You have been dealt:
    ${playerHand[0].name}, damage ${playerHand[0].damage},
    ${playerHand[1].name}, damage ${playerHand[1].damage}, and 
    ${playerHand[2].name}, damage ${playerHand[2].damage}. 
    
    Pick your card!`);

    //console.log(playerHand[0].name)
    if (askUser.toLowerCase() === playerHand[0].name.toLowerCase()){
        userCardsInPlay.push(playerHand[0])
        playerHand.splice(0, 1);
    } else if (askUser.toLowerCase() === playerHand[1].name.toLowerCase()){
        userCardsInPlay.push(playerHand[1]);
        playerHand.splice(1, 1);
    } else if (askUser.toLowerCase() === playerHand[2].name.toLowerCase()){
        userCardsInPlay.push(playerHand[2])
        playerHand.splice(2, 1);
    } else {
        pickACard();
    };
    
    //console.log(userCardsInPlay[0]);
    

    // if the string the user types === playerHand[0].name, then push playerHand[0] to cardsInPlay 
    // which is a new variable we need to make. need to use toUpperCase on both before 
    // comparing

    }
    pickACard();

    let compCardInPlay = [compHand[Math.floor(Math.random() * compHand.length)]];
    let indexCompCard = compHand.indexOf(compCardInPlay);
    compHand.splice(indexCompCard, 1);
    

    if(userCardsInPlay[0].damage > compCardInPlay[0].damage){
        roundPoints.player++;
    } else if (userCardsInPlay[0].damage < compCardInPlay[0].damage){
        roundPoints.comp++;
    } else {
        roundPoints.tie++;
    }

    //END OF FIRST PLAY
    alert(
    `You played a ${userCardsInPlay[0].name} for ${userCardsInPlay[0].damage}
    The computer played a ${compCardInPlay[0].name} for ${compCardInPlay[0].damage}
    After play 1, you have ${roundPoints.player} points and the computer has ${roundPoints.comp}`);
    console.log(roundPoints);


    //CLEARS CARDS IN PLAY
    userCardsInPlay.pop();
    compCardInPlay.pop();
    
    //START PLAY 2 OF ROUND 1 HERE

    const pickASecondCard = () => {
        let askUser = prompt(`You have:
        ${playerHand[0].name}, damage ${playerHand[0].damage}
        ${playerHand[1].name}, damage ${playerHand[1].damage}
        
        Pick your card!`);
  
        
        if (askUser.toLocaleLowerCase() === playerHand[0].name.toLocaleLowerCase()){
            userCardsInPlay.push(playerHand[0])
            playerHand.splice(0, 1);
        } else if (askUser.toLocaleLowerCase() === playerHand[1].name.toLocaleLowerCase()){
            userCardsInPlay.push(playerHand[1]);
            playerHand.splice(1, 1);
        } else {
            pickASecondCard();
        }
        }

        pickASecondCard();
        
        compCardInPlay.push(compHand[Math.floor(Math.random() * compHand.length)]);
        indexCompCard = compHand.indexOf(compCardInPlay);
        compHand.splice(indexCompCard, 1);
        

        if(userCardsInPlay[0].damage > compCardInPlay[0].damage){
            roundPoints.player++;
        } else if (userCardsInPlay[0].damage < compCardInPlay[0].damage){
            roundPoints.comp++;
        } else {
            roundPoints.tie++;
        }

        //END OF PLAY 2
        alert(`You played a ${userCardsInPlay[0].name} for ${userCardsInPlay[0].damage}.
        The computer played a ${compCardInPlay[0].name} for ${compCardInPlay[0].damage}
        After the second play, you have ${roundPoints.player} points and the computer has ${roundPoints.comp}. You have tied ${roundPoints.tie} times.`);
        console.log(roundPoints);

        // //CLEARS CARDS IN PLAY ARRAYS
        // userCardsInPlay.pop();
        // compCardInPlay.pop();

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
        
        //END OF PLAY 3 
        alert(`You played a ${playerHand[0].name} for ${playerHand[0].damage}. The computer played a ${compHand[0].name} for ${compHand[0].damage} After 3 plays, you have ${roundPoints.player} points and the computer has ${roundPoints.comp} with ${roundPoints.tie} ties.`);
        console.log(roundPoints);
        

        if (roundPoints.player > roundPoints.comp){
            alert('You won the third play!');
            console.log('You won the third play!');
            gamePoints.player++;
        } else if (roundPoints.player < roundPoints.comp){
            alert('The computer won the third play');
            console.log('The computer won the third play');
            gamePoints.player++;
        } else {
            alert('The third play was a tie')
            console.log('The third play was a tie');
            gamePoints.tie++;
        };


        console.log(`The current score is You: ${gamePoints.player} games, Computer: ${gamePoints.comp} games, with ${gamePoints.tie} tie games`);
        console.log(roundPoints);
        
        userCardsInPlay.pop();
        compCardInPlay.pop();
        playerHand.pop();
        compHand.pop();

        cardsEachRound = cards;
        

        
        roundPoints.player = 0;
        roundPoints.comp = 0;
        roundPoints.tie = 0;

}

const start = () => {
  for (let i = 0; i < 2; i++){
    playGame();
    if (i === 1){
      playGame();
      whoWon();
    }
  }
}



const whoWon = () => {
  if(gamePoints.player > gamePoints.comp){
     alert("YOU WON THE GAME! GREAT JOB!");
     console.log("YOU WON THE GAME");
  } else if (gamePoints.player < gamePoints.comp){
     alert("THE COMPUTER WON, TRY AGAIN NEXT TIME...");
     console.log("THE COMPUTER WON THE GAME")
  } else {
     alert("IT ENDED UP BEING A TIE... NOBODY WANTED THIS :(")
  }
};



