import React from "react";
import { data } from "@/data/data";
import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const orders = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-4">
        <h2 className="text-lg font-semibold">Orders</h2>
        <h2>Welcome Back, Client</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span className="font-semibold">Order</span>
            <span className="sm:text-left text-right font-semibold">Status</span>
            <span className="hidden md:grid font-semibold">Last Order</span>
            <span className="hidden sm:grid font-semibold">Method</span>
          </div>
          <ul>
            {data.map((item, index) => (
              <li
                key={index}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <FaShoppingBag className="text-purple-800" />
                  </div>
                  <div className="pl-4">
                    <p className="text-gray-800 font-bold">
                      ${item.total.toLocaleString()}
                    </p>
                    <p className="text-gray-800 text-sm">{item.name.first}</p>
                  </div>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  <span
                    className={
                      item.status === "Processing"
                        ? "bg-green-200 p-2 rounded-lg"
                        : item.status === "Completed"
                        ? "bg-blue-200 p-2 rounded-lg"
                        : "bg-yellow-200 p-2 rounded-lg"
                    }
                  >
                    {item.status}
                  </span>
                </p>
                <p className="hidden md:flex">{item.date}</p>
                <div className="sm:flex hidden justify-between items-center">
                  <p>{item.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orders;
