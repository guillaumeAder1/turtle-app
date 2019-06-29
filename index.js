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
 * I will assume the following rules:
 *  - If the position brings out of the map, I will stop the game and return out of bound message, even if there is some moves left
 *  - if the tutle touches a mine, I will stop the game and return mine hit message
 *  - if the tutle passes on the exit point, I will stop the game even if there is still some moves left 
 * 
 * Input handler
 *  - for dev and testabilty purpose, I will store moves/settings as an Array of moves/settings - so I can run multiples scenerio at once
 *  - I will assume the two files will have the same amount of entry
 *  - I will assume the inputs are valid format:
 *      - moves is array 0 < moves.length < 1000
 *      - moves[i] will be either 'r' or 'm' in lowercase
 *  - in Settings
 *      - Grid { height, width } = positive integer, 1 < height, width < 1000
 *      - start position define as {Coordinates}
 *      - start postition will always be valide coordinates (within the grid dimenssion)
 *      - exit position define as {Coordinates}
 *      - exit postition will always be valide coordinates (within the grid dimenssion)
 *      - Coordinates defines as an object with x and y properties
 *      - x and y properties will always be positive integer and0 < x,y < 1000
 *      - mines will be a list of {coordinates} and all within the grid dimenssion
 */

const settings = require('./config/settings.json')
const moves = require('./config/moves.json')
const Manager = require('./src/Manager')

const runGames = new Manager(settings, moves).init()
runGames.output.forEach((result, index) => {
  console.warn(`result round ${index + 1}: ${result}`)
});

