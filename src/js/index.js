import Board from "./classes/Board/Board";
import boardElement from "./global-variables/global-variables";
import Cell from "./classes/Cell/Cell";
import calidscopePattern from "./patterns/calidoscope-pattern";
import spacecraftPattern from "./patterns/spacecraft-pattern";

const playButtonEl = document.getElementsByClassName(
  "button__interactive--play"
)[0];
const stopButtonEl = document.getElementsByClassName(
  "button__interactive--stop"
)[0];
const randomButtonEl = document.getElementsByClassName(
  "button__interactive--randomize"
)[0];

const eraseButtonEl = document.getElementsByClassName(
  "button__interactive--erase"
)[0];

const calidoscopePatternButtonEl = document.getElementsByClassName(
  "button-pattern__calidoscope"
)[0];

const spacecraftPatternButtonEl = document.getElementsByClassName(
  "button-pattern__spacecraft"
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

eraseButtonEl.addEventListener("click", () => {
  clearInterval(updateBoard);

  board.board = new Array(board.rows).fill(null);

  board.board.forEach((row, position) => {
    board.board[position] = new Array(board.columns).fill(null);

    board.board[position].forEach((column, columnIndex) => {
      board.board[position][columnIndex] = new Cell(false);
    });
  });

  board.transformBoard();

  board.updateBoard(boardElement);
  gaming = false;
});

calidoscopePatternButtonEl.addEventListener("click", () => {
  clearInterval(updateBoard);
  board.board = calidscopePattern;
  board.updateBoard(boardElement);
  gaming = false;
});

spacecraftPatternButtonEl.addEventListener("click", () => {
  clearInterval(updateBoard);
  board.board = spacecraftPattern;
  board.updateBoard(boardElement);
  gaming = false;
});
