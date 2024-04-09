import express from 'express'
import { getAllBook,getSingleBook,updateBook,deleteBook,createBook } from '../controllers/book.controller.js'
const router=express.Router()
import  {verify,isAdmin} from '../middleware/veryfi.js'


router.get('/allBook',getAllBook)
router.get('/:id',getSingleBook)
router.put('/updateBook/:id',isAdmin,updateBook)
router.delete('/deleteBook/:id',isAdmin,deleteBook)
router.post('/createBook',isAdmin,createBook)

export default router
