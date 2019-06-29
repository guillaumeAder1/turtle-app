const Coordinates = require('./Coordinate')

class Turtle extends Coordinates {
  constructor(x, y) {
    super(x, y)
  }

  asString() {
    // console.log(Coordinates.coordToString(this))
    return Coordinates.coordToString(this)
  }

  setNewPos(nextPos) {
    this.x += nextPos.x
    this.y += nextPos.y
  }
}

module.exports = Turtle