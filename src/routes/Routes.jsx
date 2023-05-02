import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Recepi from "../pages/Recepi/Recepi/Recepi";
import Feature from "../pages/Feature/Feature/Feature";
import Blogs from "../pages/Blogs/Blogs/Blogs";
import SubscribeSection from "../pages/Home/SubscribeSection/SubscribeSection";
import RecepiesLayout from "../layouts/RecepiesLayout";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Register/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "features",
        element: <Feature></Feature>,
      },
      {
        path: "subscribeSection",
        element: <SubscribeSection></SubscribeSection>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },

  {
    path: "/",
    element: <RecepiesLayout></RecepiesLayout>,
    children:[
      {
        path:'recepies',
        element:<Recepi></Recepi>
      }
    ]
  },
  {
    path: "login",
    element: <LoginLayout></LoginLayout>,
    children:[
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  },
  {
    path: "register",
    element: <LoginLayout></LoginLayout>,
    children:[
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

export default router;
