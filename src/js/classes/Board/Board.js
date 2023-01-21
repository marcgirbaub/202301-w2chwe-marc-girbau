import Cell from "../Cell/Cell";

class Board {
  columns = 20;
  rows = 20;
  board;
  nextGenerationBoard;

  randomizeBoard() {
    this.board = new Array(this.columns)
      .fill(null)
      .map(() => new Cell(Math.floor(Math.random() * 2) === 1));
  }
}

export default Board;
