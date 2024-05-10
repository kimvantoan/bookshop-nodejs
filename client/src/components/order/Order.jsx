import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Quantity from "../quantity/Quantity";
import { CartContext } from "../../context/CartContex";

const Order = ({ product }) => {
  const {handleAddProduct}=useContext(CartContext)
  
  return (
    <div className="rounded-md bg-white overflow-hidden p-4">
      <div className="flex gap-12">
        <div className="flex flex-col items-center">
          <div className="w-2/3">
            <img src={product.imageURL} alt="" className="w-full" />
          </div>
          <div className="flex gap-9 mt-5">
            <button
              onClick={()=>handleAddProduct(product)}
              className="py-3 px-6 border-2 border-red-500 text-red-500 font-medium rounded-lg hover:bg-red-500 hover:text-white transition-all"
            >
              Thêm vào giỏ hàng
            </button>
            <Link
              to={"/cart"}
              className="py-3 px-14 border-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-700 transition-all"
            >
              Mua Ngay
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <div className=" text-2xl">{product.bookTitle}</div>
          <div className="grid grid-cols-2 gap-x-3">
            <div>
              <span className="text-gray-700">Nhà cung cấp: </span>
              <span className="font-semibold"></span>
            </div>
            <div>
              <span className="text-gray-700">Nhà xuất bản: </span>
              <span className="font-semibold">{product.publisher}</span>
            </div>
            <div>
              <span className="text-gray-700">Tác giả: </span>
              <span className="font-semibold">{product.authorName}</span>
            </div>
            <div>
              <span className="text-gray-700">Hình thức bìa: </span>
              <span className="font-semibold">{product.form}</span>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="text-red-500 text-3xl font-bold">
              {Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(product.currentPrice === 0 ? product.originalPrice : product.currentPrice )}
            </div>
            <s className={`${product.currentPrice === 0 ? "hidden": "inline"}`}>
              {Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(product.originalPrice)}
            </s>
            <div className={`font-bold p-1 bg-red-500 text-white rounded-md ${product.currentPrice === 0 ? "hidden": "inline"} `} >
              {-(((product.originalPrice - product.currentPrice) /
                product.originalPrice) *
                100).toFixed(0)}
              %
            </div>
          </div>
          <div className="flex gap-7">
            <div className="text-gray-700 font-medium text-lg">Số lượng:</div>
            <Quantity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
