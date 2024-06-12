import React, { useContext } from "react";
import { UsersIcon, CubeIcon } from "@heroicons/react/24/outline";
import LayoutAdmin from "../../../components/layoutAdmin/LayoutAdmin";
import { OrderContext } from "../../../context/OrderContext";
import { UserContext } from "../../../context/UserContext";
const Dashboard = () => {
  const { orders } = useContext(OrderContext);
  const { users } = useContext(UserContext);
  const items = [
    {
      display: "Total User",
      count: users.length,
      icon: <UsersIcon class="h-8 w-8 text-blue-700" />,
      bgColor: "bg-blue-200",
    },
    {
      display: "Total Order",
      count: orders.length,
      icon: <CubeIcon class="h-8 w-8 text-yellow-700" />,
      bgColor: "bg-yellow-200",
    },
  ];
  return (
    <LayoutAdmin>
      <div className="p-3 bg-blue-50">
        <div className="font-semibold mb-4 text-4xl">DASHBOARD</div>
        <div className="flex gap-10">
          {items.map((item) => (
            <div className="flex gap-6 items-center bg-white p-5 shadow-2xl rounded-3xl">
              <div className="flex flex-col gap-4">
                <div className="text-xl text-gray-600">{item.display}</div>
                <div className="text-3xl font-semibold">{item.count}</div>
              </div>
              <i className={`p-4 ${item.bgColor} rounded-full`}>{item.icon}</i>
            </div>
          ))}
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default Dashboard;
