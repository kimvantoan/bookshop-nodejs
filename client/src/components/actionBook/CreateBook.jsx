import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const CreateBook = () => {
  const navigate = useNavigate();
  const [bookTitle, setNamebook] = useState("");
  const [authorName, setAuthor] = useState("");
  const [description, setDesc] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [publisher, setPublisher] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [imageURL, setImage] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [form, setForm] = useState("");
  
  const formData=new FormData()
  formData.append('bookTitle',bookTitle)
  formData.append('authorName',authorName)
  formData.append('description',description)
  formData.append('originalPrice',originalPrice)
  formData.append('publisher',publisher)
  formData.append('publishDate',publishDate)
  formData.append('imageURL',imageURL)
  formData.append('pageCount',pageCount)
  formData.append('form',form)

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:2003/book/createBook", formData,{
          headers:{'Content-Type':'multipart/form-data'}
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
        <h2 className=" mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create Book
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-5" action="#" method="POST">
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
                
                name="imageURL"
                type="file"
                onChange={(e) => {
                  setImage(e.target.files[0]);
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
              onClick={handleCreate}
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
  );
};

export default CreateBook;
