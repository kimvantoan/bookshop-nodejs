import React, { useContext, useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import CommentInput from "./CommentInput";
import { useParams } from "react-router-dom";
import axios from "axios";
const Comment = () => {
  const [comments, setComment] = useState([]);
  const id_book = useParams();
  useEffect(() => {
    axios
      .post("http://localhost:2003/comment/all-comment", {
        id_book: id_book.id,
      })
      .then((res) => setComment(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="bg-white rounded-md overflow-hidden px-10 py-4 relative">
      <div className="font-semibold text-xl">Bình Luận:</div>
      {comments.map((cmt) => (
        <CommentItem cmt={cmt} />
      ))}
      <CommentInput comments={comments} setComment={setComment} />
      
    </div>
  );
};

export default Comment;
