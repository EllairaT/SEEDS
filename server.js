// server.js
const express = require('express')
const dotenv = require('dotenv')

const app = express()
const path = require('path')
const connectDB = require('./config/db')
const authRoute = require('./routes/auth')
const postRoutes = require('./routes/posts')

const PORT = 5000
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
app.use('/auth', authRoute)
app.use('/posts', postRoutes)

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
