const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

// json data middaleware
app.use(express.json());

app.post("/signup", async (req, res) => {
  // Creating a new instance of the user model
  // const user = new User({
  //   firstName: "Dipali1",
  //   lastName: "Balas",
  //   emailId: "deep123@gmail.com",
  //   age: 30,
  //   password: "deep@123",
  // });
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User added successfully!");
  } catch (error) {
    res.status(400).send("Error in user data saving...");
  }
});

// First of all connet to DB then do server to listen
connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(7777, () => {
      console.log("Server is running on 7777");
    });
  })
  .catch((err) => {
    console.err("Database cannot be connected!!");
  });


