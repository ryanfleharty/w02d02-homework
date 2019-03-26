// POKEMON HOMEWORK

const cards = [{
  name: "Venusaur",
  damage: 100,
  attack: "Razor Leaf",
}, {
  name: "Charizard",
  damage: 100,
  attack: "Flamethrower",
}, {
  name: "Blastoise",
  damage: 100,
  attack: "Hydro-Pump",
}, {
  name: "Pidgeot",
  damage: 85,
  attack: "Steel Wing",
}, {
  name: "Golem",
  damage: 90,
  attack: "Earthquake",
}, {
  name: "Primeape",
  damage: 75,
  attack: "Dynamic Punch",
}, {
  name: "Persian",
  damage: 70,
  attack: "Payday",
}, {
  name: "Nidoqueen",
  damage: 80,
  attack: "Mega-Kick",
}, {
  name: "Nidoking",
  damage: 85,
  attack: "Horn-Drill",
}, {
  name: "Bellossom",
  damage: 65,
  attack: "Poisonpowder",
}, {
  name: "Magikarp",
  damage: 0,
  attack: "Splash",
}, {
  name: "Raichu",
  damage: 80,
  attack: "Thunderbolt",
}, {
  name: "Poliwrath",
  damage: 75,
  attack: "Surf",
}, {
  name: "Gyrados",
  damage: 95,
  attack: "Dragon-Rage",
}, {
  name: "Machamp",
  damage: 70,
  attack: "Strength",
}, {
  name: "Ninetails",
  damage: 85,
  attack: "Fire-Blast",
}, {
  name: "Alakazam",
  damage: 95,
  attack: "Psychic",
}, {
  name: "Mewtwo",
  damage: 150,
  attack: "Hyper Beam",
}]
// 18 cards

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
