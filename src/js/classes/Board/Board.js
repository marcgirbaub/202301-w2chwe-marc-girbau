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

  getSubArray(board, row, column) {
    const upperRow = board[row - 1] || [];
    const middleRow = board[row];
    const lowerRow = board[row + 1] || [];

    const upperSlice = upperRow.slice((column || 1) - 1, column + 2);
    const middleSlice = middleRow.slice((column || 1) - 1, column + 2);
    const lowerSlice = lowerRow.slice((column || 1) - 1, column + 2);

    const subBoard = [upperSlice, middleSlice, lowerSlice];

    return subBoard;
  }
}

export default Board;
