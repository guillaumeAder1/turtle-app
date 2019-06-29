const Game = require('../src/Game')
const moves = require('../config/moves')
const settings = require('../config/settings')
describe('Game Module', () => {
  const game = new Game(settings[0], moves[0])
  it('should be defined as expected', () => {

  })
})