import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../components/layout/Layout";
import {  useParams } from "react-router-dom";
import Order from "../../components/order/Order";
import InforProduct from "../../components/order/InforProduct";
import { CartProvider } from "../../context/CartContex";

export default function ProductDetail() {
  const [product, setProduct] = useState([])
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:2003/book/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Layout>
      <CartProvider>
      <div className="bg-gray-200 px-24 py-5">
        <Order product={product}/>
        <InforProduct product={product}/>
      </div>
      </CartProvider>
    </Layout>
  );
}
