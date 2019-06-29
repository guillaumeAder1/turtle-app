
const Coordinate = require('./Coordinate')
const Turtle = require('./Turtle')

class Game {

  constructor(setting, moves) {
    const {
      grid,
      startPosition,
      exitPosition,
      minesPositions
    } = setting
    this.grid = grid
    this.currentPos = new Turtle(startPosition.x, startPosition.y, 0)
    this.exitPos = Coordinate.coordToString(exitPosition)
    this.mines = this.flattenCoordinates(minesPositions)
    this.movesQueue = moves
    // this.direction = 0
    this.messages = []
  }
  /**
   * transfrom coordinates in an Map
   * @param {Array} coordinates - array of coordinates {x:2, y:23}
   * @returns {Object} with position as hash value e.g ['2_23']: 1
   */
  flattenCoordinates(coordinates) {
    const map = []
    for (const i in coordinates) {
      const value = Coordinate.coordToString(coordinates[i])
      map[value] = 1
    }
    return map
  }
  findCoordinates(coordToFind, list) {
    return !!list[coordToFind]
  }
  run() {

    while (this.movesQueue.length) {
      const nextStep = this.movesQueue.shift()
      const action = this.getAction(nextStep)
      action()
      // out of bound
      if (this.isOutOfBound(this.currentPos, this.grid)) {
        this.messages.push('is out of grid')
        break
      }
      // hit a mine
      // const currentPos = Coordinate.coordToString(this.currentPos)
      if (this.findCoordinates(this.currentPos.asString(), this.mines)) {
        this.messages.push('hit a mine')
        break
      }
      // exit found
      if (this.findCoordinates(this.currentPos.asString(), this.exitPos)) {
        this.messages.push('exit found')
        break
      }
    }
    return this.messages[0] || ['still in danger']
  }
  isOutOfBound(position, grid) {
    const xValid = position.x >= grid.x && position.x <= grid.x
    const yValid = position.y >= grid.y && position.y <= grid.y
    return xValid && yValid
  }

  getAction(type) {
    return type === 'r' ? this.rotate.bind(this) : this.move.bind(this);
  }

  rotate() {
    this.currentPos.rotate()
  }
  move() {
    // const nextPos = this.getNextPos(this.direction)
    this.currentPos.move()
  }

  getNextPos(direction) {
    let pos = { x: 0, y: 0 }
    switch (direction) {
      case 0:
        pos.x = -1
        break;
      case 90:
        pos.y = 1
        break;
      case 180:
        pos.x = 1
        break;
      case 270:
        pos.y = -1
        break;

      default:
        break;
    }
    return pos
  }
}

module.exports = Game 