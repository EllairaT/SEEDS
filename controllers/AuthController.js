const bcrypt = require('bcryptjs')
const token = require('jsonwebtoken')
const User = require('../models/users')

const register = (req, res, next) => {
  bcrypt.hash(req.body.password)
}
