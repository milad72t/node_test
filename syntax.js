// --------------- Variable types
var avg = 16
var name = 'Kian'
var courses = [avg, 'c1', ['c2']]
var person = {name: name, courses: courses, avg: avg}
g = 'where am I?'

// new ES6 style: template string
const NAME = `Student: ${name.toUpperCase()}`

console.log('--------------- Variable types')
console.log('####')
console.log(name)
console.log(NAME)

console.log('####')
console.log(person, typeof (person))
console.log(person.name)
console.log(person['name'])

console.log('####')
console.log(courses[1], courses.length)
console.log(courses, typeof (courses)) // WTF!

console.log('####')
courses.push('foo')
console.log(courses)
courses.pop()
console.log(courses)

console.log('####')
console.log(g)
console.log(global.g)
// console.log(global)

// --------------- Casting
var str = '12'
var num = 2
var arr = [str, num]

console.log('--------------- Casting')
console.log('####')
console.log(String(num))
console.log(Number(str))
console.log(String(arr))
console.log(Array(str, num))

// --------------- Functions
function f (x) {
  return x * 2
}

var ff = function (x) {
  return x * 2
}

// new ES6 style: arrow funciton
var fff = (x) => x * 2

var ffff = (x) => {
  // do some stuff
  return x * 2
}

console.log('--------------- Functions')
console.log('####')
console.log(f, ff, fff, ffff)
console.log(f(2))
console.log(ffff(2))

// --------------- Functions are everywhere
// Functions in objects and arrays
var mw = [fff, ffff]
var mwObject = {
  aFunc: f,
  anotherFunc: ff,
  aNewFunc: (x) => x * 2,
  yetAnotherFunc: function (x) {
    return x * 2
  }
}

console.log('####')
console.log(mw[0](2))
console.log(mwObject.aFunc(2))

// functions that return a function
// custom multiplier
var mulGen = (x) => (y) => x * y

console.log('####')
var mul2Fn = mulGen(2)
console.log(mul2Fn(4))
console.log('####')

// --------------- Flow control
// Naive iteration
for (var i = 0; i < 5; i++) {
  console.log(i)
}
console.log('####')

// Array
for (var i = 0; i < courses.length; i++) {
  console.log(courses[i])
}
console.log('####')

// Object
for (var i = 0; i < Object.keys(person).length; i++) {
  console.log(person[Object.keys(person)[i]])
}
console.log('####')

for (var attr in person) {
  console.log(attr, person[attr])
}
console.log('####')

for (var e of courses) {
  console.log(e)
}
console.log('####')

// Why is this working ? Object > Array
for (var e in courses) {
  console.log(e)
}

var i = 1
while (i < 5) {
  console.log(i)
  i++
}
console.log('####')

// --------------- Event Loop

// setTimeout(() => {
//   console.log('timeout')
// }, 1000)

// setInterval(() => {
//   console.log('interval')
// }, 1500)

// // Will manually append stuff to
// process.nextTick(() => {
//   console.log('nextTick')
// })

// // What will happen if we uncomment this?
// while (true) {}

// Same story inside a callback
// function infinite () {
//   console.log('will block you')
//   while (true) {}
// }

// setTimeout(infinite, 4000)

// --------------- Callback function
function sthLongWrong () {
  i = 0
  while (i < 10000000) {
    i += 1
  }
  console.log(i)
  return 1
}

function sthLong (callback) {
  setTimeout(() => {
    callback(1)
  }, 5000)
}

sthLongWrong()

sthLong((data) => {
  console.log(data)
})
