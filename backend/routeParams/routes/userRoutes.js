import express from 'express'
import { getbookById, getHouseById, getUserById, searchQuery } from '../controllers/userController.js'


const router = express.Router()

router.get('/user/:userId',getUserById)
router.get('/book/:bookId/:chapterId',getbookById)
router.get("/search", searchQuery);
router.get("/house", getHouseById);

export default router
