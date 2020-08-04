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
var rtGrid = document.querySelector(".right-win-grid");
var lftGrid = document.querySelector(".left-win-grid");
var currentGame;

window.onload = (currentGame = new Game());
gameGrid.addEventListener("click", sqClick);

function sqClick(event) {
  var target = event.target;
  if (target.innerText === "" && currentGame.turn === true && currentGame.gameWon === false) {
    target.innerText = "🐯";
    currentGame.trackGameBoard();
    currentGame.turn = false;
    gameAlert.innerText = `It's 🦁's turn`;
    currentGame.winConditions();
    currentGame.drawCondition();
  } else if (target.innerText === "" && currentGame.turn === false && currentGame.gameWon === false) {
    target.innerText = "🦁";
    currentGame.trackGameBoard();
    currentGame.turn = true;
    gameAlert.innerText = `It's 🐯's Turn`;
    currentGame.winConditions();
    currentGame.drawCondition();
  }
}

function resetBoard() {
  currentGame.turn = true;
  currentGame.gameWon = false;
  currentGame.clearGameBoard();
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
function displayWin(player, side) {
    player.retrieveWinsFromStorage(player.id);
    var pBoards = player.boards;
    side.innerHTML = "";
      for (var i=0; i< pBoards.length; i++) {
        side.insertAdjacentHTML('beforeend', `<section class="mini-game">
            <div class="mini-square">${pBoards[i][0]}</div>
            <div class="mini-square">${pBoards[i][1]}</div>
            <div class="mini-square">${pBoards[i][2]}</div>
            <div class="mini-square">${pBoards[i][3]}</div>
            <div class="mini-square">${pBoards[i][4]}</div>
            <div class="mini-square">${pBoards[i][5]}</div>
            <div class="mini-square">${pBoards[i][6]}</div>
            <div class="mini-square">${pBoards[i][7]}</div>
            <div class="mini-square">${pBoards[i][8]}</div>
          </section>` );
      }
  }

  function updateTitles() {
    lftHeader.innerText = currentGame.p1wins;
    rtHeader.innerText = currentGame.p2wins;
    gameAlert.innerText = currentGame.alert;
  }
