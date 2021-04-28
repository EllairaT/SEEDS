const express = require('express')

const path = require('path')
const connectDB = require('./config/db')

const app = express()

// Connect Database
connectDB()

app.get('/', (req, res) => res.send('Hello world!'))

const port = process.env.PORT || 8000

// ... other app.use middleware
app.use(express.static(path.join(__dirname, 'seeds_app_client', 'build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'seeds_app_client', 'build', 'index.html'))
})

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
