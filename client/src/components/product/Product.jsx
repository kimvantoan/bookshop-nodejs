import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardProduct from "../cardProduct/CardProduct";

const Product = ({ result }) => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2003/book/allBook")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
            {result.length !== 0 ? result.map((product) => {
            return (
              <Link to={`/product/${product._id}`}>
                <CardProduct product={product} />
              </Link>
            );
          }) : products.map((product) => (
              <Link to={`/product/${product._id}`}>
                <CardProduct product={product}/>
              </Link>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Product;
