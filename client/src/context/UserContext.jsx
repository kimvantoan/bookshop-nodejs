import axios from "axios";
import React, {  createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [users, setUser] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:2003/user/allUser`)
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err));
    }, []);
    const handleDelete = async (id) => {
      try {
        await axios
          .delete(`http://localhost:2003/user/deleteUser/${id}`)
          .then((res) => {
            if (res.data.success) {
              navigate("/dashBoard/book");
              toast.success(res.data.message);
            } else {
              toast.error(res.data.message);
            }
          });
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <UserContext.Provider value={{users,handleDelete}}>
      {children}
    </UserContext.Provider>
  );
};
