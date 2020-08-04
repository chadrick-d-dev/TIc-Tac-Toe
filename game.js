class Game {
  constructor(sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9) {
    this.id = Date.now();
    this.sq1 = sq1;
    this.sq2 = sq2;
    this.sq3 = sq3;
    this.sq4 = sq4;
    this.sq5 = sq5;
    this.sq6 = sq6;
    this.sq7 = sq7;
    this.sq8 = sq8;
    this.sq9 = sq9;
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
  createNewIdea() {
      var currentIdea = new Idea(titleInput.value, bodyInput.value)
      savedIdeas.push(currentIdea);
      currentIdea.saveToStorage(currentIdea);
      titleInput.value = "";
      bodyInput.value = "";
      displayNewIdea(currentIdea);
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
