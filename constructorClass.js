//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine {
    constructor(espressoColor, espressoSize, espressoStyle, espressoPrice) {
        //properties
        this.color = espressoColor
        this.size = espressoSize
        this.style = espressoStyle
        this.price = espressoPrice
    }
    //methods
    turnOn () {
        console.log("Hello, I am on.")
    }
    steam(){
        console.log("Little froth for ya")
    }
    brew(){
        console.log("yum yums coming your way.")
    }
}

let gaggia = EspressoMachine('red', 'medium', 'modern', 500 )