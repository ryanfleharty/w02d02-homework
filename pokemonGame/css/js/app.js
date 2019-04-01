const pokemonDeck = [
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
   
  
   let playHand = [];

   let play2Hand = [];

   const rounds = {
    player2Score: 0,
    playerScore: 0, 
   }

   const score = {
    playerScore: 0,
    player2Score: 0,


};

  //console.log(pokemonDeck[3].name);
   const play2HandDeal = () => {


      
       for(let i = 0; i < 3; i++) {
       const randomNum = (Math.floor(Math.random() * 18));
       const randomPokemon = pokemonDeck[randomNum];
       play2Hand.push(randomPokemon);
       console.log(play2Hand);
       
       }

    } 
   

   
  const pokemonDeal=()=> {
     //pokemonDeck[];
     
     
     for(let i = 0; i < 3; i++){
         const randomNum = (Math.floor(Math.random() * 18));
         const randomPokemon = pokemonDeck[randomNum];
         playHand.push(randomPokemon);
         //console.log(playHand)
         
     }
  }
  
  

  const pickCard = () => {
      const randomNum = (Math.floor(Math.random() * 3));
      const randomPokemon2= play2Hand[randomNum];
      const randomPokemon = playHand[randomNum];
      console.log("player damage" + randomPokemon.damage + " player2 damage" + randomPokemon2.damage);
       if(randomPokemon2.damage > randomPokemon.damage){
           score.player2Score = score.player2Score + 1;
           //console.log("player2 wins");
           //console.log(score.player2Score);
       }  else if(randomPokemon.damage === randomPokemon.damage){
            console.log("Its a tie")
        }else {
           score.playerScore = score.playerScore + 1;
           //console.log("playerHand wins");
           //console.log(score.playerScore);
          
       }  

  }
  
  
  const roundWinner = () => {
      if(score.player2Score < score.playerScore){
         rounds.playerScore ++
         //console.log(rounds.playerScore);
         //console.log("player wins");
      }else{
          rounds.player2Score ++;
          //console.log(rounds.player2Score);
          //console.log("player2  win");
      }
  }
  const finalWinner = () => {
      if(rounds.playerScore > rounds.player2Score){
          console.log("player wins");
      }else{
          console.log("player2 wins");
      }
      
  }

  const playRound = () => {
    play2HandDeal();
    pokemonDeal();
    pickCard();
    pickCard();
    pickCard(); 
    roundWinner();
    play2Hand = [];
    playHand = [];
    score.playerScore = 0;
    score.player2Score  = 0;

    


    
  }  


  //this is telling your program to run pickCard();
  
   
  
  playRound();
  playRound();
  playRound();
  finalWinner();


  //Still working on storing used cards
