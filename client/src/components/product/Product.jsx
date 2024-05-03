import React, { useContext} from "react";

import { Link } from "react-router-dom";
import CardProduct from "../cardProduct/CardProduct";
import { BookContext } from "../../context/BookContext";


const Product = () => {
  const {Books} = useContext(BookContext);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
          {Books.map((Book) => (
            <Link to={`/product/${Book._id}`}>
              <CardProduct Book={Book} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
