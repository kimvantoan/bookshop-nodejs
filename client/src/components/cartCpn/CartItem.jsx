import React, { useContext } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import Quantity from "../quantity/Quantity";
import { CartContext } from "../../context/CartContex";

const CartItem = ({ Book }) => {

  return (
    <div className="flex bg-white items-center justify-between gap-6 p-3 rounded-lg">
      <input type="checkbox" className="w-5 h-5" />
      <div className="w-1/4 h-1/4">
        <img className="w-fit" src={Book?.imageURL} alt="" />
      </div>
      <div className="flex flex-col gap-20">
        <div className="text-gray-600">{Book?.bookTitle}</div>
        <div>
          <span className="font-medium text-lg">
            {Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(Book?.price?.currentPrice)}
          </span>
          <s className="text-gray-500 text-sm ml-2">
            {Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(Book?.price?.originalPrice)}
          </s>
        </div>
      </div>
      <Quantity />
      <div className="font-medium text-lg text-red-600">
        {Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(Book?.price?.currentPrice)}
      </div>
      <button>
        <TrashIcon class="h-6 w-6 text-gray-500 cursor-pointer hover:text-red-500 " />
      </button>
    </div>
  );
};

export default CartItem;
