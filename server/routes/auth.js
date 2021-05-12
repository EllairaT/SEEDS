import express from 'express'

const router = express.Router()

import { loginUser, registerUser } from '../controllers/users.js'

router.post('/', loginUser)
router.post('/', registerUser)

export default router
