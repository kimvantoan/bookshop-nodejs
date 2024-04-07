import express from 'express'
import {getAllUser,getSingleUser,updateUser,deleteUser} from '../controllers/user.controller.js'
import  {verify,isAdmin} from '../middleware/veryfi.js'
const router=express.Router()

router.get('/allUser',isAdmin,getAllUser)
router.get('/singleUser/:id',isAdmin,getSingleUser)
router.put('/updateUser/:id',isAdmin,updateUser)
router.delete('/deleteUser/:id',isAdmin,deleteUser)

export default router

