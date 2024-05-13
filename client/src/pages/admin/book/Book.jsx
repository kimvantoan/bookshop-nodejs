import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../../components/HeaderAdmin";
import axios from "axios";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Book = () => {
  const [books, setBook] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:2003/book/allBook`)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios
        .delete(`http://localhost:2003/book/deleteBook/${id}`)
        .then((res) => {
          if (res.data.success) {
            window.location.reload();
          } else {
            toast.error(res.data.message);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <HeaderAdmin />
      <Link
        to="/dashBoard/book/createBook"
        className="px-2 py-3 bg-blue-600 text-white rounded ml-36"
      >
        New Book
      </Link>
      <table class="table-fixed w-full mt-4">
        <thead className="bg-gray-200 shadow-lg ">
          <tr>
            <th className="py-2">NO.</th>
            <th>BOOK NAME</th>
            <th>AUTHOR NAME</th>
            <th>PRICE</th>
            <th>EDIT OR MANAGE</th>
          </tr>
        </thead>
        <tbody className=" text-center">
          {books.map((book, index) => (
            <tr className={`${index%2===0 ? 'bg-gray-50' : ''}`}>
              <td className="py-7 text-center font-semibold">{index+1}</td>
              <td className="text-left">{book.bookTitle}</td>
              <td>{book.authorName}</td>
              <td>{book.originalPrice}</td>
              <td className="flex justify-center gap-4 py-7">
                <Link to={`/dashBoard/book/updateBook/${book._id}`}>
                  <PencilSquareIcon class="h-8 w-8 text-blue-500 cursor-pointer" />
                </Link>
                <TrashIcon
                  onClick={() => handleDelete(book._id)}
                  class="h-8 w-8 text-red-500 cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Book;
