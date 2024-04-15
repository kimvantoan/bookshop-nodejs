import React, { useState } from "react";
import Register from "./pages/register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes,Route } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Home from './pages/home/Home.jsx'
import About from "./pages/about/About.jsx";
import Pagenotfound from "./pages/404_page/404_page.jsx";
import Product from "./pages/product/Product.jsx";
import ProductDetail from "./pages/productDetail/ProductDetail.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Dashboard from "./pages/admin/dashBoard/DashBoard.jsx";
import Book from "./pages/admin/book/Book.jsx";
import CreateBook from "./pages/admin/book/CreateBook.jsx";
const App = () => {
  const [cartitem, setCartitem] = useState([])
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/cart" element={<Cart cartitem={cartitem}/>}/>
        <Route path="/product/:id" element={<ProductDetail cartitem={cartitem} setCartitem={setCartitem}/>}/>
        <Route path="*" element={<Pagenotfound/>}/>
        <Route path="/dashBoard" element={<Dashboard/>}/>
        <Route path="/dashBoard/book" element={<Book/>}/>
        <Route path="/dashBoard/book/create" element={<CreateBook/>}/>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
