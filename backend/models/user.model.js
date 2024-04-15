const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Tag name is required "
  }
})

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  description: String,

  attachment: String,

  completed: {
    type: Boolean,
    default: false
  },

  tag: tagSchema,
})

const columnSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Column title is required"
  },
  tasks: {
    type: [taskSchema],
    default: []
  }
})

const boardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Board name is required"
  },
  columns: {
    type: [columnSchema],
    default: []
  },
})

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: "Username is required",
    unique: "Username should be unique",
    minlength: [3, 'Username must be at least 3 characters long'],
    maxlength: [20, 'Username cannot exceed 20 characters'],
  },

  email: {
    type: String,
    required: "Email is required",
    unique: "Email should be unique",
    minlength: [5, 'Email must be at least 5 characters long'],
    maxlength: [50, 'Email cannot exceed 50 characters'],
    validate: {
      validator: function (v) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },

  password: {
    type: String,
    required: "Password is required",
    minlength: [6, 'Password must be at least 6 characters long'],
  },

  boards: {
    type: [boardSchema],
    default: []
  },

  tags: [tagSchema],
})

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next()
  this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.comparePassowrd = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
}

const User = mongoose.model('User', userSchema)

module.exports = { User, userSchema }