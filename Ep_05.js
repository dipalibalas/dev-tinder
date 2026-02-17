const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");
const app = express();

// Handle Auth Middleware for all type(GET,POST,PATCH,UPDATE,DELETE) request
app.use("/admin")
// Handle Auth Middleware for only GET requests
app.get("/admin")
// Handle Auth Middleware for only POST requests
app.post("/admin")
// Handle Auth Middleware for only PATCH requests
app.patch("/admin")
// Handle Auth Middleware for only DELETE requests
app.delete("/admin")

// ---------------Middleware----------------
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

// ----------------------------------------------------------------------
// ---------------Error Handler----------------
// order matters
app.use("/user", (err,req,res,next)=>{
  if(err){
    throw new Error("Something went wrong")
  }
});

// ----------------------------------------------------------------------

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