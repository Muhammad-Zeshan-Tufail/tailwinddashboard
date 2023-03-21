import React from "react";
import { data } from "@/data/data";
import { FaShoppingBag } from "react-icons/fa";

const RecentOrders = () => {
  return (
    <div className="w-full md:col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-auto">
      <h1 className="text-lg font-semibold">Recent Orders</h1>
      <ul>
        {data.map((item, index) => (
          <li
            key={index}
            className="bg-gray-50 hover:bg-gray-100 my-3 p-2 flex items-center cursor-pointer rounded-lg"
          >
            <div className="bg-purple-100 rounded-lg p-3">
              <FaShoppingBag className="text-purple-800" />
            </div>
            <div className="pl-4">
              <p className="text-gray-800 font-bold">${item.total}</p>
              <p className="text-gray-400 text-sm">{item.name.first}</p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm">{item.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
