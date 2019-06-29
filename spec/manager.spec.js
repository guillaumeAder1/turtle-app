const Manager = require('../src/Manager')
const settings = require('../config/settings.json')
const moves = require('../config/moves.json')

describe('Manager Module', () => {
  describe('sanity check', () => {
    beforeEach(() => {
      this.manager = new Manager(settings, moves)
      this.manager.init()
    })
    it('should exist with methods defined', () => {
      expect(this.manager).not.toBe(null)
      expect(this.manager).not.toBe(undefined)
      expect(this.manager.exec).not.toBe(undefined)
      expect(this.manager.validateInputs).not.toBe(undefined)
    })
    it('should run the game', () => {
      expect(this.manager.settings).not.toBe(null)
      expect(this.manager.moves).not.toBe(null)
      expect(typeof this.manager.output).toBe('object')
      expect(this.manager.output.length).toBeGreaterThan(0)
    })
  })
  describe('check wrong settings', () => {
    it('should return false if input are not valid', () => {
      let manager = new Manager([], []).init()
      expect(manager).toEqual(['error, input not valid'])
      manager = new Manager().init()
      expect(manager).toEqual(['error, input not valid'])
      manager = new Manager([]).init()
      expect(manager).toEqual(['error, input not valid'])
      manager = new Manager(1, []).init()
      expect(manager).toEqual(['error, input not valid'])
    })
  })
})