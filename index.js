//let sayHello = require('./functions')

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

// console.log('i am a string?', typeof types.s)
// console.log('i am a booleon?', typeof types.b)
// console.log('i am a float?', typeof types.f)
// console.log('i am a number or integer?', typeof types.nu)
// console.log('i am a object?', typeof types.o)
// console.log('i am a undefined?', typeof types.u)
// console.log('i am a function?', typeof types.fu)
// console.log('i am a array?', typeof types.a)
// console.log('i am a null?', typeof types.n)

let obj = { //to access data all you need to do is call the key
    0: 'zero',
    1: 'one',
    2: 'two'
}

let arr = ['zero', 'one', 'two'] // here you need to call the data in the []

obj[1]
arr[0]
console.log(obj[0], arr[0])
// Within an object you call the key: of the string. Within an array you call number of the string in the order it sits in 

let sayHi = function() {
    console.log('Hi')
}

let sayHello = sayHi // having a play with functions and variables calling each other out

sayHi()
sayHello()
console.log(sayHello)

let obj = {
    1: 'Kelly',
    0: 'Engie'
}

let arr = ['Kelly', 'Engie']

console.log(obj[0])
console.log(arr[0])


function runMe(myFunc) {
    myfunc()
}

runMe(sayHello)