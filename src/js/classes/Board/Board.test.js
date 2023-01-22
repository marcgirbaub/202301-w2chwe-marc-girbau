import Board from "./Board";

describe("Given the randomize method of the Board class", () => {
  describe("When it is used to create a random board set", () => {
    const board = new Board();

    test("Then the number of rows of the board should be equal to 20", () => {
      const expectedNumberOfRows = 20;

      board.randomizeBoard();
      const numberOfRows = board.board.length;

      expect(numberOfRows).toBe(expectedNumberOfRows);
    });

    test("Then the number of columns of the first row of the board should be equal to 20", () => {
      const expectedNumberOfColumns = 20;

      board.randomizeBoard();
      const numberOfColumns = board.board[1].length;

      expect(numberOfColumns).toBe(expectedNumberOfColumns);
    });

    test("Then the number of columns of the last row of the board should be equal to 20", () => {
      const expectedNumberOfColumns = 20;

      board.randomizeBoard();
      const numberOfColumns = board.board[board.board.length - 1].length;

      expect(numberOfColumns).toBe(expectedNumberOfColumns);
    });
  });
});

describe("Given the getSubArray method of the Board class", () => {
  describe("When it receives the following board [[0,0,1,0,1], [1,1,0,0,1], [1,1,1,0,0], [1,0,0,1,0]] and the positions row 2, column 3", () => {
    test("Then it should return the following board [[0,0,1], [1,0,0], [0,1,0]]", () => {
      const board = new Board();
      const boardTable = [
        [0, 0, 1, 0, 1],
        [1, 1, 0, 0, 1],
        [1, 1, 1, 0, 0],
        [1, 0, 0, 1, 0],
      ];
      const expectedBoard = [
        [0, 0, 1],
        [1, 0, 0],
        [0, 1, 0],
      ];

      const subBoard = board.getSubArray(boardTable, 2, 3);

      expect(subBoard).toEqual(expectedBoard);
    });
  });

  describe("when it receives the following board [[0,0,1,0,1], [1,1,0,0,1], [1,1,1,0,0], [1,0,0,1,0]] and the position row 0, column 0", () => {
    test("Then it should return the following board [[], [0, 0], [1, 1]]", () => {
      const board = new Board();
      const boardTable = [
        [0, 0, 1, 0, 1],
        [1, 1, 0, 0, 1],
        [1, 1, 1, 0, 0],
        [1, 0, 0, 1, 0],
      ];
      const expectedBoard = [[], [0, 0], [1, 1]];

      const subBoard = board.getSubArray(boardTable, 0, 0);

      expect(subBoard).toEqual(expectedBoard);
    });
  });
});

describe("Given the transformBoard method of the Board class", () => {
  describe("When it receives the following board [[{alive : false}, {alive : true}, {alive : false}], [{alive : false}, {alive : true}, {alive : false}], [{alive : true}, {alive : false}, {alive : true}]]", () => {
    test("Then it should transform the board property to the following [[0, 1, 0], [0, 1, 0], [1, 0, 1]]", () => {
      const board = new Board();
      board.board = [
        [{ alive: false }, { alive: true }, { alive: false }],
        [{ alive: false }, { alive: true }, { alive: false }],
        [{ alive: true }, { alive: false }, { alive: true }],
      ];
      const expectedBoard = [
        [0, 1, 0],
        [0, 1, 0],
        [1, 0, 1],
      ];

      board.transformBoard();

      const newBoard = board.board;

      expect(newBoard).toEqual(expectedBoard);
    });
  });
});

describe("Given the method buildNextGenerationBoard of the Board class", () => {
  describe("When it receives the following board [[0, 1, 0], [0, 1, 0], [1, 0, 1]]", () => {
    test("Then it should set the board of the class to the following [[0, 0, 0], [1, 1, 1], [0, 1, 0]]", () => {
      const board = new Board();
      board.board = [
        [0, 1, 0],
        [0, 1, 0],
        [1, 0, 1],
      ];
      const expectedBoard = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0],
      ];

      board.buildNextGenerationBoard();
      const newGenerationBoard = board.nextGenerationBoard;

      expect(newGenerationBoard).toEqual(expectedBoard);
    });
  });
});
