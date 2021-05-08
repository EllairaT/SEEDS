const router = require('express').Router()

const User = require('../models/users')
const { registerValidation } = require('../validation')

router.post('/register', async (req, res) => {
  // validate data
  const { error } = registerValidation(req.body)
  if (error) {
    return res.status(400).send(error.details[0].message)
  }

  // check if user already exists
  const doesEmailExist = await User.findOne({ email: req.body.email })

  if (doesEmailExist) {
    return res.status(400).send('Email already in use!')
  }

  // create new user
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    userType: req.body.userType,
    password: req.body.password
  })
  try {
    const savedUser = await newUser.save()
    res.send(savedUser)
    return true
  } catch (err) {
    res.status(400).send(err)
    return false
  }
})

module.exports = router
