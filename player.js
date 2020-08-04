class Player {
  constructor(object) {
    this.id = object.id;
    this.token = object.token;
    this.wins = 0;
    this.boardArray= [];
  }
  createWin() {
    var winValues = [sq1.innerText,  sq2.innerText, sq3.innerText, sq4.innerText, sq5.innerText, sq6.innerText, sq7.innerText, sq8.innerText, sq9.innerText];
    this.boardArray.push(winValues);
  }
  saveWinsToStorage(playerID) {
    var wins = JSON.stringify(this.wins);
    localStorage.setItem(`${playerID}wins`, wins);
    var boards = JSON.stringify(this.boardArray);
    localStorage.setItem(`${playerID}boards`, boards);
  }
  retrieveWinsFromStorage(playerID) {
    var wins = localStorage.getItem(`${playerID}wins`);
    this.wins = JSON.parse(wins);
    var boards = localStorage.getItem(`${playerID}boards`);
    this.boardArray = JSON.parse(boards);
  }
}
