
const Coordinate = require('./Coordinate')
const Turtle = require('./Turtle')
const Grid = require('./Grid')
const Mines = require('./Mines')

/**
 * Game class is responsible for running the sequence of moves,
 * managing and class entities and will return the outcome of the round 
 */
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
    this.mines = new Mines(minesPositions)
    this.movesQueue = moves // input moves
    this.messages = [] // output results
  }
  run() {
    while (this.movesQueue.length) {
      // get current move off the queue
      const nextStep = this.movesQueue.shift()
      // update the turtle state
      this.getAction(nextStep)
      // out of bound
      if (this.grid.isOutOfBound(this.currentPos)) {
        this.messages.push('is out of grid')
        break
      }
      // hit a mine
      if (this.mines.touchedMine(this.currentPos.asString())) {
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
  // update turtle pos accordingly
  getAction(type) {
    return type === 'r' ? this.currentPos.rotate() : this.currentPos.move()
  }

}

module.exports = Game 