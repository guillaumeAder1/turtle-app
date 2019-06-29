
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
  /**
   * check is coordToFind is in list
   * @param {Coordinate as String} coordToFind 
   * @param {Object} list key of coordinates
   */
  findCoordinates(coordToFind, list) {
    return !!list[coordToFind]
  }
  run() {
    while (this.movesQueue.length) {
      const nextStep = this.movesQueue.shift()
      this.getAction(nextStep)
      // out of bound
      if (this.isOutOfBound(this.currentPos, this.grid)) {
        this.messages.push('is out of grid')
        break
      }
      // hit a mine
      if (this.findCoordinates(this.currentPos.asString(), this.mines)) {
        this.messages.push('hit a mine')
        break
      }
      // exit found
      if (this.currentPos.asString() === this.exitPos) {
        this.messages.push('exit found')
        break
      }
    }
    return this.messages[0] || ['still in danger']
  }

  isOutOfBound(position, grid) {
    const xValid = position.x > 0 && position.x <= grid.x
    const yValid = position.y > 0 && position.y <= grid.y
    return !xValid || !yValid
  }

  getAction(type) {
    return type === 'r' ? this.currentPos.rotate() : this.currentPos.move()
  }

}

module.exports = Game 