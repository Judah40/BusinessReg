import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import {AuthContext} from "./Auth";

const PrivateRoute = ({ children }) => {
  const { loggedInUser } = useContext(AuthContext);

  console.log(loggedInUser);
  if (loggedInUser === null) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
