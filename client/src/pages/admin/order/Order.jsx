import React, { useContext, useEffect, useState } from "react";
import { formatPrice } from "../../../utils/FormatPrice";
import { formatDate } from "../../../utils/FormatDate";
import { InformationCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import OrderDetail from "./OrderDetail";
import LayoutAdmin from "../../../components/layoutAdmin/LayoutAdmin";
import { OrderContext } from "../../../context/OrderContext";
const Order = () => {
  const [open, setOpen] = useState(false);

  const { handleDeleteOrder, order, orders, setOrderDetail } =
    useContext(OrderContext);
  return (
    <LayoutAdmin>
      <div className="relative p-5 bg-blue-50">
        {open ? (
          <OrderDetail
            order={order}
            setOrderDetail={setOrderDetail}
            setOpen={setOpen}
          />
        ) : (
          ""
        )}
        <div className="font-semibold mb-4 text-4xl">ORDER</div>
        <table class="table-fixed w-full border border-separate shadow-lg rounded-lg ">
          <thead className="bg-gray-200 shadow-lg ">
            <tr>
              <th className="py-2 w-14">NO.</th>
              <th>Customer</th>
              <th>Order Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className=" text-center">
            {orders.map((order, index) => (
              <>
                <tr
                  className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="py-7 text-center font-semibold">
                    {index + 1}
                  </td>
                  <td>{order.name}</td>
                  <td>{formatDate(order.date)}</td>
                  <td>{formatPrice(order.total)}</td>
                  <td>{order.status}</td>
                  <td className="flex justify-center gap-4 py-7">
                    <InformationCircleIcon
                      onClick={() => {
                        setOpen(true), setOrderDetail(order);
                      }}
                      class="h-8 w-8 cursor-pointer text-blue-500"
                    />
                    <TrashIcon
                      onClick={() => {
                        handleDeleteOrder(order._id);
                      }}
                      class="h-8 w-8 cursor-pointer text-red-500"
                    />
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </LayoutAdmin>
  );
};

export default Order;
