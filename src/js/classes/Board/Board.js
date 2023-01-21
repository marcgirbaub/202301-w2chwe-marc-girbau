import Cell from "../Cell/Cell";

class Board {
  columns = 40;
  rows = 40;
  board;
  nextGenerationBoard;

  randomizeBoard() {
    this.board = new Array(this.columns).fill(
      new Array(this.rows)
        .fill(null)
        .map(() => new Cell(Math.floor(Math.random() * 2) === 1))
    );
  }
}

export default Board;
