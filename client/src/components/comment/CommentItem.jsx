import React, { useContext, useState } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { CookieContext } from "../../context/CookieContext";
import { toast } from "react-toastify";

const CommentItem = ({ cmt }) => {
  const { role, name } = useContext(CookieContext);
  const handleDeleteComment = async (id) => {
    try {
      await axios
        .post("http://localhost:2003/comment/delete-comment", { id })
        .then((res) => {
          if (res.data.success) {
            location.reload();
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditComment = async (id) => {
    try {
      await axios
        .post("http://localhost:2003/comment/edit-comment", { id,comment})
        .then((res) => {
          if (res.data.success) {
            toast.success(res.data.message);
          } else {
            toast.error(res.data.message);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [comment, setComment] = useState(cmt.comment);
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center py-3 bg-gray-100 px-6 rounded-lg mt-2">
      <div>
        <span className="font-medium text-lg mr-2">{cmt.username}</span>
        <div className="text-gray-600 text-sm">{cmt.comment}</div>
      </div>
      <div className="flex gap-2">
        <PencilSquareIcon
          onClick={() => setOpen(!open)}
          class={`${
            name === cmt.username ? "block" : "hidden"
          } h-7 w-7 text-blue-500 cursor-pointer`}
        />
        <TrashIcon
          onClick={() => handleDeleteComment(cmt._id)}
          class={`${
            name === cmt.username || role ? "block" : "hidden"
          } h-7 w-7 text-red-500 cursor-pointer`}
        />
      </div>
      <form
        className={`${
          open ? "block" : "hidden"
        } flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 px-3 bg-gray-200 rounded-lg w-1/2 `}
      >
        <div className="text-center font-semibold text-xl">Chỉnh sửa bình luận</div>
        <label htmlFor="" className="font-medium text-lg mr-2">
          {cmt.username}
        </label>
        <textarea
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="rounded-lg p-1  outline-none bg-gray-100"
        />
        <div className="flex gap-3 justify-end mt-2">
          <button
            onClick={() => handleEditComment(cmt._id)}
            className="cursor-pointer px-4 py-1 hover:bg-red-700 bg-red-600 text-white rounded-xl "
          >
            OK
          </button>
          <div
            onClick={() => setOpen(!open)}
            className="hover:bg-gray-600 cursor-pointer px-4 py-1 bg-gray-500 text-white rounded-xl "
          >
            Cancle
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentItem;
