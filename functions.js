function sayHello() {
    console.log('sayHello')
}

function runIt(it, thisThing) {
    it()
    thisThing('hi there!')
}

runIt(sayHello, console.log)

module.exports = sayHello