class Game {
  constructor() {
    this.id = Date.now();
    this.player1 = new Player({ id: 'Player 1', token: '🦁' });
    this.player2 = new Player({ id: 'Player 2', token: '🐯' });
    this.turn = true;
    this.player1Wins = false;
    this.player2Wins = false;
    this.gameWon = false;
  }
  gameDone() {
    if ((sq1.innerText === "🦁" && sq2.innerText === "🦁" && sq3.innerText === "🦁") || (sq4.innerText === "🦁" && sq5.innerText === "🦁" && sq6.innerText === "🦁") || (sq7.innerText === "🦁" && sq8.innerText === "🦁" && sq9.innerText === "🦁") || (sq1.innerText === "🦁" && sq4.innerText === "🦁" && sq7.innerText === "🦁") || (sq2.innerText === "🦁" && sq5.innerText === "🦁" && sq8.innerText === "🦁") || (sq3.innerText === "🦁" && sq6.innerText === "🦁" && sq9.innerText === "🦁") || (sq1.innerText === "🦁" && sq5.innerText === "🦁" && sq9.innerText === "🦁") || (sq3.innerText === "🦁" && sq5.innerText === "🦁" && sq7.innerText === "🦁")) {
      this.gameWon = true;
      this.player1.wins += 1;
      lftHeader.innerText = `${this.player1.wins} wins`;
      gameAlert.innerText = `🦁 Wins!`;
      setTimeout(function() {currentGame.resetBoard();}, 3000);
    } else if ((sq1.innerText === "🐯" && sq2.innerText === "🐯" && sq3.innerText === "🐯") || (sq4.innerText === "🐯" && sq5.innerText === "🐯" && sq6.innerText === "🐯") || (sq7.innerText === "🐯" && sq8.innerText === "🐯" && sq9.innerText === "🐯") || (sq1.innerText === "🐯" && sq4.innerText === "🐯" && sq7.innerText === "🐯") || (sq2.innerText === "🐯" && sq5.innerText === "🐯" && sq8.innerText === "🐯") || (sq3.innerText === "🐯" && sq6.innerText === "🐯" && sq9.innerText === "🐯") || (sq1.innerText === "🐯" && sq5.innerText === "🐯" && sq9.innerText === "🐯") || (sq3.innerText === "🐯" && sq5.innerText === "🐯" && sq7.innerText === "🐯")) {
      this.gameWon = true;
      this.player2.wins += 1;
      rtHeader.innerText = `${this.player2.wins} wins`;
      gameAlert.innerText = `🐯 Wins!`;
      setTimeout(function() {currentGame.resetBoard();}, 3000);
    }else if ((sq1.innerText === "🦁" || sq1.innerText === "🐯") && (sq2.innerText === "🦁" || sq2.innerText === "🐯") && (sq3.innerText === "🦁" || sq3.innerText === "🐯") && (sq4.innerText === "🦁" || sq4.innerText === "🐯") && (sq5.innerText === "🦁" || sq5.innerText === "🐯") && (sq6.innerText === "🦁" || sq6.innerText === "🐯") && (sq7.innerText === "🦁" || sq7.innerText === "🐯") && (sq8.innerText === "🦁" || sq8.innerText === "🐯") && (sq9.innerText === "🦁" || sq9.innerText === "🐯")) {
      this.gameWon = true;
      gameAlert.innerText = `It's a draw!`;
      setTimeout(function() {currentGame.resetBoard();}, 3000);
    }
  }
  resetBoard() {
    this.turn = true;
    this.gameWon = false;
    gameAlert.innerText = `It's 🐯's Turn`
    sq1.innerText = "";
    sq2.innerText = "";
    sq3.innerText = "";
    sq4.innerText = "";
    sq5.innerText = "";
    sq6.innerText = "";
    sq7.innerText = "";
    sq8.innerText = "";
    sq9.innerText = "";
  }
}
