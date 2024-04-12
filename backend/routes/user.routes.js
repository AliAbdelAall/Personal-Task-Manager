const express = require('express')

const {
  getAllUsers,
  getUserById,
  createUser,
} = require('../controllers/user.controller')

const router = express.Router()

router.get('/get-all-users', getAllUsers)
router.get('/:id/get-user', getUserById)
router.post('/create-user', createUser)

module.exports = router