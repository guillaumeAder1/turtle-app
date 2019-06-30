
const Coordinate = require('./Coordinate')
const Turtle = require('./Turtle')
const Grid = require('./Grid')

class Game {

  constructor(setting, moves) {
    const {
      grid,
      startPosition,
      exitPosition,
      minesPositions
    } = setting
    this.grid = new Grid(grid.x, grid.y)
    this.currentPos = new Turtle(startPosition.x, startPosition.y, 0)
    this.exitPos = Coordinate.coordToString(exitPosition)
    this.mines = this.coordToMap(minesPositions)
    this.movesQueue = moves
    this.messages = []
  }
  /**
   * transfrom coordinates in a Map
   * @param {Array} coordinates - array of coordinates {x:2, y:23}
   * @returns {Object} with position as hash value e.g ['2_23']: 1
   */
  coordToMap(coordinates) {
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
  touchedMine(coordToFind, list) {
    return !!list[coordToFind]
  }
  run() {
    while (this.movesQueue.length) {
      const nextStep = this.movesQueue.shift()
      this.getAction(nextStep)
      // out of bound
      //if (this.isOutOfBound(this.currentPos, this.grid)) {
      if (this.grid.isOutOfBound(this.currentPos)) {
        this.messages.push('is out of grid')
        break
      }
      // hit a mine
      if (this.touchedMine(this.currentPos.asString(), this.mines)) {
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


  getAction(type) {
    return type === 'r' ? this.currentPos.rotate() : this.currentPos.move()
  }

}

module.exports = Game 