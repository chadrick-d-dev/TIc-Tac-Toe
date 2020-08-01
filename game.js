var Player = require('../player');
class Game {
  constructor(object) {
    this.turn = true;
      // true means player 1's turn false means player 2's turn, when a player wins the boolean should change so that the losing player goes first in the next round.
    this.gameWon = false;
    // need function to discern whether game is won, need to tell if 3 of the same tokens form a row in order it to be true, if true add 1 win to the array of the winning player
    this.squareTaken = false;
    // when square is clicked the value changes to true, and the square can no longer be clicked.
  }
  gameWon() {
    if 
  }
  squareTaken() {

  }
  resetBoard() {

  }
}

var player1 = new Player({ id: 'Player 1', token: '🧠', wins: [] });
var player2 = new Player({ id: 'Player 2', token: '🧟‍♂️'‍, wins: [] })
