import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect, useNavigate } from "react-router-dom";
import app from "../../utils/firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);
const LoginForm = ({ history }) => {
  // Login with google
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleOnSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      try {
        await signInWithEmailAndPassword(auth, email, password);
        //TODO create users record in firestore 
        navigate("/home");
      } catch (error) {
        //TODO Handle errors properly 
        alert(error);
      }
    },
    [history]
  );

  return (
    <form className="space-y-8" onSubmit={handleOnSubmit}>
      <div>
        <input
          style={{ background: "rgba(255, 255, 255, 0.1)", color: "white" }}
          className="w-[400px] p-2 "
          placeholder="email"
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <input
          style={{ background: "rgba(255, 255, 255, 0.1)", color: "white" }}
          className="w-[400px] p-2 active:border-b-2 active:border-b-[#2B5E2E]"
          placeholder="password"
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="w-[400px] flex justify-end ">
        <button className="text-[#C8E6C9]">Forget password?</button>
      </div>
      <button
        className="w-[400px] text-white bg-[#FFA000] h-8 rounded"
        type="submit"
      >
        CONTINUE
      </button>
    </form>
  );
};

export default LoginForm;
