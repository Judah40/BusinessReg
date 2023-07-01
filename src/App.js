import React from "react";
import "./App.css";
import BusinessRegComponent from "./pages/BusinessReg";
import DashboardComponent from "./pages/Dashboard";
import HomeComponent from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/auth/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element={<HomeComponent />} />
        ;
        <Route exact path="/dashboard" element={<DashboardComponent />} />;
        <Route exact path="/registration" element={<BusinessRegComponent />} />;
      </Routes>
    </div>
  );
}

export default App;
