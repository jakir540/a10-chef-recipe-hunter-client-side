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
    <nav className="md:flex flex-cols  justify-between md:mx-36 items-center mt-5">
      <div>
        <Link to="/">
          <h1 className="text-2xl font-semibold md:ms-0 ms-5">CHEF HUNTER</h1>
        </Link>
      </div>

      <div>
        <ul className="items-center space-x-12 lg:flex">
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
        </ul>
      </div>

      <div className="flex ">
       

        {user ? (
          <div><img className="mx-3  rounded-full h-12" src={user.photoURL} alt="userProfile" title={user && user.displayName} /></div>
        ) : (
          <Link to="/login">
            <button className="bg-yellow-900 rounded-md p-3  text-white font-semibold md:ms-0 ms-5 md:mt-0 mt-5">
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
