import React from "react";

function CardProduct({product}) {
  return (
    <div className="p-2 hover:shadow-lg">
      <div className="aspect-h-1 aspect-w-1 w-full h-80 overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7  ">
        <img
          src={product.imageURL}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-base font-bold text-gray-700">
        {product.bookTitle}
      </h3>
      <p className="mt-1 text-lg font-medium text-blue-600">
        {Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(product.price)}
      </p>
    </div>
  );
}

export default CardProduct;