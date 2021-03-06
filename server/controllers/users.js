import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/users.js'
import { registerValidation, loginValidation } from '../validation.js'

const router = express.Router()

// Register new user
export const registerUser = async (req, res) => {
  // Validate input

  const { error } = registerValidation(req.body)
  if (error) {
    return res.status(400).send(error.details[0].message)
  }

  // Check if user already exists
  const doesEmailExist = await User.findOne({ email: req.body.email })

  if (doesEmailExist) {
    return res.status(400).send('Email already in use!')
  }

  // Hash password
  const salt = await bcrypt.genSalt()
  const hashPass = await bcrypt.hash(req.body.password, salt)

  // Create new user
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    userType: req.body.userType,
    password: hashPass
  })
  try {
    const savedUser = await newUser.save()
    res.send(savedUser)
    return true
  } catch (err) {
    res.status(400).send(err)
    return false
  }
}

export const loginUser = async (req, res) => {
  // Validate input
  const { error } = loginValidation(req.body)
  if (error) {
    return res.status(400).send(error.details[0].message)
  }

  // Check if input data is in database
  const user = await User.findOne({ email: req.body.email })
  if (!user) {
    return res.status(400).send('Email does not exist!')
  }

  const pass = await bcrypt.compare(req.body.password, user.password)
  if (!pass) {
    return res.status(400).send('Make sure password is correct!')
  }

  // Create token and assign to user
  // need to disable eslint no-underscore-dangle because mongoDB id's have that dangling underscore
  // eslint-disable-next-line no-underscore-dangle
  const tkn = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
  res.header('auth-token', tkn).send(tkn)

  return true
}
