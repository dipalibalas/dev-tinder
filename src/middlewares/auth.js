const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    // Read the token from the req cookies
    const cookies = req.cookies;
    const { token } = cookies;

    if (!token) {
      throw new Error("Invalid Token");
    }
    // Validate the token
    const decodedMessage = await jwt.verify(token, process.env.JWT_SECRET);
    const { _id } = decodedMessage;
    // Find the user
    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User does not exist");
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(400).send("Error: " + error.message);
  }
};

module.exports = {
  userAuth,
};
