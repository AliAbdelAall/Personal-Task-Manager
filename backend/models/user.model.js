const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: "Username is required",
    unique: "email should be unique"

  },

  email: {
    type: String,
    required: "Email is required",
    unique: "email should be unique"
  },

  password: {
    type: String,
    required: "Password is required",
    selectable: false
  }
})

const User = mongoose.model('User', userSchema)

module.exports = { User, userSchema }