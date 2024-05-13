import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../../components/HeaderAdmin";
import axios from "axios";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/outline";

const User = () => {
  const [users, setUser] = useState([]);
  const navigate = useNavigate();
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
  console.log(users);
  return (
    <>
      <HeaderAdmin />

      <table class="table-fixed w-full">
        <thead className="bg-gray-200 shadow-lg ">
          <tr>
            <th className="py-2">NO.</th>
            <th>USER NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>EDIT OR MANAGE</th>
          </tr>
        </thead>
        <tbody className=" text-center">
          {users.map((user, index) => (
            <tr className={`${index % 2 === 0 ? "bg-gray-50" : ""}`}>
              <td className="py-7 text-center font-semibold">{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td className="flex justify-center gap-4 py-7">
                <Link to={`/dashBoard/book/updateBook/${user._id}`}>
                  <PencilSquareIcon class="h-8 w-8 text-blue-500 cursor-pointer" />
                </Link>
                <TrashIcon
                  onClick={() => handleDelete(user._id)}
                  class="h-8 w-8 text-red-500 cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default User;
