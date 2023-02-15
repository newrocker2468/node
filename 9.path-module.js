const path = require("path")

console.log(path.sep)

const filepath = path.join("/content/","text1.txt")
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

//returns an absolute path
const absolute = path.resolve(__dirname,"content","text1.txt");
console.log(absolute)