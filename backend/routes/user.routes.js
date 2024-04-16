const express = require('express')
const { getUserById, addBoard, addTag, addColumn } = require("../controllers/user.controller")
const isAuthenticated = require("../middlewares/auth.middleware")
const router = express.Router()


router.get('/get-user', isAuthenticated, getUserById)
router.post('/add-board', isAuthenticated, addBoard)
router.post('/add-tag', isAuthenticated, addTag)
router.post('/add-column', isAuthenticated, addColumn)

module.exports = router