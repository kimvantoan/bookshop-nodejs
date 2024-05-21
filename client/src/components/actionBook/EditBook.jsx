import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const EditBook = () => {
  const [bookTitle, setNamebook] = useState("");
  const [authorName, setAuthor] = useState("");
  const [description, setDesc] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [publisher, setPublisher] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [imageURL, setImage] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [form, setForm] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:2003/book/${id}`)
      .then((res) => {
        setNamebook(res.data.bookTitle),
          setAuthor(res.data.authorName),
          setDesc(res.data.description),
          setOriginalPrice(res.data.originalPrice),
          setCurrentPrice(res.data.currentPrice),
          setImage(res.data.imageURL);
        setPublisher(res.data.publisher);
        setPublishDate(res.data.publishDate);
        setPageCount(res.data.pageCount);
        setForm(res.data.form);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put(`http://localhost:2003/book/updateBook/${id}`, {
          bookTitle,
          authorName,
          description,
          originalPrice,
          currentPrice,
          imageURL,
          publisher,
          publishDate,
          pageCount,
          form,
        })
        .then((res) => {
          if (res.data.success) {
            toast.success(res.data.message);
            navigate("/dashBoard/book");
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
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-3 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Edit Book
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-5" method="POST">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Name Book
              </label>
              <div className="mt-2">
                <input
                  id="bookTitle"
                  name="bookTitle"
                  type="text"
                  value={bookTitle}
                  onChange={(e) => {
                    setNamebook(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Author
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="author"
                  name="author"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={authorName}
                  onChange={(e) => {
                    setAuthor(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Description
                </label>
              </div>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  type="text"
                  required
                  className="block w-full rounded-md h-32 border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={description}
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Price
              </label>
              <div className="mt-2">
                Original Price
                <input
                  id="originalPrice"
                  name="originalPrice"
                  type="number"
                  value={originalPrice}
                  onChange={(e) => {
                    setOriginalPrice(e.target.value);
                  }}
                  placeholder="originalPrice"
                  className="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                Current Price
                <input
                  id="currentPrice"
                  name="currentPrice"
                  type="number"
                  value={currentPrice}
                  onChange={(e) => {
                    setCurrentPrice(e.target.value);
                  }}
                  placeholder="currentPrice"
                  className="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Publish
              </label>
              <div className="mt-2">
                <input
                  id="publisher"
                  name="publisher"
                  type="text"
                  value={publisher}
                  onChange={(e) => {
                    setPublisher(e.target.value);
                  }}
                  placeholder="publisher"
                  className="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <input
                  id="publishDate"
                  name="publishDate"
                  type="Date"
                  value={publishDate}
                  onChange={(e) => {
                    setPublishDate(e.target.value);
                  }}
                  placeholder="publishDate"
                  className="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Image URL
              </label>
              <div className="mt-2">
                <input
                  id="image"
                  name="image"
                  type="text"
                  value={imageURL}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Page Count
              </label>
              <div className="mt-2">
                <input
                  id="pageCount"
                  name="pageCount"
                  type="number"
                  value={pageCount}
                  onChange={(e) => {
                    setPageCount(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Form
              </label>
              <div className="mt-2">
                <input
                  id="form"
                  name="form"
                  type="text"
                  value={form}
                  onChange={(e) => {
                    setForm(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditBook;
