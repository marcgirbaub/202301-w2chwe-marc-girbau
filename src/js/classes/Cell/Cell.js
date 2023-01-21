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

  resurrect() {
    if (!this.alive) {
      this.alive = true;
    }
  }
}

export default Cell;
