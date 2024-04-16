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

const addTag = async (req, res) => {
  const { name } = req.body
  const { user } = req

  try {
    const newTag = {
      name,
    }

    user.tags.push(newTag)

    await user.save()

    return res.status(201).json({ message: 'Tag added successfully', tag: newTag });

  } catch (error) {
    console.log(error);
    return res.status(500).send('Internal server error!');
  }
}

const addColumn = async (req, res) => {
  const { boardId, title } = req.body
  const { user } = req
  console.log(boardId)
  try {
    const board = user.boards.id(boardId)

    if (!board) {
      return res.status(404).send("Board not found")
    }

    const newColumn = {
      title,
      tasks: []
    }
    board.columns.push(newColumn)
    await user.save()
    return res.status(201).json({
      message: "Column created successfuly",
      column: { ...newColumn, boardId: boardId, }
    })

  } catch (error) {
    console.log(error);
    return res.status(500).send('Internal server error!');
  }



}

module.exports = { getUserById, addBoard, addTag, addColumn }