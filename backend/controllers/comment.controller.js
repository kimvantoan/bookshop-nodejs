import Comments from "../models/comment.model.js";

export const addComment = async (req, res) => {
  try {
    const { id_user, id_book, username, comment } = req.body;
    if(!id_user){
      return res.send({message:"bạn phải đăng nhập để bình luận", success:false})
    }
    if(!comment){
      return res.send({success:false})
    }
    await Comments.create({
      id_user: id_user,
      id_book: id_book,
      username: username,
      comment: comment,
    });
    res.send({message:'bạn đã bình luận',success:true});
  } catch (error) {
    console.log(error);
    return res.send({ message: "something is wrong" })
  }
};

export const getCommentByIDBook = async (req, res) => {
  try {
    const PAGE_SIZE=3
    const { id_book } = req.body;
    let page=req.query.page
    if(page){
      page=parseInt(page)
      const comment = await Comments.find({ id_book: id_book }).skip((page-1)*PAGE_SIZE).limit(PAGE_SIZE);
      res.send(comment);
    }
    else{
      const comment = await Comments.find({ id_book: id_book })
      res.send(comment);
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment=async(req,res)=>{
  try {
    const {id}=req.body
    await Comments.findByIdAndDelete(id)
    res.send({success:true,message:"xóa bình luận thành công"})
  } catch (error) {
    console.log(error);
    return res.send({success:false})
  }
}

export const editComment=async(req,res)=>{
  try {
    const {id, comment}=req.body
    if(!comment){
      return res.send({success:false,message:"hãy nêu cảm nghĩ của bạn"})
    }
    await Comments.findByIdAndUpdate(id,{
      comment:comment
    })
    res.send({message:"sửa bình luận thành công",success:true})
  } catch (error) {
    console.log(error);
    return res.send(error)
  }
}