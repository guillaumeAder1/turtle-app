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
      expect(this.manager).toBeDefined()
      expect(this.manager.exec).toBeDefined()
      expect(this.manager.validateInputs).toBeDefined()
    })
    it('should have params input defined', () => {
      expect(this.manager.settings).toBeDefined()
      expect(this.manager.moves).toBeDefined()
      const {
        settings,
        moves
      } = this.manager
      expect(this.manager.validateInputs(settings, moves)).toBe(true)

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