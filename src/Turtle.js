const Coordinates = require('./Coordinate')

class Turtle extends Coordinates {
  constructor(x, y, direction) {
    super(x, y)
    this.direction = direction
  }
  // get direction() { return this.direction }
  // set direction(val) { this.direction = val }

  asString() {
    return Coordinates.coordToString(this)
  }

  move() {
    switch (this.direction) {
      case 0:
        this.y -= 1
        break;
      case 90:
        this.x += 1
        break;
      case 180:
        this.y += 1
        break;
      case 270:
        this.x -= 1
        break;
      default:
        break;
    }
  }

  rotate() {
    switch (this.direction) {
      case 0:
        this.direction = 90
        break;
      case 90:
        this.direction = 180
        break;
      case 180:
        this.direction = 270
        break;
      case 270:
        this.direction = 0
        break;

      default:
        break;
    }
  }
}

module.exports = Turtle