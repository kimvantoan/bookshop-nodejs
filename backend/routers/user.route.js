import express from 'express'
import {getAllUser,getSingleUser,updateUser,deleteUser} from '../controllers/user.controller.js'
import  {isAdmin} from '../middleware/veryfi.js'
const router=express.Router()

router.get('/allUser',getAllUser)
router.get('/singleUser/:id',getSingleUser)
router.put('/updateUser/:id',updateUser)
router.delete('/deleteUser/:id',deleteUser)

export default router

