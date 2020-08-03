class Player {
  constructor(object) {
    this.id = object.id;
    this.token = object.token;
    this.wins = 0;
    this.boardArray= [];
  }
  saveWinsToStorage() {
    if (gameAlert.innerText === `🦁 Wins!`) {
      var winsToSave = [currentGame.player1.wins, currentGame.player1.boardArray];
      var winsString = JSON.stringify(winsToSave);
      localStorage.set("player1Storage", winsString);
    } else if (gameAlert.innerText === `🐯 Wins!`) {
      var winsToSave = [currentGame.player2.wins, currentGame.player2.boardArray];
      var winsString = JSON.stringify(winsToSave);
      localStorage.set("player2Storage", winsString);
    }
  }
  // retrieveWinsFromStorage() {
  //   var wins = JSON.parse()
  //   this.wins =
  //
  // }
}
