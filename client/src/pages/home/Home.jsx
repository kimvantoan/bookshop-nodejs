import React, { useState } from "react";
import Header from "../../components/header/Header";
import Product from "../../components/product/Product";
import { BookProvider } from "../../context/BookContext";
const Home = () => {
  return (
    <>
      <BookProvider>
        <Header />
        <Product />
      </BookProvider>
    </>
  );
};

export default Home;
