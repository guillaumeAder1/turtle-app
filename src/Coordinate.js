

class Coordindate {

  constructor( x, y ){
    this.x = x
    this.y = y
    this.delimiter = '_'    
  }
  static coordToString ({x,y}) {     
    return `${x}${delimiter}${y}`
  }
  
}

module.exports = Coordindate  