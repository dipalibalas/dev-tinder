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
    res.status(400).send("Error saving the user:" + error.message);
  }
});

app.get("/user", async (req, res) => {
  console.log("req ", req.body);
  const userEmail = req.body.emailId;

  try {
    const user = await User.findOne({ emailId: userEmail });
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (error) {
    res.status(400).send("Error in user data saving...", error.message);
  }
});

// Feed API - GET /feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong ");
  }
});

// Delete user
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete({ _id: userId }); // User.findByIdAndDelete(userId); shorthand syntax
    res.send("User deleted..");
  } catch (err) {
    res.status(400).send("Something went wrong ");
  }
});

// Update user data
app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;

  try {
    const ALLOWED_UPDATES = ["photoUrl", "gender", "age", "skills"];
    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k),
    );

    if (!isUpdateAllowed) {
      throw new Error("Update not allowed");
    }
    if (data?.skills?.length > 10) {
      throw new Error("More than 10 skills not allowed");
    }
    await User.findByIdAndUpdate({ _id: userId }, data, {
      runValidators: true,
    });
    res.send("User updated..");
  } catch (err) {
    res.status(400).send("UPDATE FAILED:" + err.message);
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


