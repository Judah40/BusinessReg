
import React, { useState } from "react";



const SignUpForm = () => {
  // Login with google

  


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  
  
  

  return (
   
      <form className="space-y-8" >
        <div>
          <input
            style={{ background: "rgba(255, 255, 255, 0.1)", color: "white" }}
            className="w-[400px] p-2 "
            placeholder="name"
            type="text"
            id="name"
            name="name"
          />
        </div>

        <div>
          <input
            style={{ background: "rgba(255, 255, 255, 0.1)", color: "white" }}
            className="w-[400px] p-2 active:border-b-2 active:border-b-[#2B5E2E]"
            placeholder="email"
            type="email"
            id="email"
            name="email"
            onChange={(e)=>setEmail(e.target.value)}

          />
        </div>

        <div className="w-[400px] flex flex-row space-x-5">
          <div>
            <input
              style={{ background: "rgba(255, 255, 255, 0.1)", color: "white" }}
              className="w-[190px] p-2 active:border-b-2 active:border-b-[#2B5E2E]"
              placeholder="password"
              type="password"
              id="password"
              name="password"
              onChange={(e)=>setPassword(e.target.value)}

            />
          </div>
          <div>
            <input
              style={{ background: "rgba(255, 255, 255, 0.1)", color: "white" }}
              className="w-[190px]  p-2 active:border-b-2 active:border-b-[#2B5E2E]"
              placeholder="confirmPassword"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
          </div>
        </div>

        <button
          className="w-[400px] text-white bg-[#FFA000] h-8 rounded"
         
        >
          CONTINUE
        </button>
      </form>
  );
};

export default SignUpForm;
