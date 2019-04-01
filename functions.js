// function sayHello() {
//     console.log('sayHello')
// }

// function runIt(it, thisThing) {
//     it()
//     thisThing('hi there!')
// }

// runIt(sayHello, console.log)

// runIt()

// module.exports = sayHello

// const constFunction = () => console.log("Hello there!")

// constFunction
// //() => console.log("Hello there!")
// constFunction()


// I am a named function
function greeting() {
    console.log('Hi')
}


// I am a function without a name
// I am an anonymous function
function() {
    console.log('Hi')
}

// I am a first class function
// I am assigned to a variable
let sayHi = function() {
    console.log('Hi')
}

let sayHello = sayHi

// Test - why is my contributions not being counted on github?

let types = {
    s: "this is a string",
    b: false,
    f: 1.5,
    nu: 1,
    o: {one: 1},
    u: undefined,
    fu: function f() {console.log('Hi, I am a function')},
    a: ["one", "two", "three"],
    n: null
}

console.log('i am a string?', typeof types.s)
console.log('i am a booleon?', typeof types.b)
console.log('i am a float?', typeof types.f)
console.log('i am a number or integer?', typeof types.nu)
console.log('i am a object?', typeof types.o)
console.log('i am a undefined?', typeof types.u)
console.log('i am a function?', typeof types.fu)
console.log('i am a array?', typeof types.a)
console.log('i am a null?', typeof types.n)