// server.js
const express = require('express')
const dotenv = require('dotenv')

const app = express()
const path = require('path')
const connectDB = require('./config/db')
const authRoute = require('./routes/auth')
const articleRoute = require('./routes/article')

const { PORT } = process.env
dotenv.config()

connectDB()

// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }))

// Middleware
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.send('Server is running!')
})

// Route middleware
app.use('/api/user', authRoute)
app.use('/api/user', articleRoute)
app.use('/api/user/facebookauth/')
app.use('/api/user/googleauth/')

// Route client build
if (['production'].includes(process.env.NODE_ENV)) {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'))
  })
}
// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`)
})
