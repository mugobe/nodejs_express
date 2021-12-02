// const { singePerson, items } = require('./alternative')
// const x = require('./names')
// const sayHI = require('./utils')




// console.log(singePerson.home)
// // sayHI('susan')
// // sayHI(x.john)
// // sayHI(x.emma)

const os = require('os')

const user = os.userInfo()
console.log(user)

//system uptime using node js

console.log(`the system time now is ${os.uptime()} s`)

const currrentOS = {

    name:os.type(),
    releasdate: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),

}

console.log(currrentOS)