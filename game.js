class Game {
  constructor() {
    this.player1 = new Player({ id: 'Player 1', token: '🦁', wins: 0, winArray: [] });
    this.player2 = new Player({ id: 'Player 2', token: '🐯', wins: 0, winArray: [] });
    this.turn = true;
      // true means player 1's turn false means player 2's turn, when a player wins the boolean should change so that the losing player goes first in the next round.
    this.gameWon = false;
    // need function to discern whether game is won, need to tell if 3 of the same tokens form a row in order it to be true, if true add 1 win to the array of the winning player
  }
  gameDone() {
    if ((sq1.innerText === "🦁" && sq2.innerText === "🦁" && sq3.innerText === "🦁") || (sq4.innerText === "🦁" && sq5.innerText === "🦁" && sq6.innerText === "🦁") || (sq7.innerText === "🦁" && sq8.innerText === "🦁" && sq9.innerText === "🦁") || (sq1.innerText === "🦁" && sq4.innerText === "🦁" && sq7.innerText === "🦁") || (sq2.innerText === "🦁" && sq5.innerText === "🦁" && sq8.innerText === "🦁") || (sq3.innerText === "🦁" && sq6.innerText === "🦁" && sq9.innerText === "🦁") || (sq1.innerText === "🦁" && sq5.innerText === "🦁" && sq9.innerText === "🦁") || (sq3.innerText === "🦁" && sq5.innerText === "🦁" && sq7.innerText === "🦁")) {
      this.gameWon = true;
      this.player1.wins += 1;
      lftHeader.innerText = `${this.player1.wins} wins`;
      gameAlert.innerText = `🦁 Wins!`;
      setTimeout(function() {newGame();}, 3000);
    } else if ((sq1.innerText === "🐯" && sq2.innerText === "🐯" && sq3.innerText === "🐯") || (sq4.innerText === "🐯" && sq5.innerText === "🐯" && sq6.innerText === "🐯") || (sq7.innerText === "🐯" && sq8.innerText === "🐯" && sq9.innerText === "🐯") || (sq1.innerText === "🐯" && sq4.innerText === "🐯" && sq7.innerText === "🐯") || (sq2.innerText === "🐯" && sq5.innerText === "🐯" && sq8.innerText === "🐯") || (sq3.innerText === "🐯" && sq6.innerText === "🐯" && sq9.innerText === "🐯") || (sq1.innerText === "🐯" && sq5.innerText === "🐯" && sq9.innerText === "🐯") || (sq3.innerText === "🐯" && sq5.innerText === "🐯" && sq7.innerText === "🐯")) {
      this.gameWon = true;
      this.player2.wins += 1;
      rtHeader.innerText = `${this.player2.wins} wins`;
      gameAlert.innerText = `🐯 Wins!`;
      setTimeout(function() {newGame();}, 3000);
      this.gameWon = false;
    }else if ((sq1.innerText === "🦁" || sq1.innerText === "🐯") && (sq2.innerText === "🦁" || sq2.innerText === "🐯") && (sq3.innerText === "🦁" || sq3.innerText === "🐯") && (sq4.innerText === "🦁" || sq4.innerText === "🐯") && (sq5.innerText === "🦁" || sq5.innerText === "🐯") && (sq6.innerText === "🦁" || sq6.innerText === "🐯") && (sq7.innerText === "🦁" || sq7.innerText === "🐯") && (sq8.innerText === "🦁" || sq8.innerText === "🐯") && (sq9.innerText === "🦁" || sq9.innerText === "🐯")) {
      gameAlert.innerText = `It's a draw!`;
      setTimeout(function() {newGame();}, 3000);
    }
  }
}
