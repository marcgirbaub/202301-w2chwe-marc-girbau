import Board from "./classes/Board/Board";
import boardElement from "./global-variables/global-variables";

const playButtonEl = document.getElementsByClassName(
  "button__interactive--play"
)[0];
const stopButtonEl = document.getElementsByClassName(
  "button__interactive--stop"
)[0];
const randomButtonEl = document.getElementsByClassName(
  "button__interactive--randomize"
)[0];

const startApp = () => {
  board.randomizeBoard();

  board.transformBoard();

  board.updateBoard(boardElement);
};

let gaming = false;
let updateBoard;
const board = new Board();

const update = () => {
  board.buildNextGenerationBoard();
  board.updateBoard(boardElement);
};

startApp();

playButtonEl.addEventListener("click", () => {
  if (!gaming) {
    updateBoard = setInterval(update, 300);
  }

  gaming = true;
});

stopButtonEl.addEventListener("click", () => {
  clearInterval(updateBoard);
  gaming = false;
});

randomButtonEl.addEventListener("click", () => {
  clearInterval(updateBoard);
  board.randomizeBoard();
  board.transformBoard();
  board.updateBoard(boardElement);
  gaming = false;
});
