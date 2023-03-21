import React from "react";

const TopCards = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col pb-4 w-full">
          <p className="text-2xl font-bold">$2,846</p>
          <p className="text-gray-600">Daily revenue</p>
        </div>
        <p className="bg-green-200 p-2 flex justify-center items-center border rounded-lg">
          <span className="text-green-700 text-lg">+18%</span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col pb-4 w-full">
          <p className="text-2xl font-bold">$64,846</p>
          <p className="text-gray-600">YTD revenue</p>
        </div>
        <p className="bg-green-200 p-2 flex justify-center items-center border rounded-lg">
          <span className="text-green-700 text-lg">+38%</span>
        </p>
      </div>
      <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col pb-4 w-full">
          <p className="text-2xl font-bold">54,786</p>
          <p className="text-gray-600">Customers</p>
        </div>
        <p className="bg-green-200 p-2 flex justify-center items-center border rounded-lg">
          <span className="text-green-700 text-lg">+18%</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
