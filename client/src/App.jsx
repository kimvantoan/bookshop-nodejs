import React from "react";
import Register from "./pages/register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes,Route } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Home from './pages/home/Home.jsx'
import About from "./pages/about/About.jsx";
import Pagenotfound from "./pages/404_page/404_page.jsx";
import Product from "./pages/product/Product.jsx";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="*" element={<Pagenotfound/>}/>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
