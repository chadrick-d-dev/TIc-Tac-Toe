class Game {
  constructor() {
    this.id = Date.now();
    this.player1 = new Player({ id: 'player1', token: '🦁' });
    this.player2 = new Player({ id: 'player2', token: '🐯' });
    this.turn = true;
    this.gameWon = false;
    this.alert = "";
    this.p1wins = "0 wins";
    this.p2wins = "0 wins";
    this.p1won = false;
    this.p2won = false;
    this.gameBoard = ["", "", "", "", "", "", "", "", ""];
  }
  trackGameBoard() {
    var boardValues = [sq1.innerText,  sq2.innerText, sq3.innerText, sq4.innerText, sq5.innerText, sq6.innerText, sq7.innerText, sq8.innerText, sq9.innerText];
    this.gameBoard = boardValues;
  }
  winConditions() {
    var board = this.gameBoard;
    if ((board[0] === '🦁' && board[1] === '🦁' && board[2] === '🦁') || (board[3] === '🦁' && board[4] === '🦁' && board[5] === '🦁') || (board[6] === '🦁' && board[7] === '🦁' && board[8] === '🦁') || (board[0] === '🦁' && board[3] === '🦁' && board[6] === '🦁') || (board[1] === '🦁' && board[4] === '🦁' && board[7] === '🦁') || (board[2] === '🦁' && board[5] === '🦁' && board[8] === '🦁') || (board[0] === '🦁' && board[4] === '🦁' && board[8] === '🦁') || (board[2] === '🦁' && board[4] === '🦁' && board[6] === '🦁')) {
      this.gameWon = true;
      // this.p1won = true;
      this.player1.wins += 1;
      this.player1.boards.push(this.gameBoard);
      this.alert = `🦁 Wins!`;
      this.p1wins = `${this.player1.wins} wins`;
      this.player1.saveWinsToStorage("player1");
      updateTitles();
      displayWin(this.player1, lftGrid);
      setTimeout(function() {resetBoard();}, 1500);
    }else if ((board[0] === '🐯' && board[1] === '🐯' && board[2] === '🐯') || (board[3] === '🐯' && board[4] === '🐯' && board[5] === '🐯') || (board[6] === '🐯' && board[7] === '🐯' && board[8] === '🐯') || (board[0] === '🐯' && board[3] === '🐯' && board[6] === '🐯') || (board[1] === '🐯' && board[4] === '🐯' && board[7] === '🐯') || (board[2] === '🐯' && board[5] === '🐯' && board[8] === '🐯') || (board[0] === '🐯' && board[4] === '🐯' && board[8] === '🐯') || (board[2] === '🐯' && board[4] === '🐯' && board[6] === '🐯')) {
      this.gameWon = true;
      this.player2.wins += 1;
      this.player2.boards.push(this.gameBoard);
      this.alert = `🐯 Wins!`;
      this.p2wins = `${this.player2.wins} wins`;
      this.player2.saveWinsToStorage("player2");
      displayWin(this.player2, rtGrid);
      updateTitles();
      setTimeout(function() {resetBoard();}, 1500);
    }
  }
  drawCondition() {
    var board = this.gameBoard;
    if ((board[0] === "🦁" || board[0] === "🐯") && (board[1] === "🦁" || board[1] === "🐯") && (board[2] === "🦁" || board[2] === "🐯") && (board[3] === "🦁" || board[3] === "🐯") && (board[4] === "🦁" || board[4] === "🐯") && (board[5] === "🦁" || board[5] === "🐯") && (board[6] === "🦁" || board[6] === "🐯") && (board[7] === "🦁" || board[7] === "🐯") && (board[8] === "🦁" || board[8] === "🐯")) {
      this.gameWon = true;
      this.alert = `It's a draw!`;
      updateTitles();
      setTimeout(function() {resetBoard();}, 1500);
    }
  }

}
