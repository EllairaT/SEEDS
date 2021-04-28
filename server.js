// server.js
const express = require('express')

const app = express()
const path = require('path')

const PORT = process.env.PORT || 5000

// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('client/build'))

// routes
app.get('/', (req, res) => {
  res.send('Hello from MERN')
})

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

// Bootstrap server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`)
})
