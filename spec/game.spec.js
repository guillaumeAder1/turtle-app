const Game = require('../src/Game')
const moves = require('../config/moves')
const settings = require('../config/settings')
const game = new Game(settings[0], moves[0])

describe('Game Module', () => {
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
    expect(game.run).toBeDefined()
    expect(typeof game.run).toBe('function')
    expect(game.getAction).toBeDefined()
    expect(typeof game.getAction).toBe('function')
  })

})