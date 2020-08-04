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
      this.displayP1win();
      setTimeout(function() {currentGame.resetBoard();}, 1500);
    } else if ((sq1.innerText === "🐯" && sq2.innerText === "🐯" && sq3.innerText === "🐯") || (sq4.innerText === "🐯" && sq5.innerText === "🐯" && sq6.innerText === "🐯") || (sq7.innerText === "🐯" && sq8.innerText === "🐯" && sq9.innerText === "🐯") || (sq1.innerText === "🐯" && sq4.innerText === "🐯" && sq7.innerText === "🐯") || (sq2.innerText === "🐯" && sq5.innerText === "🐯" && sq8.innerText === "🐯") || (sq3.innerText === "🐯" && sq6.innerText === "🐯" && sq9.innerText === "🐯") || (sq1.innerText === "🐯" && sq5.innerText === "🐯" && sq9.innerText === "🐯") || (sq3.innerText === "🐯" && sq5.innerText === "🐯" && sq7.innerText === "🐯")) {
      this.gameWon = true;
      this.player2.wins += 1;
      rtHeader.innerText = `${this.player2.wins} wins`;
      gameAlert.innerText = `🐯 Wins!`;
      this.player2.createWin();
      this.player2.saveWinsToStorage("player2");
      this.displayP2win();
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
  displayP1win() {
    var boards = localStorage.getItem("player1boards");
    this.player1.boardArray = JSON.parse(boards);
    var p1Array = this.player1.boardArray;
    lftGrid.innerHTML = "";
      for (var i=0; i< p1Array.length; i++) {
        lftGrid.insertAdjacentHTML('beforeend', `<section class="mini-game">
            <div class="mini-square">${p1Array[i][0]}</div>
            <div class="mini-square">${p1Array[i][1]}</div>
            <div class="mini-square">${p1Array[i][2]}</div>
            <div class="mini-square">${p1Array[i][3]}</div>
            <div class="mini-square">${p1Array[i][4]}</div>
            <div class="mini-square">${p1Array[i][5]}</div>
            <div class="mini-square">${p1Array[i][6]}</div>
            <div class="mini-square">${p1Array[i][7]}</div>
            <div class="mini-square">${p1Array[i][8]}</div>
          </section>` );
        }
    }
    displayP2win() {
      var boards = localStorage.getItem("player2boards");
      this.player2.boardArray = JSON.parse(boards);
      var p2Array = this.player2.boardArray;
      rtGrid.innerHTML = "";
        for (var i=0; i< p2Array.length; i++) {
          rtGrid.insertAdjacentHTML('beforeend', `<section class="mini-game">
              <div class="mini-square">${p2Array[i][0]}</div>
              <div class="mini-square">${p2Array[i][1]}</div>
              <div class="mini-square">${p2Array[i][2]}</div>
              <div class="mini-square">${p2Array[i][3]}</div>
              <div class="mini-square">${p2Array[i][4]}</div>
              <div class="mini-square">${p2Array[i][5]}</div>
              <div class="mini-square">${p2Array[i][6]}</div>
              <div class="mini-square">${p2Array[i][7]}</div>
              <div class="mini-square">${p2Array[i][8]}</div>
            </section>` );
          }
      }
}
