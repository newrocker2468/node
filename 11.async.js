const { readFile, writeFile } = require("fs");

console.log("start");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `here is the result : ${first} , ${second}`,
      (err) => {
        if (err) {
          console.log(err);
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");
