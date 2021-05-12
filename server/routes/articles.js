import express from 'express'

const router = express.Router()

import { getArticle } from '../controllers/articles.js'
// routes and callback funct
router.get('/', getArticle)

export default router
