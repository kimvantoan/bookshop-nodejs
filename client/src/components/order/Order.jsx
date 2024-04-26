import React, { useEffect, useState } from "react";
import Quantity from "../quantity/Quantity";
import { Link } from "react-router-dom";

const Order = ({ product }) => {
  const cartLocalStorage = JSON.parse(localStorage.getItem('cart')|| [])
  const [cart, setCart] = useState(cartLocalStorage);
  const handleAddtoCart = (product) => {
    const arr = [...cart];
    setCart([...arr,product]);
  };
  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])

  useEffect(()=>{
    const data=localStorage.getItem('cart')
    if(data)
    setCart(JSON.parse(data))
  },[])
  
    console.log(cart); 
  return (
    <div className="rounded-md bg-white overflow-hidden p-4">
      <div className="flex gap-12">
        <div className="flex flex-col items-center">
          <div className="w-2/3">
            <img src={product.imageURL} alt="" className="w-full" />
          </div>
          <div className="flex gap-9 mt-5">
            <button
              onClick={()=>handleAddtoCart(product)}
              className="py-3 px-6 border-2 border-red-600 text-red-600 font-medium rounded-lg"
            >
              Thêm vào giỏ hàng
            </button>
            <Link
              to={"/cart"}
              className="py-3 px-14 border-2 bg-red-600 text-white font-medium rounded-lg"
            >
              Mua Ngay
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <div className=" text-2xl">{product.bookTitle}</div>
          <div className="grid grid-cols-2 gap-x-3">
            <div>
              <span>Nhà cung cấp: </span>
              <span className="font-bold"></span>
            </div>
            <div>
              <span>Nhà xuất bản: </span>
              <span className="font-bold">{product?.publish?.publisher}</span>
            </div>
            <div>
              <span>Tác giả: </span>
              <span className="font-bold">{product.authorName}</span>
            </div>
            <div>
              <span>Hình thức bìa: </span>
              <span className="font-bold">{product.form}</span>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="text-red-500 text-3xl font-bold">
              {Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(product?.price?.currentPrice)}
            </div>
            <s>
              {Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(product?.price?.originalPrice)}
            </s>
            <div className="font-bold p-1 bg-red-500 text-white rounded-md">
              {((product?.price?.originalPrice - product?.price?.currentPrice) /
                product?.price?.originalPrice) *
                100}
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
