import React from "react";
import CartItem from "../../components/CartItem";
import Billing from "../../components/Billing";

const Cart = ({ cartitem }) => {
  console.log(cartitem);
  return (
    <main className="py-12 max-w-7xl container mx-auto px-4">
      <div className="container mx-auto">
        <h2 className="mb-5 text-xl font-bold">Shopping Cart</h2>
        <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-4">
          <div className="space-y-6 md:w-2/3">
            {cartitem.map((item) => {
              return <CartItem item={item} />;
            })}
          </div>
          <div className="md:w-1/3">
            <Billing />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
