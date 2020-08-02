var gameGrid = document.querySelector(".game-grid");
var gameSquare = document.querySelector(".game-square");
var square1 = document.querySelector("#square-1");
var square2 = document.querySelector("#square-2");
var square3 = document.querySelector("#square-3");
var square4 = document.querySelector("#square-4");
var square5 = document.querySelector("#square-5");
var square6 = document.querySelector("#square-6");
var square7 = document.querySelector("#square-7");
var square8 = document.querySelector("#square-8");
var square9 = document.querySelector("#square-9");
var turn = true;

square1.addEventListener("click", sqClick);
square2.addEventListener("click", sqClick);
square3.addEventListener("click", sqClick);
square4.addEventListener("click", sqClick);
square5.addEventListener("click", sqClick);
square6.addEventListener("click", sqClick);
square7.addEventListener("click", sqClick);
square8.addEventListener("click", sqClick);
square9.addEventListener("click", sqClick);

function sqClick(event) {
  var target = event.target;
  if (target.innerText === "" && turn === true) {
    target.innerText = "🐯";
    turn = false;
  } else if (target.innerText === "" && turn === false) {
    target.innerText = "🦁";
    turn = true;
  }
}

// function sq2Click(event) {
//   if (square2.innerText === "" && turn === true) {
//     square1.innerText = "🐯";
//     turn = false;
//   } else if (square2.innerText === "" && turn === false) {
//     square1.innerText = "🦁";
//     turn = true;
//   }
// }
//
// function sq3Click(event) {
//   if (square3.innerText === "" && turn === true) {
//     square3.innerText = "🐯";
//     turn = false;
//   } else if (square3.innerText === "" && turn === false) {
//     square3.innerText = "🦁";
//     turn = true;
//   }
// }
//
// function sq4Click(event) {
//   if (square4.innerText === "" && turn === true) {
//     square4.innerText = "🐯";
//     turn = false;
//   } else if (square4.innerText === "" && turn === false) {
//     square4.innerText = "🦁";
//     turn = true;
//   }
// }
//
// function sq5Click(event) {
//   if (square5.innerText === "" && turn === true) {
//     square5.innerText = "🐯";
//     turn = false;
//   } else if (square5.innerText === "" && turn === false) {
//     square5.innerText = "🦁";
//     turn = true;
//   }
// }
//
// function sq6Click(event) {
//   if (square6.innerText === "" && turn === true) {
//     square6.innerText = "🐯";
//     turn = false;
//   } else if (square6.innerText === "" && turn === false) {
//     square6.innerText = "🦁";
//     turn = true;
//   }
// }
//
// function sq7Click(event) {
//   if (square7.innerText === "" && turn === true) {
//     square7.innerText = "🐯";
//     turn = false;
//   } else if (square7.innerText === "" && turn === false) {
//     square7.innerText = "🦁";
//     turn = true;
//   }
// }
//
// function sq8Click(event) {
//   if (square8.innerText === "" && turn === true) {
//     square8.innerText = "🐯";
//     turn = false;
//   } else if (square8.innerText === "" && turn === false) {
//     square8.innerText = "🦁";
//     turn = true;
//   }
// }
//
// function sq9Click(event) {
//   if (square9.innerText === "" && turn === true) {
//     square9.innerText = "🐯";
//     turn = false;
//   } else if (square9.innerText === "" && turn === false) {
//     square9.innerText = "🦁";
//     turn = true;
//   }
// }
