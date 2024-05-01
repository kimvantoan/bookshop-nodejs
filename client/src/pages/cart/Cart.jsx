import React from "react";
import Layout from "../../components/layout/Layout";
import CartItem from "../../components/cartCpn/CartItem";
import Billing from "../../components/cartCpn/Billing";

const Cart = () => {
  const products = JSON.parse(localStorage.getItem("cart"));
  console.log(products);
  return (
    <Layout>
      <div className="flex items-start px-20 py-10 gap-8 bg-gray-100">
        <div className=" flex gap-4 flex-col w-2/3">
          {products.map((product) => {
            return <CartItem product={product} />;
          })}
        </div>
        <Billing />
      </div>
    </Layout>
  );
};

export default Cart;
