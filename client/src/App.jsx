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
import Dashboard from "./pages/admin/dashboard/Dashboard.jsx";
import Book from "./pages/admin/book/Book.jsx";
import CreateBook from "./components/actionBook/CreateBook.jsx";
import User from "./pages/admin/user/User.jsx";
import EditBook from "./components/actionBook/EditBook.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { BookProvider } from "./context/BookContext.jsx";
import ChangePassword from "./pages/changePassword/ChangePassword.jsx";
import Order from "./pages/admin/order/Order.jsx";
import { OrderProvider } from "./context/OrderContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
const App = () => {
  return (
    <>
      <CartProvider>
        <OrderProvider>
          <BookProvider>
            <UserProvider>
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/signup" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/changePassword" element={<ChangePassword />} />

                <Route path="/cart" element={<Cart />} />

                <Route path="/product/:id" element={<ProductDetail />} />

                <Route path="*" element={<Pagenotfound />} />

                <Route path="/dashBoard" element={<Dashboard />} />
                <Route path="/book" element={<Book />} />
                <Route
                  path="/book/createBook"
                  element={<CreateBook />}
                />
                <Route
                  path="/book/updateBook/:id"
                  element={<EditBook />}
                />
                <Route path="/user" element={<User />} />
                <Route path="/order" element={<Order />} />
              </Routes>

              <ToastContainer />
            </UserProvider>
          </BookProvider>
        </OrderProvider>
      </CartProvider>
    </>
  );
};

export default App;
