import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import { CookieProvider } from "./context/CookieContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CookieProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </CookieProvider>
  </BrowserRouter>
);
