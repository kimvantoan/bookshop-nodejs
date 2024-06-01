import React, { useContext } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import Quantity from "../quantity/Quantity";
import axios from "axios";
import { toast } from "react-toastify";
import { CookieContext } from "../../context/CookieContext";
import { CartContext } from "../../context/CartContext";
import { formatPrice } from "../../utils/FormatPrice";

const CartItem = ({ Book }) => {
  const { id } = useContext(CookieContext);
  const { setCart } = useContext(CartContext);
  const handleRemove = async (id, id_book) => {
    try {
      const res = await axios.post("http://localhost:2003/cart/delete", {
        id_user: id,
        id_product: id_book,
      });
      if (res.data.success) {
        setCart((prevCart) =>
          prevCart.filter((cart) => cart.id_book !== id_book)
        );
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex bg-white items-center justify-between gap-6 p-3 rounded-lg">
      <input type="checkbox" className="w-5 h-5" />
      <div className="w-1/4 h-1/4">
        <img
          className="w-fit"
          src={`http://localhost:2003/images/${Book?.imageURL}`}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-20">
        <div className="text-gray-600">{Book?.bookTitle}</div>
        <div>
          <span className="font-medium text-lg">
            {formatPrice(
              Book.currentPrice === 0 ? Book.originalPrice : Book.currentPrice
            )}
          </span>
          <s
            className={`${
              Book.currentPrice === 0 ? "hidden" : "inline"
            } text-gray-500 text-sm ml-2 `}
          >
            {formatPrice(Book.originalPrice)}
          </s>
        </div>
      </div>
      <Quantity Book={Book} />
      <div className="font-medium text-lg text-red-600">
        {formatPrice(
          Book.currentPrice === 0 ? Book.originalPrice : Book.currentPrice
        )}
      </div>
      <button>
        <TrashIcon
          onClick={() => handleRemove(id, Book.id_book)}
          class="h-6 w-6 text-gray-500 cursor-pointer hover:text-red-500 "
        />
      </button>
    </div>
  );
};

export default CartItem;
