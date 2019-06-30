const Coordinates = require('./Coordinate')
/**
 * Represente the turtle postion
 * and it current state
 */
class Turtle extends Coordinates {
  constructor(x, y, direction = 0) {
    super(x, y)
    this.direction = direction
  }
  // transform position as a string {x:3, y:7} => '3_7' 
  asString() {
    return Coordinates.coordToString(this)
  }
  // update state x or y
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
  // update direction
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