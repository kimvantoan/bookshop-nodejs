import express from 'express'
import { getAllBook,getSingleBook,updateBook,deleteBook,createBook } from '../controllers/book.controller.js'
const router=express.Router()
import  {verify,isAdmin} from '../middleware/veryfi.js'


router.get('/allBook',getAllBook)
router.get('/:id',getSingleBook)
router.put('/updateBook/:id',updateBook)
router.delete('/deleteBook/:id',deleteBook)
router.post('/createBook',createBook)

export default router
