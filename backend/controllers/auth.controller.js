const { User } = require("../models/user.model")
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
  try {

    const { username, email, password } = req.body

    const user = user.find({ email })
    if (user) return res.status(500).send("internal server error!")

    const createdUser = await User.create(req.body)
    return res.status(201).json({ user: createdUser, token })
  } catch (error) {
    return res.status(500).send("internal server error!")
  }
}


module.exports = { register }