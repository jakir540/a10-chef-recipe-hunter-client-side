import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { space } from "postcss/lib/list";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="md:flex flex-cols  md:justify-between md:mx-36 items-center mt-5 ms-16">
      <div className="flex items-center">
      <img className="w-24" src="/src/assets/logo.jpg" alt="" />
        <Link to="/">
          <h1 className="text-2xl font-semibold md:ms-0 ms-5">CHEF HUNTER</h1>
        </Link>
      </div>

      <div>
        <ul className="items-center md:space-x-12 my-5 md:flex">
          <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              // active,default class code write index.css
              className={({isActive})=> (isActive ? "active": "default:")}
            >
              HOME
            </NavLink>
          </li>


           <li>
            <NavLink
              to="/Blogs"
              aria-label="Blogs"
              title="Blogs"
              // active,default class code write index.css
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              BLOGS
            </NavLink>
          </li>

           <li>
            <NavLink
              to="/"
              aria-label="Chefs"
              title="Chefs"
              // active,default class code write index.css
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              CHEFS
            </NavLink>
          </li>

           <li>
            <NavLink
              to="/"
              aria-label="About"
              title="About"
              // active,default class code write index.css
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              ABOUT
            </NavLink>
          </li>

           <li>
            <NavLink
              to="/"
              aria-label="Contact"
              title="Contact"
              // active,default class code write index.css
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              CONTACT
            </NavLink>
          </li>



        </ul>
      </div>

      <div className="md:flex items-center ">
       

        {user ? (
          <div><img className="mx-3  rounded-full h-12" src={user.photoURL} alt="userProfile" title={user && user.displayName} /></div>
        ) : (
          <Link to="/login">
            <button className="bg-yellow-900 rounded-md md:p-3  p-3 text-white font-semibold  md:ms-5 md:mt-0 mt-5">
              LOGIN
            </button>
          </Link>
        )}
         {user && (
          <button
            onClick={handleLogout}
            className="bg-yellow-900 rounded-md p-3  text-white font-semibold md:ms-0 ms-5 md:mt-0 mt-5"
          >LOGOUT</button>
        )}




      </div>      
    </nav>
  );
};

export default Header;
