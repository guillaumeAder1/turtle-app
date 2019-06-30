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
  })
})