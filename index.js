/**
 * Requirements:
 * Here is my understanding of the exercices, I'll try to summarize the requirements and define the 
 * the specs based on this. 
 * 
 * @Inputs - {settings}
 *  - 2 different files to be read: 
 *    - game settings
 *    - sequence of move 
 * 
 *  Game settings: 
 *    - grid dimension n x m tiles {BoardSize}
 *    - start position
 *    - exit position
 *    - list of mine positions
 *    e.g. 
 *    {
 *      grid : { x: 5, y: 10 },
 *      startPosition: { x: 1, y: 2 },
 *      exitPosition: { x: 3, y: 4 },,
 *      minesPositions: [
 *        { x: 1, y: 2 },
 *        { x: 14, y: 5 },
 *        { x: 6, y: 4 }
 *      ]
 *    }
 *  Files of moves
 *    - list of moves, (m or r)
 *    e.g. [Array] = [ 'r', 'm', 'm', 'r']... 
 * 
 * If the position brings out of the map... I will return false anyway Out of bound
 * 
 */

const settings = require('./config/settings.json')
const moves = require('./config/moves.json')
const Manager = require('./src/Manager')

const start = new Manager(settings, moves)

