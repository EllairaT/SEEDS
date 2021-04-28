const express = require('express')

const router = express.Router()

const User = require('../models/users')

// Routes
router.get('/', (req, res) => {
  User.find({})
    .then((data) => {
      console.log('Data: ', data)
      res.json(data)
    })
    .catch(() => {
      console.log('error: ')
    })
})

router.post('/save', (req, res) => {
  const data = req.body

  const newBlogPost = new User(data)

  newBlogPost.save((error) => {
    if (error) {
      res.status(500).json({ msg: 'Sorry, internal server errors' })
    }
    // User
    return res.json({ msg: 'Your data has been saved!' })
  })
})

module.exports = router
