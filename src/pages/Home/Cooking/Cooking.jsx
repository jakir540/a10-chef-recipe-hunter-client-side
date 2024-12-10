import React from "react";
import Lottie from "react-lottie-player";
import lottieJsonCooking from "../../../assets/cooking.json";

const Cooking = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between lg:h-[500px] h-auto lg:gap-10 gap-16 p-6 lg:p-12 bg-gray-50">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-yellow-900 mb-6 leading-snug">
          Master the <span className="text-yellow-600">Art of Culinary</span>
          <br /> Excellence Today
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Sign up now to receive exclusive recipes, cooking tips, and your free
          <span className="font-semibold text-yellow-600">
            {" "}
            digital cookbook!
          </span>
        </p>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6">
          <input
            className="px-6 py-3 lg:w-80 w-full rounded-md bg-gray-200 text-gray-700 placeholder:text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-900 transition"
            type="email"
            placeholder="Enter Your Email"
          />
          <button className="btn px-6 py-3 bg-yellow-900 text-white text-lg font-medium rounded-md shadow-md hover:bg-yellow-600 transition capitalize">
            Subscribe
          </button>
        </div>
        <h3 className="text-gray-500 font-medium mt-4">
          Get your free cooking book on sign-up!
        </h3>
      </div>

      {/* Animation Section */}
      <div className="lg:w-1/2 flex justify-center">
        <Lottie
          loop
          animationData={lottieJsonCooking}
          play
          className="w-full lg:w-[450px] h-auto"
        />
      </div>
    </div>
  );
};

export default Cooking;
