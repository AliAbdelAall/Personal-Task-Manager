const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

// check User here
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.header.authorization?.split(" ")[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findByid()


  } catch (error) {
    return res.status(401).send("unauthenticated")
  }
}

module.exports = isAuthenticated

// const jwt = require("jsonwebtoken");

// const isAuthenticated = async (req, res, next) => {
//   try {
//     const token = req.header.authorization?.split(" ")[1];
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded._id).select("-password");

//     if (!user) throw new Error("User not found!");

//     req.user = user;
//   } catch (error) {
//     return res.status(401).send("Unauthenticated");
//   }
// };

// module.exports = isAuthenticated;

