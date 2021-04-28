const express = require('express')

const path = require('path')
const connectDB = require('./config/db')

const app = express()

// Connect Database
connectDB()

app.get('/', (req, res) => res.send('Hello world!'))

const port = process.env.PORT || 8000

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('seeds_app_client/build'))
}

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
