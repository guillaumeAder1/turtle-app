const Game = require('./Game')

class Manager {
  /**
   * Manager receive some settings as list,
   * each item of those list represents a game round
   * @param {Array} settings Array of Settings Object
   * @param {Array} moves Array of Array moves
   */
  constructor(settings, moves) {
    this.settings = settings
    this.moves = moves
    this.output = []
  }
  init() {
    if (!this.validateInputs(this.settings, this.moves)) {
      this.output.push('error, input not valid')
    } else {
      this.output = this.exec(this.settings, this.moves)
    }
    return this.output
  }
  /**
   * Runs N rounds of the Game Instance
   * After every round, we store the results in the output Array
   * @param {Array} settings 
   * @param {Array} moves 
   */
  exec(settings, moves) {
    return settings.map((round, i) => {
      return new Game(settings[i], moves[i]).run()
    })
  }
  /**
   * Verify params are not empty list of setting and move
   * and should have the same lenggth
   * @param {Array} settings 
   * @param {Array} moves 
   * @returns Bool
   */
  validateInputs(settings, moves) {
    if (!settings || !moves) { return false }
    if (settings.length !== moves.length) { return false }
    if (settings.length === 0) { return false }
    return true
  }
}

module.exports = Manager