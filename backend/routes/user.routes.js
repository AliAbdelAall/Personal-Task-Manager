const express = require('express')
const { getUserById, addBoard } = require("../controllers/user.controller")
const isAuthenticated = require("../middlewares/auth.middleware")
const router = express.Router()


router.get('/get-user', isAuthenticated, getUserById)
router.post('/add-board', isAuthenticated, addBoard)

module.exports = router