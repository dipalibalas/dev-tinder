const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");
const app = express();

// middleware
app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res) => {
  res.send("User data sent to admin!!");
});

app.get("/admin/deleteAllData", (req, res) => {
  res.send("Deleted a user");
});

app.get("/user", userAuth, (req, res) => {
  res.send("User data sent!!");
});
app.use("/test", (req, res) => {
  res.send("Hello from the test server"); // request handler
});

app.use((req, res) => {
  res.send("Hello from the server"); // request handler
});

app.listen(7777, () => {
  console.log("Server is running on 7777");
});