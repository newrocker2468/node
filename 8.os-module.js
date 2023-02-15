const os = require("os")

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`the system uptime us ${os.uptime()} seconds`)

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freememory:os.freemem(),
}
console.log(currentOs)