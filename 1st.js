//globals - no window object!!!
// __dirname - path to the current directory
// __filename - file name 
// require - function to use modules(commonjs) 
// module - info about current module (file)
// process - info about env where the program is being executed

const amount = 10

if(amount > 5) {
    console.log("Small Number")
} else {
    console.log("Big Number")
}

console.log("First App Yayy") 
console.log(__filename) 
console.log(__dirname) 
