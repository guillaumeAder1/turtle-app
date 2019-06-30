const Coordinate = require('../src/Coordinate')

describe('Coordinate module', () => {

  it('should exist', () => {
    const coord = new Coordinate(1, 2)
    expect(coord).not.toBe(null)
  })
  it('should have correct inputs & properties', () => {
    const coord = new Coordinate(3, 2)
    expect(coord.x).toBe(3)
    expect(coord.y).toBe(2)
  })
  it('should return valid coordinates as a string', () => {
    const coord = Coordinate.coordToString({ x: 4, y: 5 })
    expect(coord).toBe('4_5')
    const coord2 = Coordinate.coordToString({ x: '4', y: '5' })
    expect(coord2).toBe('4_5')
  })
  it('should return false if coordinate are not valid', () => {
    let coord = Coordinate.coordToString({ x: 4 })
    expect(coord).toEqual(false)
    let coord2 = Coordinate.coordToString({})
    expect(coord2).toEqual(false)
    let coord3 = Coordinate.coordToString({ y: 54 })
    expect(coord3).toEqual(false)
  })
})