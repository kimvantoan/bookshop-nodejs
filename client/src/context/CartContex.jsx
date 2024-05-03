import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

  const [Cart, setCart] = useState(cartFromLocalStorage);
 
  useEffect(() => {
    const cartFromLocalStorage = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
    setCart(cartFromLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(Cart));
  }, [Cart]);
  console.log("cart:",Cart);


  const handleAddProduct = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };
  return (
    <CartContext.Provider
      value={{ Cart, setCart, handleAddProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};
