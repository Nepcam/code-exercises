let sayHello = require('./functions')

function runIt(it, thisThing) {
    it()
    thisThing('hi there!')
}

runIt(sayHello, console.log)



module.exports = sayHello