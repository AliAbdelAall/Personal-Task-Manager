const { User } = require('../models/user.model')

const getUserById = async (req, res) => {
  const { user } = req

  try {

    return res.json(user)

  } catch (error) {
    console.log(error)
    return res.status(500).send('Internal server error!')
  }
}

const addBoard = async (req, res) => {
  const { name } = req.body
  const { user } = req

  try {
    const newBoard = {
      name,
      columns: []
    }

    user.boards.push(newBoard)

    await user.save()

    return res.status(201).json({ message: 'Board added successfully', board: newBoard });

  } catch (error) {
    console.log(error);
    return res.status(500).send('Internal server error!');
  }

}

module.exports = { getUserById, addBoard }