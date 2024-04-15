import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../../components/HeaderAdmin";
import axios from "axios";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Book = () => {
  const [books, setBook] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:2003/book/allBook`)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <HeaderAdmin />
      <Link to="/dashBoard/book/create" className="px-2 py-3 bg-blue-600 text-white rounded ml-36">New Book</Link>
      <ul role="list" className="divide-y divide-gray-100 px-36">
        {books.map((book) => (
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-20 w-16 flex-none  bg-gray-50"
                src={book.imageURL}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-base font-semibold leading-6 text-gray-900">
                  {book.bookTitle}
                </p>
                <p className="mt-1 truncate text-sm  leading-5 text-gray-500">
                  {book.price}
                </p>
              </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-row sm:items-end gap-6">
              <PencilSquareIcon class="h-8 w-8 text-blue-500 cursor-pointer" />
              <TrashIcon class="h-8 w-8 text-red-500 cursor-pointer" />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Book;
