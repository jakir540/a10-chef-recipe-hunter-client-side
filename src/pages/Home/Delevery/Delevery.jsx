"use client";
import React, { useEffect } from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../../assets/food.json";
import lottieJson2 from "../../../assets/trust.json";
import { BsTelephoneOutbound } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const Delivery = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="lg:flex items-center justify-between px-8 lg:px-16 py-12 bg-gray-50">
      {/* Animation Section */}
      <div className="lg:w-1/2 flex justify-center">
        <Lottie
          loop
          animationData={lottieJson}
          play
          className="w-full lg:w-[500px] h-auto"
        />
      </div>

      {/* Stats and Info Section */}
      <div className="lg:w-1/2 grid lg:grid-cols-2 gap-8 mt-12 lg:mt-0">
        {/* Total Deliveries */}
        <div
          data-aos="fade-right"
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
        >
          <div className="text-[#e8505b] mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-700">
            Total Deliveries
          </h3>
          <p className="text-4xl text-[#e8505b] font-bold">25.6K</p>
          <p className="text-gray-500 text-sm">21% more than last month</p>
        </div>

        {/* Trust Animation */}
        <div
          data-aos="fade-right"
          className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center"
        >
          <Lottie
            loop
            animationData={lottieJson2}
            play
            className="w-[150px] h-auto"
          />
        </div>

        {/* Website Views */}
        <div
          data-aos="fade-up"
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
        >
          <div className="text-[#e8505b] mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-700">Website Views</h3>
          <p className="text-4xl text-[#e8505b] font-bold">2.6M</p>
          <p className="text-gray-500 text-sm">30M views per month</p>
        </div>

        {/* Location Info */}
        <div
          data-aos="fade-left"
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Location
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            158 Gha, Khilkhet Bazar <br />
            Dhaka 1229, Bangladesh
          </p>
          <div className="flex items-center gap-2 text-gray-700">
            <BsTelephoneOutbound className="text-[#e8505b]" />
            <p>+880170564654654</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
