
//Buisness logic for game



function Player(name) {
  this.name = name;
  this.score = 0;
}

let player1 = new Player("Player 1");
let player2 = new Player("Player 2");

function Game() {
  this.players = {player1, player2};
  this.activePlayer = player1;
  this.currentScore = 0
  this.gameover = false;
  this.roll = 0
  // this.currentId = 0;

}
  
let game = new Game();


Game.prototype.switchPlayers = function() {
  this.activePlayer = this.activePlayer === player1 ? player2 : player1;
  console.log(this.activePlayer);
}

Game.prototype.gameOver = function () {
  if (this.score >= 100) {
    return true;
  } else {
    return false;
  }
}

Game.prototype.rollResults = function() {
  const min = Math.ceil(1);
  const max = Math.floor(7);
  this.roll = Math.floor(Math.random() * (max - min) + min);
  return this.roll

}

//Buisness logic for player
// Player.prototype.addToScore = function() {
  
// }








// Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

Game.prototype.rollScore = function() {
  let roll = rollResults();
  if (roll !== 1) {
    this.currentScore += this.currentScore + roll;
  } else {
      this.currentScore = 0;
  }
  return this.currentScore;
}

//get this inside player logic. or not?function addToScore () {
  // const randomNo = this.rollResults();
  // this.score += randomNo;

// game.players[0].addToScore();
// If the player rolls a 1, they score nothing and it becomes the next player's turn.

// If the player rolls any other number, it is added to their turn total and the player's turn continues.

// If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.

// The first player to score 100 or more points wins.



// Objects

// Game:
// player
// dice


// game.Player:
// main score
// id

// game.Dice:
// roll results
// turn score
// id