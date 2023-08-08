import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Header from "../../sharedPages/Header/Header";
import Footer from "../../sharedPages/Footer/Footer";

const Login = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  console.log(error);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { signIn, login, githubLogin } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    form.reset();

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //Google Login 
  const handleLoginGoogle = () => {
    login()
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        console.log(loggedUser);
      })
      .catch((error) => {
        setUser(error.message);
      });
  };

  //Github login
  const handleLoginGithub = () => {
    githubLogin()
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        setUser(loggedUser);
        form.reset();
      })
      .catch((error) => {        
        setError(error.message);
      });
  };
  return (
    <div>
      <Header></Header>

    <div className="flex items-center justify-evenly">
    <div className="w-[550px]">
       <img src="src/assets/undraw_login_re_4vu2.svg" alt="" />
      </div>

    <div className="my-3">
        <h2 className="text-center font-bold capitalize text-4xl my-5">please login </h2>

        <div className="flex justify-center border shadow-lg shadow-zinc-400 rounded-md p-8 flex-col items-center">
          <form onSubmit={handleSubmit} className=" p-16 rounded-md">
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
            <br /> <br />
            <div className="flex justify-center">
              <button className="bg-yellow-900 rounded-md  px-5 py-2  text-white font-semibold md:ms-0 ms-5 md:mt-0 mt-5">
                Login
              </button>
            </div>
            <br />
            <p>
              Don,t Have an Account :{" "}
              <Link to="/register" className="text-yellow-900">
                Register
              </Link>
            </p>
            <p className="form-text text-red-400">{error}</p>
          </form>

          <div className="mt-4 flex justify-center items-start gap-3">
            <div className="">
              <button
                onClick={handleLoginGoogle}
                className="bg-yellow-800 bg-transparent rounded-md px-5 py-3  text-white font-semibold md:ms-0 ms-5 md:mt-0 mt-2"
              >
                Login with Google
              </button>
            </div>
            <div>
              <button
                onClick={handleLoginGithub}
                className="bg-yellow-800 rounded-md px-5 py-3  text-white font-semibold md:ms-0 ms-5 md:mt-0 mt-5"
              >
                Login with Github
              </button>
            </div>
          </div>
        </div>
      </div>

     

    </div>


   

      <Footer></Footer>
    </div>
  );
};

export default Login;
