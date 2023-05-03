import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Feature from "../pages/Feature/Feature/Feature";
import Blogs from "../pages/Blogs/Blogs/Blogs";
// import SubscribeSection from "../pages/Home/SubscribeSection/SubscribeSection";
import RecepiesLayout from "../layouts/RecepiesLayout";
// import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Register/Register/Register";
import ChefRecepies from "../pages/ChefRecepies/ChefRecepies/ChefRecepies";
// import ChefDetails from "../pages/ChefDetails/ChefDetails/ChefDetails";
// import ChefsInfo from "../pages/Home/ChefsInfo/ChefsInfo";
// import Chefs from "../pages/Home/Chefs/Chefs";

const router = createBrowserRouter([
  {
    path: "/chefrecepies",
    element: <RecepiesLayout></RecepiesLayout>,
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
