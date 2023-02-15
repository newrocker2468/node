const express = require("express");
const app = express();

const port = 2000;

const profile = {
  Anurag: {
    College: "Vidyalankar",
    Age: "18",
    Gender: "Male",
    Email: "annuraggg@gmail.com",
    Phone: "9324083638",
  },
  Jaskaran: {
    College: "Hinduja",
    Age: "18",
    Gender: "Male",
    Email: "newrocker2468@gmail.com",
    Phone: "1234567890",
  },
  Manvika: {
    College: "Thakur",
    Age: "17",
    Gender: "Female",
    Email: "manvikababu@gmail.com",
    Phone: "9876543210",
  },
};

app.listen(port, () => {
  console.log(`Running on Port ${port}`);
});

app.get("/:name", (req, res) => {
  res.status(404);
  const names = req.params.name;
  res.send(eval("profile." + names));
});
