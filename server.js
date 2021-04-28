const express = require('express')

const path = require('path')
const connectDB = require('./config/db')

const app = express()

// Connect Database
connectDB()

app.get('/', (req, res) => res.send('Hello world!'))

const PORT = process.env.PORT || 3000

// ... other app.use middleware
app.use(express.static(path.join(__dirname, 'seeds_app_client', 'build')))

// ...
// Right before your app.listen(), add this:
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'seeds_app_client', 'build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`)
})
