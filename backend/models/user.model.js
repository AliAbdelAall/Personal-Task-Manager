const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
  columns: {
    tyype: [columnSchema],
    default: {}
  },

});
const columnSchema = new mongoose.Schema({
  tasks: {
    type: [taskSchema],
    default: []
  }

});
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  attachment: String,
  flag: String
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: "Username is required",
    unique: "email should be unique",
    minlength: [3, 'Username must be at least 3 characters long'],
    maxlength: [20, 'Username cannot exceed 20 characters'],
  },

  email: {
    type: String,
    required: "Email is required",
    unique: "email should be unique",
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
    select: false
  },

  boards: {
    type: [boardSchema],
    default: []
  }
})

const User = mongoose.model('User', userSchema)

module.exports = { User, userSchema }