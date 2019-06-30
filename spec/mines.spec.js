const Mines = require('../src/Mines')
const mines = new Mines([
  {
    "x": 1,
    "y": 2
  },
  {
    "x": 1,
    "y": 3
  }
])
describe('Mines Module', () => {
  it('should de defined as expected', () => {
    expect(mines.list).toBeDefined()
    expect(mines.coordToMap).toBeDefined()
    expect(mines.touchedMine).toBeDefined()
  })

  it('should find coordinate in list', () => {
    expect(mines.touchedMine('1_2')).toBe(true)
    expect(mines.touchedMine('1_13')).toBe(false)
    expect(mines.touchedMine('89_12')).toBe(false)
  })

  it('should flatten coordinates', () => {
    expect(typeof mines.list).toEqual('object')
    expect(mines.list['1_3']).toBeDefined()
    expect(mines.list['1_3']).toEqual(1)
    expect(mines.list['89_12']).not.toBeDefined()
  })

})