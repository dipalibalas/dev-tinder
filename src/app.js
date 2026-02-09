const express = require("express");

const app = express();

// app.use((req,res)=>{
//     res.send("Hello from the server")     // request handler
// })

app.use("/test",(req,res)=>{
    res.send("Hello from the test server")     // request handler
})

app.listen(3000,()=>{
    console.log("Server is running on 3000")
});