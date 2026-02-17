const express = require("express");

const app = express();

app.use((req, res) => {
  res.send("Hello from the server"); // request handler
});

app.listen(7777, () => {
  console.log("Server is running on 7777");
});
