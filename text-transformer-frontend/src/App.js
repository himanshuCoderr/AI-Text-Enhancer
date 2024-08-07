import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.scss';
import LoginPage from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SingUp';
import Home from './Pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path :"/login", 
    element : <LoginPage />
  } , 
  {
    path : "/signin" , 
    element : <SignUp />
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
