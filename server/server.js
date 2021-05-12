// server.js
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import path, { dirname } from 'path'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import postRoutes from './routes/articles.js'
import authRoute from './routes/auth.js'
import { fileURLToPath } from 'url'
dotenv.config({ path: '../.env' })

const app = express()
const { PORT } = process.env
const __dirname = dirname(fileURLToPath(import.meta.url))

connectDB()

// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }))
app.use(cors())
// Middleware
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.send('Server is running!')
})

// Route middleware
app.use('/auth', authRoute)
app.use('/articles', postRoutes)

// Route client build
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../client/build')))

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'))
})

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`)
  console.log(__dirname)
})
