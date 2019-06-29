

class Coordindate {

  constructor(x, y) {
    this.x = x
    this.y = y
  }
  static coordToString({ x, y }) {
    return `${x}_${y}`
  }

}

module.exports = Coordindate  