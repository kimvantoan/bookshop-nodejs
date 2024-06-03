import express from 'express'
import {login, register,logout, changePassword} from '../controllers/auth.controller.js'

const router=express.Router()

router.post('/register',register)
router.post('/login',login)
router.get('/logout',logout)
router.put('/changepassword',changePassword)

export default router