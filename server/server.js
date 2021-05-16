// server.js
import express from 'express'
import { fileURLToPath } from 'url'
import cors from 'cors'
import path, { dirname } from 'path'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import apiRoutes from './routes/articles.js'
import authRoute from './routes/auth.js'

dotenv.config({ path: '../.env' })

const app = express()
const PORT = process.env.PORT || 5000
// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(fileURLToPath(import.meta.url))

connectDB()

// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Middleware
app.use(express.json())

// Routes
app.get('/server/*', (req, res) => {
  res.send('Server is running!')
})

// Route middleware
app.use('/auth', authRoute)
app.use('/api', apiRoutes)

// Route client build
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../client/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../client/build/index.html`))
})

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`)
})
