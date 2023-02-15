const { readFileSync , writeFileSync } = require("fs")
console.log("start")
const first = readFileSync("./content/first.txt","utf-8")
const second = readFileSync("./content/second.txt","utf-8")
console.log(first,second)

writeFileSync(
    "./content/resultsync.txt",
   `here is the result : ${first} , ${second}`,
   //to append instead of overwriting data on the file
    { flag : "a"}
)
console.log("done with this task")
console.log("starting with the next one")