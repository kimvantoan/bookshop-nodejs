import express from 'express'
import { getAll,addCart, deleteCart } from '../controllers/cart.controller.js'

const router=express.Router()

router.post('/',getAll)
router.post('/addtocart',addCart)
router.post('/delete/',deleteCart)


export default router
