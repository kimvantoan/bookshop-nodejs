import express from 'express'
import { addComment,editComment ,deleteComment,getCommentByIDBook} from '../controllers/comment.controller.js'
const router=express.Router()

router.post('/all-comment',getCommentByIDBook)
router.post('/new-comment',addComment)
router.post('/delete-comment',deleteComment)
router.post('/edit-comment',editComment)
// router.delete('/delete-comment',)

export default router