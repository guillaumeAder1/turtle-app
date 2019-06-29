const Manager = require('../src/Manager')
const settings = require('../config/settings.json')
const moves = require('../config/moves.json')

describe('Manager Module', () => {
  beforeEach(() => {
    this.manager = new Manager(settings, moves)
  })
  it('should exist', () => {
    expect(this.manager).not.toBe(null)
    expect(this.manager).not.toBe(undefined)
  })
  it('should run the game', () => {
    expect(this.manager.settings).not.toBe(null)
    expect(this.manager.moves).not.toBe(null)
    expect(typeof this.manager.output).toBe('object')
    expect(this.manager.output.length).toBeGreaterThan(0)
  })
})