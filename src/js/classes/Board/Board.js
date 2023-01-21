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

  transformBoard() {
    const newBoard = [];

    this.board.forEach((row) => {
      const insideRow = [];
      row.forEach((column) => {
        if (column.alive) {
          insideRow.push(1);
        } else insideRow.push(0);
      });
      newBoard.push(insideRow);
    });

    this.board = newBoard;
  }

  buildNextGenerationBoard() {
    const nextGeneration = this.board.map((row) => [...row]);

    this.board.forEach((row, positionRow) => {
      row.forEach((column, positionColumn) => {
        const isCurrentCellAlive = column;
        let numberOfNeighbours = 0;

        const sub3x3Array = this.getSubArray(
          this.board,
          positionRow,
          positionColumn
        );

        sub3x3Array.forEach((subcolumn) => {
          subcolumn.forEach((subcell) => {
            if (subcell) {
              numberOfNeighbours++;
            }
          });
        });

        if (isCurrentCellAlive) {
          numberOfNeighbours -= 1;
        }

        if (column && (numberOfNeighbours < 2 || numberOfNeighbours > 3)) {
          nextGeneration[positionRow][positionColumn] = 0;
        }

        if (!column && numberOfNeighbours === 3) {
          nextGeneration[positionRow][positionColumn] = 1;
        }
      });
    });

    this.nextGenerationBoard = nextGeneration;

    this.board = this.nextGenerationBoard.map((row) => [...row]);
  }
}

export default Board;
