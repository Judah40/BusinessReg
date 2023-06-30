import React from "react";
import LoginForm from "../../components/LoginForm"
import { Link } from "react-router-dom";
export default function Login() {
  // google auth

 
  return (
    <div className="flex-1 bg-[#979797]  flex w-full  items-center justify-center">
      {/* form  */}

      <div className=" lg:flex">
        {/* decription */}
        <div className="bg-[#2B5E2E] w-[550px] lg:w-[400px] lg:rounded-r-none lg:rounded-l-lg justify-center flex flex-col items-center p-12 rounded-t-lg">
          <div className="flex items-center w-5/12 lg:w-11/12 space-x-2">
            {/* Logo */}
            <div >
              <img
                alt="Logo"
                src="/Luxi-Crypto-Logo.png"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="hover:cursor-pointer w-20"
              />
            </div>

            {/* Login Text */}
            <div>
              <h1 className="font-bold text-white text-xl">Login</h1>
            </div>
          </div>

            {/* Welcoming messages */}
            <div className="space-y-4">
                {/* 1st message */}
                <div>
                    <h2 className="text-white text-2xl">Welcome Back</h2>
                </div>

                {/* 1st message */}
                <div>
                    <h2 className="text-white font-light text-xl">Please Login to continue</h2>
                </div>
            </div>



        </div>


        {/* Form fill starts*/}
        <div className="bg-[#424242] lg:w-[550px] lg:rounded-r-lg lg:rounded-l-none items-center flex flex-col space-y-8 pt-12 pb-12 rounded-b-lg ">
            {/* Login header starts */}
            <div className="flex items-center w-9/12 ">

                <div>
                    <h1 className="text-white">
                        Login
                    </h1>
                </div>


                <div className="flex flex-1 justify-end ">
                   
                        <Link to={"/signup"}>
                        <button className="text-[#C8E6C9]">
                           {"-> Create new Account"}
                        </button>
                        </Link>
                </div>
            </div>
          {/* Login header ends */}



          {/* Alt sign in  */}
          <div>

            <div>
                
                <button
                onClick={()=>{
                }}
                className="text-white bg-[#D84226] w-32 h-8 rounded">
                    GOOGLE
                </button>
            </div>


          </div>
        {/* alt sign end */}

        <div className="flex justify-center items-center space-x-4">
            <div>
                <hr className="w-28"/>
                
            </div>

            <div>
            <p className="text-white">Or login  with email</p>
            </div>

            <div>
                <hr className="w-28"/>
                
            </div>
        </div>

        {/* email Sign In */}
        <div>

    <LoginForm/>
        </div>



        </div>
        {/* Form fill ends*/}
      </div>
    </div>
  );
}
