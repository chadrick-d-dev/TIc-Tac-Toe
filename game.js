class Game {
  constructor() {
    this.turn = true;
    this.player1 = new Player({ id: 'Player 1', token: '🦁', wins: [] });
    this.player2 = new Player({ id: 'Player 2', token: '🐯', wins: [] });
      // true means player 1's turn false means player 2's turn, when a player wins the boolean should change so that the losing player goes first in the next round.
    this.gameWon = false;
    // need function to discern whether game is won, need to tell if 3 of the same tokens form a row in order it to be true, if true add 1 win to the array of the winning player
  }
  // gameWon() {
  //   if
  // }
  // squareTaken() {
  //
  // }
  // resetBoard() {
  //
  // }
}
