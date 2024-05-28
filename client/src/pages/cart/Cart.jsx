import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import CartItem from "../../components/cartCpn/CartItem";
import Billing from "../../components/cartCpn/Billing";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { Cart } = useContext(CartContext);

  return (
    <Layout>
      <div className="flex items-start px-20 py-10 gap-8 bg-gray-100">
        <div className=" flex gap-4 flex-col w-2/3">
          {Cart.map((Book) => {
            return <CartItem Book={Book} />;
          })}
        </div>
        <Billing />
      </div>
    </Layout>
  );
};

export default Cart;
