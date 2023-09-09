"use client";
import React, { useEffect } from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../../assets/food.json";
import lottieJson2 from "../../../assets/trust.json";
import { BsTelephoneOutbound } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const Delevery = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="flex items-center justify-center my-10 h-[600px]">


     
      <div>
        <div className="w-full h-full">
          {" "}
          <Lottie
            loop
            animationData={lottieJson}
            play
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="">
        <div className="flex flex-col w-full lg:flex-row">
          <div
            data-aos="fade-right"
            className="grid flex-grow h-48 mt-56 w-56 mr-[-220px]   card bg-base-300 rounded-box "
          >
            <div className="stat">
              <div className="stat-figure text-[#e8505b] mb-3 ms-[-36px] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title text-xl capitalize font-semibold">
                Total deliveries
              </div>
              <div className="stat-value text-[#e8505b]">25.6K</div>
              <div className="stat-desc text-sm">21% more than last month</div>
            </div>
          </div>
          {/* ---------------------------1 ------------------- */}
          <div
            data-aos="fade-right"
            className="grid flex-grow h-48 mb-56 w-56 card bg-base-300 rounded-box "
          >
            <div className="">
              {" "}
              <Lottie
                loop
                animationData={lottieJson2}
                play
                className="w-full h-44"
              />
            </div>
          </div>
          <div className="divider lg:divider-horizontal font-bold">
            <hr className="h-1 bg-slate-600 w-[500px] " />
          </div>
          {/* ------------------------4 --------------- */}

          <div
            data-aos="fade-up"
            className="grid flex-grow h-48 w-56 mt-56 card bg-base-300 rounded-box "
          >
            <div className="stat">
              <div className="stat-figure text-[#e8505b] ms-[-36px] mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title font-semibold text-xl">
                Website Views
              </div>
              <div className="stat-value text-[#e8505b]">2.6M</div>
              <div className="stat-desc text-sm">30M View per month</div>
            </div>
          </div>

          {/* --------------2-------------- */}
          <div
            data-aos="fade-left"
            className="grid flex-grow h-48 w-56 mb-56 ms-[-220px] card bg-base-300 rounded-box "
          >
            <div className="text-center">
              <h3 className="font-semibold text-2xl p-2 text-gray-500">
                {" "}
                Location
              </h3>
              <p className="text-gray-600 py-5 text-sm">
                158 Gha. Khilkhet Bazar <br />
                Dhaka 1229 Bangladesh
              </p>

              <div className="flex items-center justify-center gap-3 text-sm">
                <span>
                  <BsTelephoneOutbound className="text-[#e8505b]" />
                </span>{" "}
                <p>:+880170564654654</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Delevery;
