const { User } = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const register = async (req, res) => {

  const { username, email, password } = req.body

  try {
    const user = user.find(username)
    if (user) return res.status(500).send("internal server error!")

    const hashedPssword = await bcrypt.hash(password, 10)

    const createdUser = await User.create({
      username,
      email,
      password: hashedPssword
    })

    return res.status(201).json({ user: createdUser, token })
  } catch (error) {
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

    const token = jwt.sign({ _d: user._id }, process.env.JWT_SECRET, { expiresIn: "2hrs" })
    return res.status(200).json(user, token)

  } catch (error) {
    console.log(error);
    return res.send(500).send("Internal server error!");
  }

}

module.exports = { register, login }
