import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [error, setError] = useState("");

  const handleRegisterForm = async (event) => {
    setError("");

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;

    form.reset();

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    try {
      const result = await createUser(email, password);
      const loggedUser = result.user;
      loggedUser.displayName = name;
      loggedUser.photoURL = photo;
      await updateProfile(loggedUser);
      console.log(name, photo);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 p-10 bg-white rounded-lg shadow-md flex flex-col">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleRegisterForm} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="photo" className="block text-sm font-medium mb-2">
              Photo URL (optional)
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
              placeholder="Enter photo URL"
              className="border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
          >
            Register
          </button>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>
      </div>
      <div className="w-1/2 hidden md:block">
        <img
          src="src/assets/undraw_sign_up_n6im.svg"
          alt=""
          className="object-cover h-screen"
        />
      </div>
    </div>
  );
};

export default Register;
