import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import LayoutAdmin from "../../../components/layoutAdmin/LayoutAdmin";
import { UserContext } from "../../../context/UserContext";

const User = () => {
  const {users,handleDelete}=useContext(UserContext)
  return (
    <LayoutAdmin>
      <div className="p-4">
        <div className="font-semibold mb-4 text-4xl">USER</div>
        <div>
          <table class="table-fixed border border-separate w-full shadow-md">
            <thead className="bg-gray-200 shadow-lg ">
              <tr>
                <th className="py-2  w-14">NO.</th>
                <th>USER NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>EDIT OR MANAGE</th>
              </tr>
            </thead>
            <tbody className=" text-center">
              {users.map((user, index) => (
                <tr
                  className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="py-7 text-center font-semibold">
                    {index + 1}
                  </td>
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
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default User;
