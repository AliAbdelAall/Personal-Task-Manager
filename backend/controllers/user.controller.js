const User = require('../models/user.model')

const getAllUsers = async (req, res) => {

  try {
    const users = User.find()
    return res.json(users)

  } catch (error) {
    return res.status(500).send("internal server error!")
  }

}

const getUserById = async (req, res) => {
  const { id } = req.params
  try {
    const user = User.findById(id)
    return res.json(user)
  } catch (error) {
    return res.status(500).send('Internal server error!')
  }
}

const createUser = async (req, res) => {
  const { email, username, password } = req.body

  try {
    const createdUser = await User.create({
      username,
      email,
      password
    })
    return res.json(createdUser)
  } catch (error) {
    return res.status(500).send('Internal server error!')
  }

}

module.exports =
{
  getAllUsers,
  getUserById,

}