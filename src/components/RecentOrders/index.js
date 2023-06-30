import React from "react";
import { FaShoppingBag } from "react-icons/fa";

export  function RecentOrders() {
  const data = [
    {
      item: "Egg",
      Price: 30000,
      time: "12:20am",
    },
    {
      item: "Egg",
      Price: 30000,
      time: "12:20am",
    },
    {
      item: "Egg",
      Price: 30000,
      time: "12:20am",
    },
    {
      item: "Egg",
      Price: 30000,
      time: "12:20am",
    },
    {
      item: "Egg",
      Price: 30000,
      time: "12:20am",
    },
    {
      item: "Egg",
      Price: 30000,
      time: "12:20am",
    },
    {
      item: "Egg",
      Price: 30000,
      time: "12:20am",
    },
    {
      item: "Egg",
      Price: 30000,
      time: "12:20am",
    },
  ];

  return (
    <div className="w-[560px] lg:w-[466px] lg:mr-10 bg-white border text-black md:h-[68vh] h-[60vh] overflow-scroll lg:h-[65vh] rounded p-4  ">
      <div>
        {data.map(({ item, Price, time }) => (
          <li className="list-none w-[540] flex bg-gray-300 rounded-lg my-3 p-2 items-center">
            <div className="bg-lime-50 rounded-lg p-3">
              <FaShoppingBag className="text-lime-600" />
            </div>

            <div className="pl-4 ">
              <p className="text-sm text-gray-800 font-bold">{item}</p>
              <p className="text-sm text-gray-400">Le{Price}</p>
            </div>

            <p className="lg:flex md:hidden flex-1   flex justify-end right-6 text-sm">{time}</p>
          </li>
        ))}
      </div>
    </div>
  );
}
