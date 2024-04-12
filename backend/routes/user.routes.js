const express = require('express')

const {
  getAllUsers,
  getUserById,
  createUser,

} = require('../controllers/user.controller')

const router = express.Router()

router.get('/get-all-users', getAllUsers)
router.get('/get-user/:id', getUserById)


module.exports = router