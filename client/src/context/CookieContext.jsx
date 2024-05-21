import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const CookieContext = createContext({});

export const CookieProvider = ({ children }) => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [id, setID] = useState("");
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const decode = jwtDecode(token);
      setRole(decode.role);
      setName(decode.name);
      setID(decode.id);
    }
  }, []);
  const handleLogOut = () => {
    location.replace("/login");
    Cookies.remove("token");
  };

  return (
    <CookieContext.Provider value={{ id, role, name, handleLogOut }}>
      {" "}
      {children}
    </CookieContext.Provider>
  );
};
