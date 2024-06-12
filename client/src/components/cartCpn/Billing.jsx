import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { formatPrice } from "../../utils/FormatPrice";
import axios from "axios";
import { toast } from "react-toastify";
import { CookieContext } from "../../context/CookieContext";
const Billing = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const { Cart, setCart } = useContext(CartContext);
  const { id } = useContext(CookieContext);
  let total = 0;
  Cart.forEach((item) => {
    item.currentPrice === 0
      ? (total += item.originalPrice * item.count)
      : (total += item.currentPrice * item.count);
  });
  const handleOrder = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:2003/order/addOrder", {
        id_user: id,
        total: total,
        address: address,
        phone: phone,
        name: name,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        setCart([]);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <form action="" className="flex flex-col gap-2 border-2 p-3 rounded">
        <div className="flex justify-between">
          <label htmlFor="">name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="outline-none rounded-md p-1 border"
            type="text"
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="">phone</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            className="outline-none rounded-md p-1 border"
            type="number"
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="">address</label>
          <input
            onChange={(e) => setAddress(e.target.value)}
            className="outline-none rounded-md p-1 border"
            type="text"
          />
        </div>
      </form>
      <div className="bg-white rounded-lg px-3  text-center border-2">
        <div className="justify-between flex py-2 border-b border-gray-300">
          <div>Thành tiền</div>
          <div>{formatPrice(total)}</div>
        </div>
        <div className="font-semibold py-2 gap-9 flex justify-between">
          <div>Tổng Số Tiền (gồm VAT)</div>
          <div className="text-red-600 text-xl">{formatPrice(total)}</div>
        </div>
        <button
          onClick={handleOrder}
          className="uppercase font-bold text-white text-xl bg-red-500 py-3 px-14 rounded-lg "
        >
          Đặt hàng
        </button>
      </div>
    </div>
  );
};

export default Billing;
