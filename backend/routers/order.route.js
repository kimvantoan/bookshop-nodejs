import express from 'express'
import { addOrder, deleteOrderByID, getAllOrder, getOrderByID, updateStatus } from '../controllers/order.controller.js'
const router=express.Router()

router.post('/addOrder',addOrder)
router.get('/',getAllOrder)
router.post('/orderDetail',getOrderByID)
router.post('/deleteOrder',deleteOrderByID)
router.put('/updateStatus',updateStatus)

export default router
