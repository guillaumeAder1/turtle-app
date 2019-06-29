
const Coordinate = require('./Coordinate')

class Game {

  constructor(setting, moves) {
    const {
      grid,
      startPosition,
      exitPosition,
      minesPositions
    } = setting
    this.grid = grid
    this.currentPos = startPosition
    this.exitPos = Coordinate.coordToString(exitPosition)
    this.mines = this.flattenCoordinates(minesPositions)
    this.moves = moves
    this.direction = 0
    this.messages = []
  }
  // transfromCoord(coord) {
  //   return `${coord.x},${coord.y}`
  // }
  /**
   * transfrome coordinates in adn hashtable
   * @param {Array} coordinates - array of coordinates {x:2, y:23}
   * @returns {Object} with position as hash value e.g ['2,23']: 1
   */
  flattenCoordinates(coordinates) {
    const hash = []
    for (const i in coordinates) {
      const value = Coordinate.coordToString(coordinates[i])
      hash[value] = 1
    }
    return hash
  }
  findCoordinates(coordToFind, list) {
    return !!list[coordToFind]
  }
  run() {
    while (this.moves.length) {
      const nextStep = this.moves.shift()
      const action = this.getAction(nextStep)
      action()
      const isOutOfBound = this.isOutOfBound(this.currentPos, this.grid)
      if (isOutOfBound) {
        this.messages.push('is out of boundary box')
        break
      }
      const flatCurrentPos = this.flattenCoordinates(this.currentPos)
      const hitMine = this.findCoordinates(flatCurrentPos, this.mines)
      if (hitMine) {
        this.messages.push('hit a mine')
        break
      }
      if (!this.moves.length) {
        const exitFound = this.findCoordinates(flatCurrentPos, this.exitPos)
        if (exitFound) {
          this.messages.push('exit found')
        } else {
          this.messages.push('still in danger')
        }
        break
      }
    }
    return this.messages[0]
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
    this.direction += 90;
    if (this.direction === 360) { this.direction = 0 }
  }
  move() {
    const nextPos = this.getNextPos(this.direction)
    this.currentPos = this.setNewPos(nextPos, this.currentPos)
  }

  setNewPos(newPos, oldPos) {
    return {
      x: oldPos.x + newPos.x,
      y: oldPos.y + newPos.y
    }
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