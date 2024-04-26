import React, { useState } from "react";
import {
  BellIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Search from "../search/Search";
import { Link } from "react-router-dom";

const Header = ({setResult}) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex px-10 py-5 gap-10 relative">
      <Link to={'/'} className="text-4xl font-bold">LOGO</Link>
      <Search setResult={setResult} />
      <div className="text-center">
        <button>
          <BellIcon class="h-6 w-6 text-gray-500 hover:text-blue-500" />
        </button>
        <div>Thông Báo</div>
      </div>
      <div className="text-center">
        <button>
          <ShoppingCartIcon class="h-6 w-6 text-gray-500 hover:text-blue-500 " />
        </button>
        <div>Giỏ Hàng</div>
      </div>
      <div className="text-center" >
        <button>
          <UsersIcon class="h-6 w-6 text-gray-500 hover:text-blue-500" onClick={()=>setOpen(!open)}/>
        </button>
        <div>Tài Khoản</div>
      </div>
      <div className={`absolute top-20 rounded-md bg-gray-100 p-4 gap-2 right-5 flex-col items-center ${open ? 'flex' : 'hidden'}`}>
        <Link to={'/login'} className="px-3 py-1 border-2 border-red-500  text-white font-bold bg-red-500 rounded-md">Đăng Nhập</Link>
        <Link to={'/signin'} className="border-red-500 text-red-500 font-bold rounded-md border-2 px-6 py-1">Đăng Kí</Link>
      </div>
    </div>
  );
};

export default Header;
