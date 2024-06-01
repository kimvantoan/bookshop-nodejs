import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {formatPrice} from '../../utils/FormatPrice'
const Billing = () => {
  const { Cart } = useContext(CartContext);
  let total=0
  Cart.forEach(item=>{
    total+=item.currentPrice*item.count
  })
  return (
    <div className="bg-white rounded-lg px-3 w-1/3 text-center">
        <div className="justify-between flex py-2 border-b border-gray-300">
          <div>Thành tiền</div>
          <div>{formatPrice(total)}</div>
        </div>    
      <div className="font-semibold py-2 gap-9 flex justify-between">
        <div>Tổng Số Tiền (gồm VAT)</div>
        <div className="text-red-600 text-xl">{formatPrice(total)}</div>
      </div>
      <button className="uppercase font-bold text-white text-xl bg-red-500 py-3 px-14 rounded-lg ">
        Thanh toan
      </button>
    </div>
  );
};

export default Billing;
