class Cell {
  alive;

  constructor(alive = undefined) {
    this.alive = alive;
  }

  die() {
    if (this.alive !== false) {
      this.alive = false;
    }
  }
}

export default Cell;
