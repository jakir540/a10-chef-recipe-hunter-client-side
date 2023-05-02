import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Recepi from "../pages/Recepi/Recepi/Recepi";
import Feature from "../pages/Feature/Feature/Feature";
import Blogs from "../pages/Blogs/Blogs/Blogs";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"recepies",
            element:<Recepi></Recepi>
        },
        {
            path:"features",
            element:<Feature></Feature>
        },
        {
            path:"blogs",
            element:<Blogs></Blogs>
        },
      ]
    },
  ]);

  export default router;