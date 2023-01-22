const startApp = (board, boardElement) => {
  board.randomizeBoard();

  board.transformBoard();

  board.updateBoard(boardElement);
};

export default startApp;
