const Coordinate = require('./Coordinate')
class Mines {
  constructor(coordinatesList) {
    this.list = this.coordToMap(coordinatesList)
  }

  /**
   * transfrom coordinates in a Map 'key': val
   * @param {Array} coordinates - array of coordinates {x:2, y:23}
   * @returns {Object} with position as key value e.g ['2_23']: 1
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
  * @param {Coordinate as String} coordToFind '2_3'
  * @param {Object} list key of coordinates
  * @return Bool
  */
  touchedMine(coordToFind) {
    return !!this.list[coordToFind]
  }
}

module.exports = Mines