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
  const [searchQuery, setSearchQuery] = useState("");
  const [Result, setResult] = useState([]);
  const handleSearch = (e) => {
    const filtered = Books.filter((item) =>
      item.bookTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResult(filtered);
  };

  return (
    <BookContext.Provider value={{ Books,setBook, handleSearch,setSearchQuery, searchQuery, Result }}>
      {children}
    </BookContext.Provider>
  );
};
