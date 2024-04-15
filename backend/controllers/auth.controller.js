const { User } = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const register = async (req, res) => {

  try {
    const { username, email, password } = req.body
    console.log(username, email, password)

    const user = await User.findOne({ username })
    if (user) return res.status(400).send("User already exists!")

    const createdUser = await User.create(req.body)
    const token = jwt.sign({ _id: createdUser._id }, process.env.JWT_SECRET, { expiresIn: "2hrs" })
    return res.status(201).json({ message: "User Created succsessfully", token: token })

  } catch (error) {
    console.log(error)
    return res.status(500).send("Internal server error!")
  }
}

const login = async (req, res) => {

  try {
    const { username, password } = req.body

    const user = await User.findOne({ username })
    if (!user) return res.status(400).send("username/password incorrect")

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).send("username/password incorrect")

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "2hrs" })
    return res.status(200).json({ message: "Logged in succsessfully", token: token })

  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error!");
  }

}

module.exports = { register, login }