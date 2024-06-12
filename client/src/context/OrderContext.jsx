import axios from "axios";
import React, {  createContext, useEffect, useState } from "react";

export const OrderContext = createContext({});

export const OrderProvider = ({ children }) => {
    const [order, setOrderDetail] = useState({});

    const [orders, setOrder] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:2003/order")
        .then((res) => setOrder(res.data))
        .catch((err) => console.log(err));
    }, []);
    const handleDeleteOrder = async (id) => {
      const res = await axios.post("http://localhost:2003/order/deleteOrder", {
        id: id,
      });
      res.data.success ? toast.success(res.data.message) : "";
      setOrder((prevOrders) => prevOrders.filter((order) => order._id !== id));
    };

  return (
    <OrderContext.Provider value={{order,setOrderDetail,orders,handleDeleteOrder}}>
      {children}
    </OrderContext.Provider>
  );
};
