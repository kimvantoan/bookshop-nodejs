import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { CookieContext } from "./CookieContext";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);
  const { id } = useContext(CookieContext);
  useEffect(() => {
    const fetch = async () => {
      const id_user = await id;
      if (id_user) {
        try {
          const response = await axios.post("http://localhost:2003/cart", {
            id_user: id_user,
          });
          setCart(response.data.cart.products);
        } catch (err) {
          console.log("Error fetching cart:", err);
        }
      }
    };
    fetch()
  },[id]);

  return (
    <CartContext.Provider value={{ Cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
