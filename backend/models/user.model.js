const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: "Username is required"
  },

  email: {
    type: String,
    require: "Email is required"
  },

  password: String
})

const user = mongoose.Model('USer', userSchema)

module.exports = user