// server.js
const express = require('express')

const app = express()
const path = require('path')
const connectDB = require('./config/db')
const routes = require('./routes/api')

const PORT = process.env.PORT || 5000

connectDB()
// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('client/build'))
app.use('/api', routes)
// routes
app.get('/', (req, res) => {
  res.send('Server is running!')
})

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

// Bootstrap server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`)
})
