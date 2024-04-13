const { User } = require('../models/user.model')

const getUserById = async (req, res) => {
  const { id } = req.params

  try {
    const user = await User.findById(id)
    console.log(user)
    return res.json(user)

  } catch (error) {
    console.log(error)
    return res.status(500).send('Internal server error!')
  }
}

module.exports = { getUserById }