import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import Quantity from "../quantity/Quantity";

const CartItem = ({ product }) => {
  return (
    <div className="flex bg-white items-center justify-between gap-6 p-3 rounded-lg">
      <input type="checkbox" className="w-5 h-5" />
      <div className="w-1/4 h-1/4">
        <img className="w-fit" src={product?.imageURL} alt="" />
      </div>
      <div className="flex flex-col gap-20">
        <div className="text-gray-600">{product?.bookTitle}</div>
        <div>
          <span className="font-medium text-lg">
            {Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product?.price?.currentPrice)}
          </span>
          <s className="text-gray-500 text-sm ml-2">
            {Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product?.price?.originalPrice)}
          </s>
        </div>
      </div>
      <Quantity />
      <div className="font-medium text-lg text-red-600">
        {Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(product?.price?.currentPrice)}
      </div>
      <TrashIcon class="h-6 w-6 text-gray-500 cursor-pointer hover:text-red-500 " />
    </div>
  );
};

export default CartItem;
