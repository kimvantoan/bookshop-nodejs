import React from "react";
import Register from "./pages/register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes,Route } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Home from './pages/home/Home.jsx'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
