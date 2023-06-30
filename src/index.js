import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import BusinessReg from './pages/BusinessReg';
const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>
  },
  {
    path: '/signup',
    element:<SignUp/>
  },
  {
    path: '/login',
    element:<Login/>
  },{
    path:"/dashboard",
    element:<Dashboard/>
  },
  {
    path:"/about",
    element:<AboutUs/>
  },
  {
    path:"/contact",
    element:<ContactUs/>
  },
  {
    path:"/registration",
    element:<BusinessReg/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
