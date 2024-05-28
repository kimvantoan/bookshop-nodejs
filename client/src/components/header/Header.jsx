import React, { useContext, useEffect, useState } from "react";
import {
  BellIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Search from "../search/Search";
import { Link } from "react-router-dom";
import { BuildingLibraryIcon } from "@heroicons/react/24/outline";
import { CookieContext } from "../../context/CookieContext";

const Header = () => {
  const { role, name, handleLogOut } = useContext(CookieContext);
  const [open, setOpen] = useState(false);
  return (
    <div className={`flex px-10 py-5 relative justify-between`}>
      <Link to={"/"} className="text-4xl font-bold">
        LOGO
      </Link>
      <Search />
      <div className="flex flex-col items-center gap-1">
        <Link>
          <BellIcon class="h-6 w-6 text-gray-500 hover:text-blue-500" />
        </Link>
        <div>Thông Báo</div>
      </div>
      {role ? (
        <div className="flex flex-col items-center gap-1">
          <Link to={"/dashBoard"}>
            <BuildingLibraryIcon class="h-6 w-6 text-gray-500" />
          </Link>
          <div>Dash Board</div>
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col items-center gap-1">
        <Link to={"/cart"}>
          <ShoppingCartIcon class="h-6 w-6 text-gray-500 hover:text-blue-500 " />
        </Link>
        <div>Giỏ Hàng</div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Link>
          <UsersIcon
            class="h-6 w-6 text-gray-500 hover:text-blue-500"
            onClick={() => setOpen(!open)}
          />
        </Link>
        <div>{name ? name : "Tài khoản"}</div>
      </div>
      <div
        className={`absolute top-20 rounded-md bg-gray-100 p-4 gap-2 right-5 flex-col ${
          open ? "flex" : "hidden"
        }`}
      >
        {name ? (
          <button
            onClick={handleLogOut}
            className="px-3 py-1 border-2 border-red-500  text-white font-bold bg-red-500 rounded-md"
          >
            Đăn xuất
          </button>
        ) : (
          <>
            <Link
              to={"/login"}
              className="px-3 py-1 border-2 border-red-500  text-white font-bold bg-red-500 rounded-md"
            >
              Đăng Nhập
            </Link>
            <Link
              to={"/signup"}
              className="border-red-500 text-red-500 font-bold rounded-md border-2 px-6 py-1"
            >
              Đăng Kí
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
