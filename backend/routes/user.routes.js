const express = require('express')

const {
  getAllUsers,
  getUserById,
  createUser,
} = require('../controllers/user.controller')

const router = express.Router()

router.get('/:id/get-user', getUserById)

module.exports = router