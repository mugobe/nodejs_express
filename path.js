const {basename, join, resolve } = require('path')
// console.log(path.sep)

const filepath = join('/content' ,'/subfolder', 'text.txt' )
// console.log(filepath)

//basefile

const base = basename(filepath)
console.log(base)

const absolute = resolve(__dirname, '/content', 'subfolder', 'text.txt')
console.log(absolute)
