import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Header from "../../sharedPages/Header/Header";
import Footer from "../../sharedPages/Footer/Footer";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const HandleRegisterForm = (event) => {
    setError("");

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;

    form.reset();

    if (password.length > 6) {
      setError("Password must give minimum 6 character");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        loggedUser.displayName = name;
        loggedUser.photoURL = photo;
        updateProfile(name, photo);
        setUser(loggedUser);
        console.log(name, photo);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <Header></Header>

      <div className="flex items-center justify-evenly mb-32">
        <div className="my-5">
          <h2 className="text-center font-bold capitalize text-4xl my-5">
            please Register{" "}
          </h2>

          <div className="flex justify-center border shadow-lg shadow-zinc-400 rounded-md">
            <form
              onSubmit={HandleRegisterForm}
              className="border p-16 rounded-md"
            >
              <input
                type="name"
                placeholder="Enter Your Name"
                name="name"
                className="input input-bordered w-80"
                required
              />
              <br />
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                className="input input-bordered w-80"
                required
              />
              <br />
              <br />
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                className="input input-bordered w-80"
                required
              />
              <br />
              <br />
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered w-80"
              />
              <br /> <br />
              <div className="flex justify-center">
                <button className="bg-yellow-900 rounded-md px-5 py-3  text-white font-semibold md:ms-0 ms-5 md:mt-0 mt-5">
                  Register
                </button>
              </div>
              <br />
              <p>
                Do You Have an Account ?
                <Link to="/login" className="text-yellow-900">
                  Login
                </Link>
              </p>
              <p className="form-text text-red-400">{error}</p>
            </form>
          </div>
        </div>
        <div className="w-[550px]">
          <img src="src/assets/undraw_sign_up_n6im.svg" alt="" />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Register;
