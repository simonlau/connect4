/*----- constants -----*/
GAME_WIDTH = 4;
/*----- state variables -----*/
const game = {
  screen: "game",
  board: [
    //* array of arrays
    ["0", "?", "1", "?"], //? board[0]
    ["?", "?", "1", "?"],
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
  renderAll();
}

main();
