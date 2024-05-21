import React from "react";
import Layout from "../../components/layout/Layout";
import CartItem from "../../components/cartCpn/CartItem";
import Billing from "../../components/cartCpn/Billing";
import { CartProvider } from "../../context/CartContext";

const Cart = () => {
  const Books = JSON.parse(localStorage.getItem("cart"));
  return (
    <Layout>
      <CartProvider>
      <div className="flex items-start px-20 py-10 gap-8 bg-gray-100">
        <div className=" flex gap-4 flex-col w-2/3">
          {Books.map((Book) => {
            return <CartItem Book={Book} />;
          })}
        </div>
        <Billing />
      </div>
      </CartProvider>
    </Layout>
  );
};

export default Cart;
