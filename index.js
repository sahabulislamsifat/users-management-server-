const express = require("express");

// const cors = require("cors");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 6500;

app.use(cors());
app.use(express.json());
// app.use(cors());
const users = [
  {
    id: 1,
    name: "Sahabul",
    Age: 23,
    email: "sahabulislamsifat@gmail.com",
  },
  {
    id: 2,
    name: "Sohel",
    Age: 23,
    email: "sahabulislamsifat@gmail.com",
  },
  {
    id: 3,
    name: "Omar",
    Age: 22,
    email: "oomar@gmail.com",
  },
  {
    id: 4,
    name: "Ayan",
    Age: 10,
    email: "ayana@gmail.com",
  },
  {
    id: 5,
    name: "Sajul",
    Age: 27,
    email: "sajulislam@gmail.com",
  },
];

app.get("/", (req, res) => {
  res.send("User Management Server is Running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post api hitting");
  console.log(req.body);

  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`User Port is running On PORT: ${port}`);
});
