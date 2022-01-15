const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log("can't connect to mongodb due to " + err);
  });

const app = express();

app.listen(process.env.PORT, () => {
  console.log("server started at " + process.env.PORT);
});

app.get("/helloWorld", (req, res) => {
  res.send("Hello World");
});
