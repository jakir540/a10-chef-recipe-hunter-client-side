import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <header className="bg-yellow-900 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-2 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-full"
            src="https://i.ibb.co/Wy9HLhg/logo-copy.jpg"
            alt="Chef Hunter Logo"
          />
          <Link
            to="/"
            className="text-2xl font-extrabold text-white tracking-wide"
          >
            CHEF HUNTER
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            className="pl-4 pr-10 py-2 rounded-lg w-80 bg-white text-gray-800 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Search chef"
          />
          <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          {["Home", "Chefs", "About", "Contact"].map((link, index) => (
            <NavLink
              key={index}
              to={`/${link.toLowerCase()}`}
              className={({ isActive }) =>
                `text-base font-medium tracking-wide ${
                  isActive
                    ? "text-yellow-300 underline underline-offset-4"
                    : "text-white hover:text-yellow-300"
                }`
              }
            >
              {link.toUpperCase()}
            </NavLink>
          ))}
        </nav>

        {/* User Section */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <img
                className="w-9 h-9 rounded-full border-2 border-yellow-500"
                src={user.photoURL}
                alt="User Profile"
                title={user.displayName || "User"}
              />
              <button
                onClick={handleLogout}
                className="bg-yellow-700 text-sm font-semibold text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="bg-yellow-700 text-sm font-semibold text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-yellow-800">
        <div className="flex justify-between items-center py-3 px-5">
          <div className="relative w-full">
            <input
              type="text"
              className="pl-4 pr-10 py-2 rounded-lg w-full bg-white text-gray-800 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Search chef"
            />
            <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg" />
          </div>
        </div>
        <nav className="flex justify-around py-3">
          {["Home", "Chefs", "About", "Contact"].map((link, index) => (
            <NavLink
              key={index}
              to={`/${link.toLowerCase()}`}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide ${
                  isActive
                    ? "text-yellow-300 underline underline-offset-4"
                    : "text-white hover:text-yellow-300"
                }`
              }
            >
              {link.toUpperCase()}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
