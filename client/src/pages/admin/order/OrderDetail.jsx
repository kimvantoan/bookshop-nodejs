import React, { useEffect } from "react";
import { formatDate } from "../../../utils/FormatDate";
import { formatPrice } from "../../../utils/FormatPrice";
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { toast } from "react-toastify";

const OrderDetail = ({ order, setOpen, setOrderDetail }) => {
  const handleUpdateStatus = async (status) => {
    const res = await axios.put("http://localhost:2003/order/updateStatus", {
      id: order._id,
      status: status,
    });
    if (res.data.success) {
      location.reload()
    }
  };

  return (
    <div className="bg-white flex shadow-xl absolute mt-7 left-1/2 -translate-x-1/2 p-10 flex-col gap-10">
      <XMarkIcon
        class="h-6 w-6 text-gray-500 cursor-pointer hover:text-red-500 absolute right-3 top-3"
        onClick={() => {
          setOpen(false);
        }}
      />
      <h1 className="font-bold text-5xl text-center">Order Detail</h1>
      <table>
        <tr>
          <td>Name</td>
          <td>{order.name}</td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>{order.phone}</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>{order.address}</td>
        </tr>
        <tr>
          <td>Order Date</td>
          <td>{formatDate(order.date)}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{formatPrice(order.total)}</td>
        </tr>
      </table>
      <table class="table-fixed w-full shadow-lg">
        <thead className="bg-gray-300 shadow-lg ">
          <tr>
            <th className="py-2">No.</th>
            <th>Book Name</th>
            <th>Image</th>
            <th>Count</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {order.products.map((book, index) => (
            <tr className={`${index % 2 === 0 ? "bg-gray-100" : ""}`}>
              <td className="py-7 text-center font-semibold">{index + 1}</td>
              <td>{book.bookTitle}</td>
              <td>
                <img
                  src={`http://localhost:2003/images/${book.imageURL}`}
                  alt=""
                />
              </td>
              <td>{book.count}</td>
              <td>
                {book.currentPrice !== 0
                  ? formatPrice(book.currentPrice)
                  : formatPrice(book.originalPrice)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-10 justify-center">
        <button
          onClick={() => handleUpdateStatus("Approve")}
          className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white"
        >
          Approve
        </button>
        <button
          onClick={() => handleUpdateStatus("Cancel")}
          className="border border-red-500 rounded-md px-3 py-1"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
