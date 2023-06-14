
//Buisness logic for game
function Game() {
  this.players = {player1, player2};
  this.currentId = 0;

}

Game.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players[player.id] = player;
};

Game.prototype.assignID = function() {
  this.currentId += 1
  return this.currentId;
};

Game.prototype.rollResults = function() {
  const min = Math.ceil(1);
  const max = Math.floor(7);
  return Math.floor(Math.random() * (max - min) + min);

}

//Buisness logic for player









// Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

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