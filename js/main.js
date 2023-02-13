/*----- constants -----*/
GAME_WIDTH = 4;
/*----- state variables -----*/
const game = {
  screen: "game",
  playerTurn: "0",
  board: [
    //* array of arrays
    ["?", "?", "?", "?"], //? board[0]
    ["?", "?", "?", "?"],
    ["?", "0", "?", "?"],
    ["1", "0", "1", "?"],
  ],
};

/*----- cached elements  -----*/
const welcomeScreen = document.querySelector("#welcome");
const gameScreen = document.querySelector("#game");
const scoreScreen = document.querySelector("#score");
const screens = [welcomeScreen, gameScreen, scoreScreen];
const board = document.querySelector("tbody");
/*----- event listeners -----*/

function clickStartButton() {
  game.screen = "game";
  renderAll();
}

function clickScoreButton() {
  game.screen = "score";
  renderAll();
}

// const A = [3, 1, 5, 0];
// let answer = -1;
// //? element pos > 3 -> 2
// for (let i = 0; i < A.length; i++) {
//   const element = A[i];
//   if (element > 3) {
//     answer = i;
//     break;
//   }
// }
// console.log(answer); // -> 2
function changePlayerTurn() {
  if (game.playerTurn === "0") {
    game.playerTurn = "1";
  } else {
    game.playerTurn = "0";
  }
}

function checkPlayerTurnStartingFrom0() {
  //? setup
  game.playerTurn = "0";

  //? testing this function
  changePlayerTurn();

  //? eyeball check
  console.log(game.playerTurn === "1");
}

const clickDropButton = (col) => () => {
  console.log("drop");
  // const col = 0;

  for (let i = 0; i < GAME_WIDTH; i++) {
    const pos = GAME_WIDTH - i - 1;
    if (game.board[pos][col] === "?") {
      game.board[pos][col] = game.playerTurn;
      break;
    }
  }
  changePlayerTurn();

  renderAll();
};

/*----- functions -----*/
function renderScreen() {
  // welcomeScreen.style.display = "none";
  // gameScreen.style.display = "none";
  // scoreScreen.style.display = "none"; //? block will show
  screens.forEach((s) => s.classList.add("hide"));
  const screen = document.querySelector("#" + game.screen);
  screen.classList.remove("hide");
}

function renderBoard() {
  board.textContent = ""; //? empty the previous one
  for (let i = 0; i < GAME_WIDTH; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < GAME_WIDTH; j++) {
      const td = document.createElement("td");
      td.innerText = game.board[i][j];
      tr.appendChild(td);
    }
    board.appendChild(tr);
  }
}

function renderAll() {
  renderScreen();
  renderBoard();
}

function main() {
  const startButton = document.querySelector("#startButton");
  startButton.addEventListener("click", clickStartButton);

  const scoreButton = document.querySelector("#scoreButton");
  scoreButton.addEventListener("click", clickScoreButton);

  const dropButton = document.querySelectorAll(".drop");
  for (let i = 0; i < GAME_WIDTH; i++) {
    dropButton[i].addEventListener("click", clickDropButton(i));
  }
  renderAll();
}

main();
