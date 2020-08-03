class Player {
  constructor(object) {
    this.id = object.id;
    this.token = object.token;
    this.wins = 0;
    this.boardArray= [];
  }
  saveWinsToStorage() {
    if (gameAlert.innerText === `🦁 Wins!`) {
      var player = currentGame.player1;
      var playerString = JSON.stringify(player);
      localStorage.set('player1Storage', playerString);
    } else if (gameAlert.innerText === `🐯 Wins!`) {
      var player = currentGame.player2;
      var playerString = JSON.stringify(player);
      localStorage.set('player2Storage', playerString);
    }
  }
  // retrieveWinsFromStorage() {
  //   var wins = JSON.parse()
  //   this.wins =
  //
  // }
}
