class Grid {

  constructor(width, height) {
    this.w = width
    this.h = height
  }

  /**
   * check if input is inside the grid dimension
   * @param {Coordinate} {x,y} coordinate
   * @returns Boolean
   */
  isOutOfBound({ x, y }) {
    const xValid = x > 0 && x <= this.w
    const yValid = y > 0 && y <= this.h
    return !xValid || !yValid
  }

}

module.exports = Grid