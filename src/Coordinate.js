
/**
 * helper class to normalize x,y position
 */
class Coordindate {

  constructor(x, y) {
    this.x = x
    this.y = y
  }
  /**
   * hepler
   * @param {Object} coordinate - {x:1, y:34}
   * @return {String} '1_34'
   */
  static coordToString({ x, y }) {
    if (!x || !y) { return false }
    return `${x}_${y}`
  }

}

module.exports = Coordindate  