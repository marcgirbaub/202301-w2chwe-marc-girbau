import Board from "./classes/Board/Board";
import boardElement from "./global-variables/global-variables";

const mainContainer = document.getElementsByClassName("main-container")[0];

const startApp = () => {
  const board = new Board();

  board.randomizeBoard();

  board.transformBoard();

  board.updateBoard(boardElement);

  const update = () => {
    board.buildNextGenerationBoard();
    board.updateBoard(boardElement);
  };

  let updateBoard;
  updateBoard = setInterval(update, 300);
};

startApp();
