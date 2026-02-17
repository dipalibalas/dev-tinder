const express = require("express");

const app = express();

// middleware
app.use("/admin", (req, res, next) => {
  console.log("admin auth middleware");
  const token = "xyz";
  const isAuthorized = token === "xyz";
  if (!isAuthorized) res.status(401).send("Unauthorized request");
  else next();
});

app.get("/admin/getAllData", (req, res) => {
  res.send("User data sent!!");
});

app.get("/admin/deleteAllData", (req, res) => {
  res.send("Deleted a user");
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