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



  const handleAddProduct = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };
  const hanleRemoveProduct = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };
  return (
    <CartContext.Provider
      value={{ Cart, setCart, handleAddProduct,hanleRemoveProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};
