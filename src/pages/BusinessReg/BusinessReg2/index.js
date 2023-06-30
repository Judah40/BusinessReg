'use client'
import Link from "next/link";
import React from "react";
import BusinessRegStepForm2 from "@/components/BusinessRegStepForm2/page";
export default function BusinessReg2() {
  return (
    <div className="flex-1 bg-[#979797]  bg-cover flex w-full h-screen items-center justify-center">
      {/* form  */}

      <div className=" lg:flex border rounded shadow-md shadow-white">
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
                    <h2 className="text-white text-2xl">STEP 02</h2>
                </div>

                {/* 1st message */}
                <div>
                    <h2 className="text-white font-light text-xl">APPLICATION FORM </h2>
                </div>
            </div>



        </div>


        {/* Form fill starts*/}
        <div className="bg-[#424242] lg:w-[550px] lg:rounded-r-lg lg:rounded-l-none items-center flex flex-col space-y-8 pt-12 pb-12 rounded-b-lg ">
          


        
       

        {/* email Sign In */}
        <div>
          <BusinessRegStepForm2/>
        </div>



        </div>
        {/* Form fill ends*/}
      </div>
    </div>
  );
}
