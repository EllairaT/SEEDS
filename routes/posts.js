const router = require('express').Router()

// routes and callback funct
router.get('/', (req, res) => {
  res.send('working?')
})

module.exports = router
