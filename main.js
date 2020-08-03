var gameGrid = document.querySelector(".game-grid");
var gameSquare = document.querySelector(".game-square");
var sq1 = document.querySelector("#square-1");
var sq2 = document.querySelector("#square-2");
var sq3 = document.querySelector("#square-3");
var sq4 = document.querySelector("#square-4");
var sq5 = document.querySelector("#square-5");
var sq6 = document.querySelector("#square-6");
var sq7 = document.querySelector("#square-7");
var sq8 = document.querySelector("#square-8");
var sq9 = document.querySelector("#square-9");
var rtHeader = document.querySelector(".right-title-header");
var lftHeader = document.querySelector(".left-title-header");
var gameAlert = document.querySelector(".game-alert");
var currentGame = new Game();

sq1.addEventListener("click", sqClick);
sq2.addEventListener("click", sqClick);
sq3.addEventListener("click", sqClick);
sq4.addEventListener("click", sqClick);
sq5.addEventListener("click", sqClick);
sq6.addEventListener("click", sqClick);
sq7.addEventListener("click", sqClick);
sq8.addEventListener("click", sqClick);
sq9.addEventListener("click", sqClick);

function sqClick(event) {
  var target = event.target;
  if (target.innerText === "" && currentGame.turn === true) {
    target.innerText = "🐯";
    currentGame.turn = false;
    gameAlert.innerText = `It's 🦁's turn`;
    currentGame.gameDone(event);
  } else if (target.innerText === "" && currentGame.turn === false) {
    target.innerText = "🦁";
    currentGame.turn = true;
    gameAlert.innerText = `It's 🐯's Turn`;
    currentGame.gameDone(event);
  }
}

function newGame() {
  currentGame.turn = true;
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
