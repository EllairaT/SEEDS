const express = require('express')

const path = require('path')
const connectDB = require('./config/db')

const app = express()

const port = process.env.PORT || 5000
// Connect Database
connectDB()

app.get('/', (req, res) => res.send('Hello world!'))

if (process.env.NODE_ENV === 'production') {
  app.use('*', express.static(path.join(__dirname, 'client', 'build', 'index.html')))
}

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
