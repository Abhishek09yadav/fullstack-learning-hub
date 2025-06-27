import express from 'express';
import loginController from '../controllers/loginController.js'
const router = express.Router()

router.post('/signup',loginController)

export default router;