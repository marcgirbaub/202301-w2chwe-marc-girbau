import Cell from "../Cell/Cell";

class Board {
  columns;
  rows;
  board;
  nextGenerationBoard;

  constructor(columns = 20, rows = 20) {
    this.columns = columns;
    this.rows = rows;
  }

  randomizeBoard() {
    this.board = new Array(this.rows).fill(null);

    this.board.forEach((row, position) => {
      this.board[position] = new Array(this.columns).fill(null);

      this.board[position].forEach((column, columnIndex) => {
        this.board[position][columnIndex] = new Cell(
          Math.floor(Math.random() * 2) === 1
        );
      });
    });
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

  updateBoard(board) {
    board.innerHTML = "";
    this.board.forEach((row, rowIndex) => {
      const rowElement = document.createElement("div");
      rowElement.classList.add("row");

      row.forEach((cell, cellIndex) => {
        const cellElement = document.createElement("button");
        cellElement.classList.add("button--board");
        cellElement.addEventListener("click", () => {
          if (cell) {
            cellElement.classList.add("dead");
            this.board[rowIndex][cellIndex] = 0;
          } else {
            cellElement.classList.add("alive");
            this.board[rowIndex][cellIndex] = 1;
          }
        });
        if (cell) {
          cellElement.classList.add("alive");
        } else {
          cellElement.classList.add("dead");
        }

        rowElement.appendChild(cellElement);
      });

      board.appendChild(rowElement);
    });
  }
}

export default Board;
