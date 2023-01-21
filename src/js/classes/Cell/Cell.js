class Cell {
  alive;

  constructor(alive = undefined) {
    this.alive = alive;
  }

  die() {
    this.alive = false;
  }
}

export default Cell;
