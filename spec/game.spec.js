const Game = require('../src/Game')
const moves = require('../config/moves')
const settings = require('../config/settings')
describe('Game Module', () => {
  const game = new Game(settings[0], moves[0])
  const coord = [
    { x: 1, y: 3 },
    { x: 89, y: 12 }
  ]
  const flat = game.flattenCoordinates(coord)
  it('should be defined as expected', () => {
    const {
      grid,
      currentPos,
      exitPos,
      messages,
      movesQueue,
      mines
    } = game
    expect(grid).toBeDefined()
    expect(currentPos).toBeDefined()
    expect(exitPos).toBeDefined()
    expect(messages).toBeDefined()
    expect(movesQueue).toBeDefined()
    expect(mines).toBeDefined()
  })
  it('should flatten coordinates', () => {
    expect(typeof flat).toEqual('object')
    expect(flat['1_3']).toBeDefined()
    expect(flat['1_3']).toEqual(1)
    expect(flat['89_12']).toBeDefined()
    expect(flat['89_12']).toEqual(1)
  })
  it('should find coordinate in list', () => {
    expect(game.findCoordinates('1_3', flat)).toBe(true)
    expect(game.findCoordinates('1_13', flat)).toBe(false)
    expect(game.findCoordinates('89_12', flat)).toBe(true)
  })
  it('should check if coord is in grid', () => {
    const grid = { x: 5, y: 3 }
    const coord1 = { x: 2, y: 2 }
    const coord2 = { x: 20, y: 2 }
    expect(game.isOutOfBound(coord1, grid)).toBe(false)
    expect(game.isOutOfBound(coord2, grid)).toBe(true)
  })
})