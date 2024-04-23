import React, { useState } from "react";
import Header from "../../components/header/Header";
import Product from "../../components/product/Product";
const Home = () => {
  const [result, setResult] = useState([]);
  return (
    <>
      <Header setResult={setResult}/>
      <Product result={result}/>
    </>
  );
};

export default Home;
