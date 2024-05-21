import React, { useContext, useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { CookieContext } from "../../context/CookieContext";

const CommentInput = () => {
  const {id, name}=useContext(CookieContext)
  const [comment, setComment] = useState("");
  const id_book = useParams();
  const handleAddComment = async (e) => {
    try {
      await axios
        .post("http://localhost:2003/comment/new-comment", {
          id_user: id,
          id_book: id_book.id,
          username: name,
          comment: comment,
        })
        .then((res) => {
          if (res.data.success) {
            location.reload()
          } else {
            toast.error(res.data.message);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center">
      <textarea
        type="text"
        className="border border-blue-500 outline-none p-1 w-1/3 rounded-2xl"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={handleAddComment}>
        <PaperAirplaneIcon class="h-10 w-10 text-blue-500 cursor-pointer active:scale-50" />
      </button>
    </div>
  );
};

export default CommentInput;
