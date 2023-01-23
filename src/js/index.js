import Board from "./classes/Board/Board";
import Cell from "./classes/Cell/Cell";
import calidscopePattern from "./patterns/calidoscope-pattern";

import {
  boardElement,
  playButtonEl,
  stopButtonEl,
  randomButtonEl,
  eraseButtonEl,
  calidoscopePatternButtonEl,
} from "./global-variables/global-variables";

import startApp from "./functions/startApp/startApp";

let gaming = false;
let updateBoard;
const board = new Board();

startApp(board, boardElement);

playButtonEl.addEventListener("click", () => {
  if (!gaming) {
    updateBoard = setInterval(() => {
      board.buildNextGenerationBoard();
      board.updateBoard(boardElement);
    }, 300);
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
