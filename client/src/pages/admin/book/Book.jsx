import React, { useContext } from "react";
import HeaderAdmin from "../../../components/HeaderAdmin";
import axios from "axios";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BookContext } from "../../../context/BookContext";
import Search from "../../../components/search/Search";
const Book = () => {
  const { Books, setBook,Result } = useContext(BookContext);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:2003/book/deleteBook/${id}`
      );
      if (res.data.success) {
        setBook((prevBooks) => prevBooks.filter((book) => book._id !== id));
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  let book=Books
  if(Result.length!==0){
    book=Result
  }
  console.log(book);
  return (
    <>
      <HeaderAdmin />
      <div className="flex justify-center">
        <Search/>
      </div>
      <Link
        to="/dashBoard/book/createBook"
        className="px-2 py-3 bg-blue-600 text-white rounded ml-36"
      >
        Add Book
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
          {book.map((book, index) => (
            <tr className={`${index % 2 === 0 ? "bg-gray-50" : ""}`}>
              <td className="py-7 text-center font-semibold">{index + 1}</td>
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
