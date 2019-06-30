const Grid = require('../src/Grid')
const grid = new Grid(3, 6)
describe('Grid Module', () => {
  it('should be defined as expected', () => {
    expect(grid).toBeDefined()
    expect(grid.w).toEqual(3)
    expect(grid.h).toEqual(6)
  })
  it('should check is coordinate is out of bound and return false', () => {
    expect(grid.isOutOfBound({ x: 1, y: 3 })).toEqual(false)
    expect(grid.isOutOfBound({ x: 1, y: 1 })).toEqual(false)
    expect(grid.isOutOfBound({ x: 3, y: 6 })).toEqual(false)
    expect(grid.isOutOfBound({ x: 1, y: 6 })).toEqual(false)
  })
  it('should check is coordinate is out of bound and return true', () => {
    expect(grid.isOutOfBound({ x: 1, y: 0 })).toEqual(true)
    expect(grid.isOutOfBound({ x: 0, y: 3 })).toEqual(true)
    expect(grid.isOutOfBound({ x: 4, y: 3 })).toEqual(true)
    expect(grid.isOutOfBound({ x: 2, y: 7 })).toEqual(true)
  })
})