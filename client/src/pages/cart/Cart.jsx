import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import CartItem from "../../components/cartCpn/CartItem";
import Billing from "../../components/cartCpn/Billing";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { Cart } = useContext(CartContext);
  return (
    <Layout>
      <div className="flex items-start px-20 py-10 gap-8 bg-gray-100">
        <div className=" flex gap-4 flex-col w-2/3">
          {Cart.length !== 0 ? (
            Cart.map((Book) => {
              return <CartItem Book={Book} />;
            })
          ) : (
            <div>
              <div className="flex flex-col items-center">
                <div className="">
                  <img src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/checkout_cart/ico_emptycart.svg" />
                </div>
                <p className="text-sm my-5">
                  Chưa có sản phẩm trong giỏ hàng của bạn.
                </p>
                <Link
                  to={"/"}
                  className="text-white uppercase bg-red-600 hover:bg-red-500 p-3 rounded-md"
                >
                  Mua sắm ngay
                </Link>
              </div>
            </div>
          )}
        </div>
        <Billing />
      </div>
    </Layout>
  );
};

export default Cart;
