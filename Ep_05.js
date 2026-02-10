const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("RH1");
    // res.send("Request Handler1"); // It will give the response of 1st route handler, not go to the second handler
    next();
    // res.send("Request Handler1"); // It throws the error: Cannot set headers after they are sent to the client
  },
  [
    (req, res, next) => {
      console.log("RH2");
      // res.send("Request Handler2");
      next();
    },
    (req, res, next) => {
      console.log("RH3");
      next();
      // res.send("Request Handler3");
    },
    (req, res, next) => {
      console.log("RH4");
      next();
      // res.send("Request Handler4");
    },
  ],
  (req, res) => {
    console.log("RH5");
    res.send("Request Handler5");
  },
);


app.use("/test", (req, res) => {
  res.send("Hello from the test server"); // request handler
});

app.use((req, res) => {
  res.send("Hello from the server"); // request handler
});

// app.listen(7777, () => {
//   console.log("Server is running on 7777");
// });