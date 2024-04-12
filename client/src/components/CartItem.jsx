import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

const CartItem = ({ item }) => {
  const [count, setCount] = useState(1);
  const handleMinus = () => {
    if (count > 1) setCount(count - 1);
  };
  const handlePlus = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div className="rounded-lg">
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img src={item.imageURL} className="w-full h-28 rounded-lg sm:w-40" />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            {/* product details */}
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">
                {item.bookTitle}
              </h2>
              <p className="mt-1 text-sm text-gray-700">Price: {Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(item.price)}</p>
            </div>

            {/* add & minus quantity */}
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <button
                  onClick={handleMinus}
                  className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                >
                  -
                </button>
                <div className="h-8 w-8 border flex items-center justify-center bg-white text-center text-xs outline-none">{count}</div>
                <button onClick={handlePlus} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                  +
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-sm">{Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(item.price*count)}</p>

                <button className="lws-removeFromCart">
                  <TrashIcon class="h-6 w-6 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
