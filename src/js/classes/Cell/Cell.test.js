import Cell from "./Cell";

describe("Given the die method of a cell", () => {
  describe("When the cell is alive and it should die next using the die method", () => {
    test("Then the property alive of this cell should be equal to false", () => {
      const cell = new Cell(true);
      const expectedState = false;

      cell.die();
      const cellState = cell.alive;

      expect(cellState).toBe(expectedState);
    });
  });

  describe("When the cell state is not defined and it should die next using the die method", () => {
    test("Then the prpoerty alive of this cell should be equal to false", () => {
      const cell = new Cell();
      const expectedState = false;

      cell.die();
      const cellState = cell.alive;

      expect(cellState).toBe(expectedState);
    });
  });

  describe("When the cell is already dead and the method die is used", () => {
    test("Then the property alive of this cell should remain false", () => {
      const cell = new Cell(false);
      const expectedState = false;

      cell.die();
      const cellState = cell.alive;

      expect(cellState).toBe(expectedState);
    });
  });
});
