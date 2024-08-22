import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.scss';
import LoginPage from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SingUp';
import Home from './Pages/Home/Home';
import FileUploads from './Pages/FileUploads/FileUploads';
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
  }, 
  {
    path : "/fileuploads" , 
    element : <FileUploads />
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
