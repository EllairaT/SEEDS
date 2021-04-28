const mongoose = require('mongoose')

// Schema
const { Schema } = mongoose

// for security reasons, passwords will not be stored. Instead, the hash and salt will be stored.
const UserSchema = new Schema({
  name: String,
  password: String,
  email: String,
  hash: String,
  salt: String,
  userType: String,
  loginInfo: {
    userCreated: Date,
    lastLogin: Date
  }
})

// Model
const User = mongoose.model('User', UserSchema)

module.exports = User
