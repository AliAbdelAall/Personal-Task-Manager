const jwt = require("jsonwebtoken")
const { User } = require("../models/user.model")

// check User here
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.header.authorization?.split(" ")[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decode._id)

    if (decoded) {
      req.user = user
    }
    next()
  } catch (error) {
    return res.status(401).send("unauthenticated")
  }
}

module.exports = isAuthenticated

