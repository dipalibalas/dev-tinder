const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("MongoDB connected");
//   } catch (err) {
//     console.error("MongoDB connection error:", err.message);
//     process.exit(1); // Stop server if DB fails
//   }
// };

const connectDB = async()=>{
    await mongoose.connect(process.env.MONGO_URL)
}

module.exports = connectDB;
