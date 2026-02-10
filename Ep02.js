const express = require("express");

const app = express();

// This will only handle GET requests to /user
// app.get("/user/:userId/:name/:password", (req, res) => {
//   console.log(req.params);
//   res.send({ firstName: "Akshay", lastName: "Saini" });
// });
app.get("/user", (req, res) => {
 res.send({ firstName: "Dipali", lastName: "Balas" });
});

// Handle POST request → Save data to the database
app.post("/user", (req, res) => {
 // saving data to DB
 res.send("Data successfully saved to the DB!");
});

// Handle DELETE request → Delete user data
app.delete("/user", (req, res) => {
 res.send("Deleted successfully!!");
});


app.use("/test", (req, res) => {
  res.send("Hello from the test server"); // request handler
});

app.use((req, res) => {
  res.send("Hello from the server"); // request handler
});

// app.listen(7777, () => {
//   console.log("Server is running on 7777");
// });