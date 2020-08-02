class Game {
  constructor(sq1, sq2, sq3, sq4, sq5, sq7, sq8, sq9) {
    this.player1 = new Player({ id: 'Player 1', token: '🦁', wins: 0 });
    this.player2 = new Player({ id: 'Player 2', token: '🐯', wins: 0 });
    this.turn = true;
    this.sq1 = sq1;
    this.sq2 = sq2;
    this.sq3 = sq3;
    this.sq4 = sq4;
    this.sq5 = sq5;
    this.sq6 = sq6;
    this.sq7 = sq7;
    this.sq8 = sq8;
    this.sq9 = sq9;
      // true means player 1's turn false means player 2's turn, when a player wins the boolean should change so that the losing player goes first in the next round.
    this.gameWon = false;
    // need function to discern whether game is won, need to tell if 3 of the same tokens form a row in order it to be true, if true add 1 win to the array of the winning player
  }
  gameWon() {
    if ((sq1.innerText === "🐯" && sq2.innerText === "🐯" && sq3.innerText === "🐯") || (sq4.innerText === "🐯" && sq5.innerText === "🐯" && sq6.innerText === "🐯") || (sq7.innerText === "🐯" && sq8.innerText === "🐯" && sq9.innerText === "🐯") || (sq1.innerText === "🐯" && sq4.innerText === "🐯" && sq7.innerText === "🐯") || (sq2.innerText === "🐯" && sq5.innerText === "🐯" && sq8.innerText === "🐯") || (sq3.innerText === "🐯" && sq6.innerText === "🐯" && sq9.innerText === "🐯") || (sq1.innerText === "🐯" && sq5.innerText === "🐯" && sq9.innerText === "🐯") || (sq3.innerText === "🐯" && sq5.innerText === "🐯" && sq7.innerText === "🐯")) {
      this.gameWon = true;
      this.player1.wins += 1;
      rtHeader.innerText = `${this.player1.wins} wins`;
      alert.innertText = "Player 1 Wins!";
      alert.classList.remove(hidden);
    } else if ((sq1.innerText === "🦁" && sq2.innerText === "🦁" && sq3.innerText === "🦁") || (sq4.innerText === "🦁" && sq5.innerText === "🦁" && sq6.innerText === "🦁") || (sq7.innerText === "🦁" && sq8.innerText === "🦁" && sq9.innerText === "🦁") || (sq1.innerText === "🦁" && sq4.innerText === "🦁" && sq7.innerText === "🦁") || (sq2.innerText === "🦁" && sq5.innerText === "🦁" && sq8.innerText === "🦁") || (sq3.innerText === "🦁" && sq6.innerText === "🦁" && sq9.innerText === "🦁") || (sq1.innerText === "🦁" && sq5.innerText === "🦁" && sq9.innerText === "🦁") || (sq3.innerText === "🦁" && sq5.innerText === "🦁" && sq7.innerText === "🦁")) {
      this.gameWon = true;
      this.player2.wins += 1;
      rtHeader.innerText = `${this.player2.wins} wins`;
      alert.innertText = "Player 2 Wins!";
      alert.classList.remove(hidden);
    }
  }
  // squareTaken() {
  //
  // }
  // resetBoard() {
  //
  // }
}
