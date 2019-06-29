# Tutle app

## instruction
after cloning this repo

  `npm install`

  `npm start`

  to check the test:
  `npm run test`

// node version 10.14.0


## Requirements
A turtle must walk through a minefield. Write a program that will read the initial game settings
from one file and a sequence of moves from a different file.
Then the program will output if the sequence leads to the success or failure of the little turtle.
The program should also handle the scenario where the turtle doesn’t reach the exit point or
doesn’t hit a mine.

### Expected Input
A game settings file including board size, start position, exit position and a list of mine positions.
A moves file containing a list of moves (either ‘m’ or ‘r’)
Note: You can model the settings data using json or xml or a plain text.
### Expected Output
A message on the console describing the result, one of Success, Mine hit, still in danger or Out
of bounds.

### Notes
I will assume the following rules:
- If the moves brings the tutle out of the map, I will stop the game and return out of bound message, even if there is some moves left in the queue
- if the tutle touches a mine, I will stop the game and return mine hit message even if there is some moves left in the queue
- if the tutle passes on the exit point, I will stop the game even if there is some moves left in the queue
 - the turtle need to make at least one move before any rule apply
 
 for example if the start position is the same as exit position, or
if start position is on a mine it will not take effect at this time.

### please note:
- for dev and testabilty purpose, I will store moves/settings as an Array of moves/settings - so I can run multiples scenerio at once
- I will assume the two files will have the same amount of entries, so for each setting there is a move corresponding
- I will assume the inputs are valid format:
    - moves is an array with  ` 1 < moves.length < 1000`
    - `moves[i]` will be either `'r'` or `'m' ` in lowercase 
    - Grid { height, width } = positive integer, 1 < height, width < 1000
    - start position define as `{x,y}` coordinates
    - start postition will always be valid coordinates (within the grid dimension)
    - exit position define as `{x,y}` coordinates
    - exit postition will always be valid coordinates (within the grid dimension)
    - mines will be a list of `{x,y}` coordinates and all within the grid dimension
    - all `{x, y}` coordinates will always be positive integer and `1 < x,y < 1000`

