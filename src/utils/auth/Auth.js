import React, { useEffect, useState } from "react";
import app from "../firebase/firebase";

import { getAuth } from "firebase/auth";

const auth = getAuth(app);

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setloggedInUser] = useState(null);

    useEffect(() => {
      auth.onAuthStateChanged(setloggedInUser)
  }, []);

  return (
    <AuthContext.Provider value={loggedInUser}>{children}</AuthContext.Provider>
  );
};
