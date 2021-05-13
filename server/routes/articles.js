import express from 'express'

import getArticle from '../controllers/articles'

const router = express.Router()

// routes and callback funct
router.get('/', getArticle)

export default router
