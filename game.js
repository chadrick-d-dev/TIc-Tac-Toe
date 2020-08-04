class Game {
  constructor() {
    this.id = Date.now();
    this.player1 = new Player({ id: 'player1', token: '🦁' });
    this.player2 = new Player({ id: 'player2', token: '🐯' });
    this.turn = true;
    this.gameWon = false;
  }
  sqClick(event) {
    var target = event.target;
    if (target.innerText === "" && currentGame.turn === true && currentGame.gameWon === false) {
      target.innerText = "🐯";
      currentGame.turn = false;
      gameAlert.innerText = `It's 🦁's turn`;
      currentGame.gameDone(event);
    } else if (target.innerText === "" && currentGame.turn === false && currentGame.gameWon === false) {
      target.innerText = "🦁";
      currentGame.turn = true;
      gameAlert.innerText = `It's 🐯's Turn`;
      currentGame.gameDone(event);
    }
  }
  gameDone() {
    if ((sq1.innerText === "🦁" && sq2.innerText === "🦁" && sq3.innerText === "🦁") || (sq4.innerText === "🦁" && sq5.innerText === "🦁" && sq6.innerText === "🦁") || (sq7.innerText === "🦁" && sq8.innerText === "🦁" && sq9.innerText === "🦁") || (sq1.innerText === "🦁" && sq4.innerText === "🦁" && sq7.innerText === "🦁") || (sq2.innerText === "🦁" && sq5.innerText === "🦁" && sq8.innerText === "🦁") || (sq3.innerText === "🦁" && sq6.innerText === "🦁" && sq9.innerText === "🦁") || (sq1.innerText === "🦁" && sq5.innerText === "🦁" && sq9.innerText === "🦁") || (sq3.innerText === "🦁" && sq5.innerText === "🦁" && sq7.innerText === "🦁")) {
      this.gameWon = true;
      this.player1.wins += 1;
      lftHeader.innerText = `${this.player1.wins} wins`;
      gameAlert.innerText = `🦁 Wins!`;
      this.player1.createWin();
      currentGame.player1.saveWinsToStorage("player1");
      this.displayWin(this.player1, lftGrid);
      setTimeout(function() {currentGame.resetBoard();}, 1500);
    } else if ((sq1.innerText === "🐯" && sq2.innerText === "🐯" && sq3.innerText === "🐯") || (sq4.innerText === "🐯" && sq5.innerText === "🐯" && sq6.innerText === "🐯") || (sq7.innerText === "🐯" && sq8.innerText === "🐯" && sq9.innerText === "🐯") || (sq1.innerText === "🐯" && sq4.innerText === "🐯" && sq7.innerText === "🐯") || (sq2.innerText === "🐯" && sq5.innerText === "🐯" && sq8.innerText === "🐯") || (sq3.innerText === "🐯" && sq6.innerText === "🐯" && sq9.innerText === "🐯") || (sq1.innerText === "🐯" && sq5.innerText === "🐯" && sq9.innerText === "🐯") || (sq3.innerText === "🐯" && sq5.innerText === "🐯" && sq7.innerText === "🐯")) {
      this.gameWon = true;
      this.player2.wins += 1;
      rtHeader.innerText = `${this.player2.wins} wins`;
      gameAlert.innerText = `🐯 Wins!`;
      this.player2.createWin();
      this.player2.saveWinsToStorage("player2");
      this.displayWin(this.player2, rtGrid);
      setTimeout(function() {currentGame.resetBoard();}, 1500);
    }else if ((sq1.innerText === "🦁" || sq1.innerText === "🐯") && (sq2.innerText === "🦁" || sq2.innerText === "🐯") && (sq3.innerText === "🦁" || sq3.innerText === "🐯") && (sq4.innerText === "🦁" || sq4.innerText === "🐯") && (sq5.innerText === "🦁" || sq5.innerText === "🐯") && (sq6.innerText === "🦁" || sq6.innerText === "🐯") && (sq7.innerText === "🦁" || sq7.innerText === "🐯") && (sq8.innerText === "🦁" || sq8.innerText === "🐯") && (sq9.innerText === "🦁" || sq9.innerText === "🐯")) {
      this.gameWon = true;
      gameAlert.innerText = `It's a draw!`;
      setTimeout(function() {currentGame.resetBoard();}, 1500);
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
  displayWin(player, side) {
      player.retrieveWinsFromStorage(player.id);
      var pArray = player.boardArray;
      console.log(player);
      side.innerHTML = "";
        for (var i=0; i< pArray.length; i++) {
          side.insertAdjacentHTML('beforeend', `<section class="mini-game">
              <div class="mini-square">${pArray[i][0]}</div>
              <div class="mini-square">${pArray[i][1]}</div>
              <div class="mini-square">${pArray[i][2]}</div>
              <div class="mini-square">${pArray[i][3]}</div>
              <div class="mini-square">${pArray[i][4]}</div>
              <div class="mini-square">${pArray[i][5]}</div>
              <div class="mini-square">${pArray[i][6]}</div>
              <div class="mini-square">${pArray[i][7]}</div>
              <div class="mini-square">${pArray[i][8]}</div>
            </section>` );
        }
    }
}
