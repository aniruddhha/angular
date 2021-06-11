
class Car {

    constructor() {
        this.speed = 0;
        this.light = false
    }

    speedUp() {
        this.speed += 30
    }

    lightOn() {
        this.light = true
    }

    lightOff() {
        this.light = false
    }

    printState() {
        console.log(` 
            Speed - ${this.speed}
            Lights are ${this.light}
        `)

        console.log(this)
    }
}

const cr = new Car()
cr.lightOn()
cr.printState()
cr.speedUp()
cr.printState()