function letDemo() {
    let dt = 10
    const hi = 'hello'

    if (true) {
        let dt = 20
    }

    // hi = 'bye'
    dt = 100
    dt = true
    dt = 'kp'
    dt = 100
    console.log(dt)
}

function arrowDemo() {
    const fn = () => {
        console.log('Arrow Called')
    }

    fn()

    return () => {
        console.log('Retured')
    }
}

// arrowDemo()()
// // console.log(a)

function str() {

    const nm = 'ab'
    const dt = ` 
        Hi my name is ${nm} 
        Today is ${Date.now()}
    `
    console.log(dt)

    console.log(this)
}

str()



