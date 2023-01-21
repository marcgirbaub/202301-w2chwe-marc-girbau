import Cell from "../Cell/Cell";

class Board {
  columns;
  rows;
  board;
  nextGenerationBoard;

  constructor(columns = 40, rows = 40) {
    this.columns = columns;
    this.rows = rows;
  }

  randomizeBoard() {
    this.board = new Array(this.columns).fill(
      new Array(this.rows)
        .fill(null)
        .map(() => new Cell(Math.floor(Math.random() * 2) === 1))
    );
  }

  getSubArray(row, column) {
    const newBoard = this.board.slice(row - 1, row + 2);

    newBoard.forEach((array, position) => {
      newBoard[position] = array.slice(column - 1, column + 2);
      return newBoard;
    });

    return newBoard;
  }
}

export default Board;
