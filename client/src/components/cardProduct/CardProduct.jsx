import React from "react";
import { formatPrice } from "../../utils/FormatPrice";

function CardProduct({ Book }) {
  return (
    <div className="p-2 hover:shadow-lg">
      <div className="aspect-h-1 aspect-w-1 w-full h-80 overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7  ">
        <img
          src={`http://localhost:2003/images/${Book?.imageURL}`}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-base font-bold text-gray-700">
        {Book?.bookTitle}
      </h3>
      <p className="mt-1 text-lg font-medium text-red-600">
        {formatPrice(
          Book.currentPrice === 0 ? Book.originalPrice : Book.currentPrice
        )}
      </p>
    </div>
  );
}

export default CardProduct;
