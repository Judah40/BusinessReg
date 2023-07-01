import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Home() {
  const [show, setShow] = useState(false);
  const [settings, setSettings] = useState("hidden");
  const MainSession = `absolute right-4 w-60 h-40 bg-[#979797] text-white flex-col items-center justify-center  rounded space-y-4   ${settings}  `;

  return (
    <main className="bg-[#424242]   bg-cover bg-no-repeat   flex-1 grid grid-row-2 flex-wrap w-full h-screen p-8">
      {/* header */}
      <div className="flex  ">
        {/* Logo */}
        <div className="items-center   justify-center flex ">
          <img
            alt="Logo"
            src="/Luxi-Crypto-Logo.png"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="hover:cursor-pointer w-20"
          />
        </div>

        {/* navigation */}
        <div className="flex-1  items-center flex justify-end">
          <div className=" items-center justify-end">
            <ul
              className={` md:bg-none lg:bg-transparent lg:flex lg:space-x-8 bg-[#424242] ${
                show ? "flex  " : "hidden "
              }`}
            >
              {/* btn1 */}
              <li>
                <button className="text-white">
                  CAC Business Registration
                </button>
              </li>
              <li>
                <Link to="/about">
                  <button className="text-white">About Us </button>
                </Link>
              </li>
              <li>
                <Link to={"/contact"}>
                  <button className="text-white">Contact Us</button>
                </Link>
              </li>

              {/* btn2 */}
              <li>
                <ul className="flex space-x-4">
                  <li>
                    <hr className=" h-6 bg-white border" />
                  </li>
                </ul>
              </li>

              <li>
                <ul>
                  <li className="text-xs text-white  items-center   flex flex-col ">
                    <img
                      onClick={() => {
                        if (settings === "hidden") {
                          setSettings("flex");
                        } else {
                          setSettings("hidden");
                        }
                      }}
                      className="rounded-full w-8 hover:cursor-pointer hover:border hover:border-gray-400 border"
                    />
                  </li>

                  {/* Logout */}
                  <li className={MainSession}>
                    <div className="flex items-center space-x-2 w-11/12 flex-row">
                      <div></div>
                      <div></div>

                      <div className="flex flex-1  justify-end">
                        <FiSettings className="hover:cursor-pointer hover:text-gray-200" />
                      </div>
                    </div>
                    <div className="flex items-center text-xs space-x-2  flex-row"></div>
                    <button
                      onClick={() => {}}
                      className="bg-[#FFA000] text-white font-semibold pt-2 pb-2 pl-6 pr-6 rounded-xl text-xs "
                    >
                      Logout{" "}
                    </button>
                    <li className="text-xs">JadTech @ 2023</li>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={`/login`}>
                  <button
                    onClick={() => {}}
                    className="bg-[#FFA000] text-white font-semibold pt-2 pb-2 pl-6 pr-6 rounded-xl text-xs "
                  >
                    Login{" "}
                  </button>
                </Link>
              </li>
              {/* btn3 */}
            </ul>
          </div>
          <div className="border-4 lg:hidden hover:cursor-pointer rounded-lg">
            {!show ? (
              <img
                onClick={() => {
                  setShow(true);
                }}
                src={"/icons/main-menu.png"}
                alt="menu"
                className=" w-6 m-4 lg:hidden sm:w-6 sm:h-6"
              />
            ) : (
              <img
                onClick={() => {
                  setShow(false);
                }}
                src={"/icons/cancel.png"}
                alt="menu"
                className=" w-6 m-4 lg:hidden sm:w-6 sm:h-6"
              />
            )}
          </div>
        </div>
      </div>

      {/* main */}

      <div className=" h-[700px]  lg:justify-center lg:items-center justify-center lg:flex-row  items-center flex flex-col space-y-4 pt-12">
        <div className="space-y-4 md:items-start lg:items-center xl:pr-8 flex flex-col items-center justify-center flex-1 ">
          {/* notes */}
          <div className="w-96 ">
            <h1 className="text-4xl font-semibold text-center text-white font-mono">
              {" "}
              Welcome
            </h1>

            <h1 className="text-4xl font-semibold text-center text-white font-mono">
              {" "}
              Join the Digital Revolution
            </h1>
          </div>

          <div className="w-80">
            <p className="text-white font-mono text-center">
              Register Your Business with us. Say Goodbye to Paperwork Digitize
              Your Registration Process with Blockchain
            </p>
          </div>

          {/* buttons */}
          {/* button1 */}
          <div className="space-y-4 md:w-full  md:items-center md:flex flex flex-col justify-center items-center lg:flex-row  lg:space-x-4  ">
            <div className="items-end pt-4">
              <Link to="/registration">
                <button className="bg-orange-400 w-40 h-12 font-mono rounded-xl text-white">
                  GET STARTED
                </button>
              </Link>
            </div>
            {/* button2 */}

            <div>
              <Link to="/dashboard">
                <button className=" w-60 h-12 pl-2 pr-2 font-mono rounded-xl text-white border">
                  VIEW DASHBOARD{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <img
            src={"/crypto_banner.png"}
            className="w-96 sm:w-96 sm-96 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]"
            alt="crypto_banner"
          />
        </div>
      </div>
    </main>
  );
}
