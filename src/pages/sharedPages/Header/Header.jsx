import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header";

export class Header extends Component {
  render() {
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
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recepies"
                aria-label="recepies"
                title="recepies"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                RECEPIES
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/features"
                aria-label="features"
                title="features"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                FEATURES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Blogs"
                aria-label="Blogs"
                title="Blogs"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                BLOGS
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <button className="bg-yellow-900 rounded-md p-3  text-white font-semibold md:ms-0 ms-5 md:mt-0 mt-5">LOGOUT</button>
         <Link to="/login"> <button   className="bg-yellow-900 rounded-md p-3  text-white font-semibold md:ms-0 ms-5 md:mt-0 mt-5">LOGIN</button></Link>
        </div>
      </nav>
    );
  }
}

export default Header;
