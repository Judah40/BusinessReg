import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

import LoginComponent from "./pages/Login";
import SignUpComponent from "./pages/SignUp";
import { AuthProvider } from "./utils/auth/Auth";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/*" Component={App} />
          <Route exact path="/sign-up" Component={SignUpComponent} />
          <Route exact path="/login" Component={LoginComponent} />
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
