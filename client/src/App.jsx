import React from "react";
import Register from "./pages/register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import Pagenotfound from "./pages/404_page/404_page.jsx";
import ProductDetail from "./pages/productDetail/ProductDetail.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Dashboard from "./pages/admin/dashBoard/DashBoard.jsx";
import Book from "./pages/admin/book/Book.jsx";
import CreateBook from "./components/actionBook/CreateBook.jsx";
import User from "./pages/admin/user/User.jsx";
import EditBook from "./components/actionBook/EditBook.jsx";
import { CartProvider } from "./context/CartContex.jsx";
const App = () => {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path="*" element={<Pagenotfound />} />

          <Route path="/dashBoard" element={<Dashboard />} />
          <Route path="/dashBoard/book" element={<Book />} />
          <Route path="/dashBoard/book/createBook" element={<CreateBook />} />
          <Route path="/dashBoard/book/updateBook/:id" element={<EditBook />} />
          <Route path="/dashBoard/user" element={<User />} />
        </Routes>

        <ToastContainer />
      </CartProvider>
    </>
  );
};

export default App;
