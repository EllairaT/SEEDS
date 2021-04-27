const express = require('express')

const path = require('path')
const connectDB = require('./config/db')

const app = express()

// Connect Database
connectDB()

app.get('/', (req, res) => res.send('Hello world!'))

const port = process.env.PORT || 8082

// ... other app.use middleware
app.use(express.static(path.join(__dirname, 'client', 'build')))

// ...
// Right before your app.listen(), add this:
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.listen(port, () => console.log(`Server running on port ${port}`))
