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

const login = async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })
  if (!user) return res.status(400).send("username/password incorrect")

  const isMatch = await user.comparePassword(password)
  if (!isMatch) return res.status(400).send("username/password incorrect")

  const token = jwt.sign({ _d: user._id }, process.env.JWT_SECRET)
  return res.status(200).json(user, token)

}

module.exports = { register, login }