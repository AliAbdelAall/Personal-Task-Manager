const User = require('../models/user.model')

const getAllUsers = async (req, res) => {

  try {
    const users = User.find()
    return res.json(users)

  } catch (error) {
    return res.status(500).send("internal server error!")
  }

}

module.exports =
{
  getAllUsers,
}