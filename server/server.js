// server.js
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import postRoutes from './routes/articles.js'
import authRoute from './routes/auth.js'
dotenv.config({ path: '../.env' })

const app = express()
const { PORT } = process.env

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
