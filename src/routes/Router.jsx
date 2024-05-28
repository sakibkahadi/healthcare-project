import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../pages/ErrorPage/Error";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <Error></Error>,
      children: ([
        {
          path:'/',
          element: <Home></Home>
        },
        // apadotto ata home a rakhi
        // {
        //   path:'/login',
        //   element: <Login></Login>
        // }
      ])
    },
  ]);