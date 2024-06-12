import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  BookOpenIcon,
  UserIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";

const sidebarnavItem = [
  {
    display: "Dashboard",
    to: "/dashBoard",
    icon: <HomeIcon className="h-6 w-6 " />,
  },
  {
    display: "Book",
    to: "/book",
    icon: <BookOpenIcon className="h-6 w-6 " />,
  },
  {
    display: "User",
    to: "/user",
    icon: <UserIcon className="h-6 w-6 " />,
  },
  {
    display: "Order",
    to: "/order",
    icon: <ListBulletIcon className="h-6 w-6 " />,
  },
];

const SideBar = () => {
  return (
    <div className="h-screen min-w-56  p-3 bg-white rounded-md shadow-md">
      <div className="mb-9">
        <div className="font-extrabold text-5xl">LOGO</div>
        <div className="text-gray-500">Modern Admin Dashboard</div>
      </div>
      <ul className="flex flex-col gap-7">
        {sidebarnavItem.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) => {
              return "p-3 flex gap-2 rounded-md " + ( isActive ? 'bg-blue-100 text-blue-500 font-bold' : 'bg-white');
            }}
          >
            {item.icon}
            {item.display}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
