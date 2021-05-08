const mongoose = require('mongoose')

// Schema
const { Schema } = mongoose

// for security reasons, passwords will not be stored. Instead, the hash and salt will be stored.
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 50
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 50
  },
  userType: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    min: 10
  },
  date: {
    type: Date,
    default: Date.now,
    lastlogin: Date
  }
})

// Model
const User = mongoose.model('User', UserSchema)

module.exports = User
