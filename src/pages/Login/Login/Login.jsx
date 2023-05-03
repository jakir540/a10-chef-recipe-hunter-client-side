import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {

  const {signIn} = useContext(AuthContext);
  console.log(signIn);

    const handleSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        form.reset();

        signIn(email,password)
        .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser);
        })
        .catch(error =>{
          console.log(error);
        })
        
    }
  return (
    <div className="my-16">
      <h2 className="text-center capitalize text-4xl my-10">please login </h2>

      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="border p-16 rounded-md">
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
            <button className="bg-yellow-900 rounded-md px-5 py-3  text-white font-semibold md:ms-0 ms-5 md:mt-0 mt-5">
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
          <p className="form-text text-red-400"></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
