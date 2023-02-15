const john = require("./4names")
const sayHi = (name) => {
    const name1 = `My Name is ${name}`
    return name1
}
console.log(john)
module.exports = { sayHi }