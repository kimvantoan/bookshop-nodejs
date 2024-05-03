import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const BookContext = createContext({});

export const BookProvider = ({ children }) => {
  const [Books, setBook] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2003/book/allBook")
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <BookContext.Provider value={{ Books }}>{children}</BookContext.Provider>
  );
};
