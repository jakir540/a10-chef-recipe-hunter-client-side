import React from "react";
import Lottie from "react-lottie-player";
import lottieJsonCooking from "../../../assets/cooking.json";
const Cooking = () => {
  return (
    <div className="flex items-center h-[500px] justify-evenly ">
      <div className=" relative top-0 right-[-250px]">
        <h1 className="text-5xl font-bold  my-8 capitalize">Master of culinary <br /> arts today</h1>
        <div>
          <input className="px-5 py-4 w-96 mx-5 bg-slate-200 rounded-md mb-5 placeholder:text-sm hover:outline-none shadow-lg" type="text" placeholder="Enter Your Email: " />
          <button  className="btn bg-yellow-900 px-5 py-4 capitalize">
            subscribe
          </button>
        </div>
        <h3 className=" font-semibold text-gray-400 p-2 ml-2">get your free cooking book</h3>
      </div>


      <div className="w-1/2">
        <div className="">
          {" "}
          <Lottie
            loop
            animationData={lottieJsonCooking}
            play
            className="w-full h-[680px]"
          />
        </div>
      </div>


    </div>
  );
};

export default Cooking;
