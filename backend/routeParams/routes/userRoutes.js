import express from 'express'
import {  addUser, getbookById,  getUserById, patchUser, searchQuery, searchUser, UpdateUser } from '../controllers/userController.js'


const router = express.Router()

router.get('/user/:userId',getUserById)
router.get('/book/:bookId/:chapterId',getbookById)
router.get("/search", searchQuery);
router.get("/searchuser", searchUser);
router.post("/addUser",addUser)
router.put("/user",UpdateUser)
router.patch("/user", patchUser);


export default router
