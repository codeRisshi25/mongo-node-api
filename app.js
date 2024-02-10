const express = require("express");
const { connectToDb, getDb } = require("./db");

// init app & middleware
const app = express();

// db connection
let db;
connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
    db = getDb();
  } else {
    console.log(err);
  }
});

//routes
app.get("/books", (req, res) => {
  //   db.collection("books")
  //     .find()
  //     .toArray()
  //     .then((books) => {
  //       res.json(books);
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
  res.json("Welcome to the api");
});
