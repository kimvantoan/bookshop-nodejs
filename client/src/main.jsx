import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import { CookieProvider } from "./context/CookieContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <CartProvider>
    <CookieProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </CookieProvider>
   </CartProvider>
  </BrowserRouter>
);
