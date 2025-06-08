import express from 'express'
import { getbookById, getUserById, searchQuery } from '../controllers/userController.js'


const router = express.Router()

router.get('/user/:userId',getUserById)
router.get('/book/:bookId/:chapterId',getbookById)
router.get("/search", searchQuery);

export default router
