const Game = require('./Game')

class Manager {
  /**
   * Manager receive some settings as list,
   * each item of those list represents a game round
   * @param {Array} settings Array of Settings Object
   * @param {Array} moves Array of Array moves
   */
  constructor (settings, moves) {
    this.settingsList = settings
    this.movesList = moves
    this.output = []
    this.start(this.settingsList, this.movesList)
  }
  /**
   * Runs N rounds of the Game Instance
   * After every round, we ouput theresults in the console
   * @param {Array} settings 
   * @param {Array} moves 
   */
  start (settings, moves) {
    const rounds = this.getMaxRounds(settings, moves)
    for(let i = 0 ; i < rounds; i ++) {
      const game = new Game(settings[i], moves[i])
      this.output.push(game.run())
      console.warn(this.output[this.output.length -1])
    }    
  }
  /**
   * Verify params are not empty
   * return the min length of both
   * Throw an erros in case params are not valid
   * @param {Array} settings 
   * @param {Array} moves 
   */
  getMaxRounds (settings, moves){
    const min = Math.min(settings.length, moves.length)
    if (min && min > 0) {
      return min
    } else {
      throw new Error('Input params not valid, moves and settings should be at least 1 element long')
    }
  }
}

module.exports = Manager