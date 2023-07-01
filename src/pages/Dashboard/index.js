"use client";
import React from "react";
import { FaHome, FaTasks, FaInbox } from "react-icons/fa";
import Home from "./Home";
import { Graph } from "../../components/Graph";
import { RecentOrders } from "../../components/RecentOrders";
import { DataInput } from "./DataInput";
import app from "../../utils/firebase/firebase";
// import { getAuth, signOut } from "firebase/auth";
// import { useNavigate } from "react-router";
export default function Dashboard() {
  // const auth = getAuth(app);
  // const navigate = useNavigate();
  const [home, setHome] = React.useState("flex");
  const [input, setInput] = React.useState("hidden");
  const hidden = `${home}  flex-col  ml-16 md:ml-24 lg:ml-36 w-full`;
  const hidden2 = `${input} flex-col  ml-16 md:ml-24 lg:ml-36 w-full`;

  // const handleLogout = async () => {
  //   try {
  //     await signOut(auth);
  //     navigate("/login");
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  return (
    <div
      className={`flex flex-1  ${
        input === "hidden" ? "h-[156vh]" : "h-[100vh]"
      } lg:h-[100vh]  bg-gray-400`}
    >
      {/* dashboard headers  */}
      <div className=" flex-col space-y-8 fixed   items-center lg:w-40  w-20 bg-[#424242] h-screen   justify-center flex">
        {/* Logo */}
        <div className="w-11/12  flex justify-center pt-8">
          <img
            alt="Logo"
            src="/Luxi-Crypto-Logo.png"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="hover:cursor-pointer w-10"
          />
        </div>
        {/* Home */}
        <div className="">
          <button
            onClick={() => {
              setHome("flex");
              setInput("hidden");
            }}
            className="hover:cursor-pointer border-2 p-2 rounded lg:w-32 flex-row space-x-4 flex items-center justify-center"
          >
            <FaHome className="text-white text-2xl " />
            <h1 className="hidden lg:block hover:text-gray-300 text-white">
              Home
            </h1>
          </button>
        </div>
        {/* Task */}
        <div className="">
          <button
            onClick={() => {
              setInput("flex");
              setHome("hidden");
            }}
            className="hover:cursor-pointer p-2 border-2 rounded lg:w-32 flex-row space-x-4 flex items-center justify-center"
          >
            <FaTasks className="text-white text-2xl" />
            <h1 className="hidden lg:block hover:text-gray-300 text-white">
              Task
            </h1>
          </button>
        </div>
        {/* Task ENd */}

        {/* Inbox */}
        <div className="">
          <button className="hover:cursor-pointer p-2 border-2 rounded lg:w-32 flex-row space-x-4 flex items-center justify-center">
            <FaInbox className="text-white text-2xl" />
            <h1 className="hidden lg:block hover:text-gray-300 text-white">
              Inbox
            </h1>
          </button>
        </div>
        {/* Inox ENd */}

        {/* Inbox */}
        <div className="flex flex-1 items-end pb-4">
          <button
            onClick={() => {}}
            className="hover:cursor-pointer p-2 h-8 border-2 rounded lg:w-32 flex-row space-x-4 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 text-white h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="hidden lg:block hover:text-gray-300 text-white">
              Logout
            </h1>
          </button>
        </div>
        {/* Inox ENd */}
      </div>
      {/* Content */}
      <div className={hidden}>
        {/* HomePage */}
        <div>
          <Home />
        </div>
        <div className="lg:flex  lg:justify-center">
          <div className=" flex pt-2 pl-3  justify-center">
            <Graph />
          </div>

          <div className=" pt-2 pl-3 flex justify-center  ">
            <RecentOrders />
          </div>
        </div>
      </div>

      <div className={hidden2}>
        <DataInput />
      </div>
    </div>
  );
}
