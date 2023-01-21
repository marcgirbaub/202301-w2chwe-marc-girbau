import Board from "./classes/Board/Board";
import boardElement from "./global-variables/global-variables";

const startApp = () => {
  const board = new Board();
  board.randomizeBoard();
  board.transformBoard();
  board.updateBoard(boardElement);
};

startApp();
