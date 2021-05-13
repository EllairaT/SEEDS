import express from 'express'

import { loginUser, registerUser } from '../controllers/users'

const router = express.Router()

router.post('/', loginUser)
router.post('/', registerUser)

export default router
