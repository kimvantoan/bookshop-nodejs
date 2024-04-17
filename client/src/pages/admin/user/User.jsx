import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../../components/HeaderAdmin";
import axios from "axios";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [users, setUser] = useState([]);
  const navigate = useNavigate()
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
            navigate('/dashBoard/book')
            toast.success(res.data.message);
          } else {
            toast.error(res.data.message);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(users);
  return (
    <>
      <HeaderAdmin />
      <ul role="list" className="divide-y divide-gray-100 px-36">
        {users.map((user) => (
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-base font-semibold leading-6 text-gray-900">
                  {user.username}
                </p>
                <p className="mt-1 truncate text-sm  leading-5 text-gray-500">
                  {user.email}
                </p>
              </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-row sm:items-end gap-6">
              <PencilSquareIcon class="h-8 w-8 text-blue-500 cursor-pointer" />
              <TrashIcon
                onClick={() => handleDelete(user._id)}
                class="h-8 w-8 text-red-500 cursor-pointer"
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default User;
