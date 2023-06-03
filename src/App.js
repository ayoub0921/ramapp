import React from 'react';
import './App.css';
import Header from './layout/Header';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Secure from './pages/Secure';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Verifaction from './pages/Verifaction';
import Welcome from './pages/Welcome';
import Products from './pages/Products';


//routes of pages

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
    ]
  },
  {
    path: 'signup',
    element: <SignUp />
  },
  {
    path: 'signin',
    element: <SignIn />
  },
  {
    path: 'confirmation',
    element: <Secure/>
  },
  {
    path: 'verification',
    element: <Verifaction/>
  },
  {
    path: "welcome",
    element:<Welcome/>
  },
  {
    path: "products",
    element:<Products/>
  }

]);


function App() {
  return (
    <div>
      <Header/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
