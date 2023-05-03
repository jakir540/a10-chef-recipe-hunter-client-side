import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Feature from "../pages/Feature/Feature/Feature";
import Blogs from "../pages/Blogs/Blogs/Blogs";
import RecepiesLayout from "../layouts/RecepiesLayout";

import Login from "../pages/Login/Login/Login";
import Register from "../pages/Register/Register/Register";
import ChefRecepies from "../pages/ChefRecepies/ChefRecepies/ChefRecepies";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/chefrecepies",
    element: <PrivateRoute><RecepiesLayout></RecepiesLayout></PrivateRoute>,
    children: [
      {
        path: ":id",
        element: <ChefRecepies></ChefRecepies>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chefs/${params.id}`),
      },
    ],
  },

  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },

  {
    path: "/chefrecepies",
    element: <ChefRecepies></ChefRecepies>,
  },

  {
    path: "features",
    element: <Feature></Feature>,
  },

  {
    path: "blogs",
    element: <Blogs></Blogs>,
  },

  {
    path: "login",
    element: <Login></Login>,
  },

  {
    path: "register",
    element: <Register></Register>,
  },
]);

export default router;
