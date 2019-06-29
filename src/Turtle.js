const Coordinates = require('./Coordinate')

class Turtle extends Coordinates {
  constructor(x, y) {
    super()
  }

  asString() {
    console.log(Coordinates.coordToString(this.x, this.y))
  }
}

module.exports = Turtle