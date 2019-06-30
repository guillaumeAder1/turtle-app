const Coordinate = require('./Coordinate')
/**
 * this class receives the list of mines coordinates
 * and store them as a hashTable 
 * It is responsible for checking if a coordinates as hit a mine  
 */
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
  * @return Bool
  */
  touchedMine(coordToFind) {
    return !!this.list[coordToFind]
  }
}

module.exports = Mines