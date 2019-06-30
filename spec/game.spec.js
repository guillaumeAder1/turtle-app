const Game = require('../src/Game')
const moves = require('../config/moves')
const settings = require('../config/settings')
describe('Game Module', () => {
  const game = new Game(settings[0], moves[0])
  const coord = [
    { x: 1, y: 3 },
    { x: 89, y: 12 }
  ]
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

})