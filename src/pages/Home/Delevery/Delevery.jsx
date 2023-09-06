"use client";
import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../../assets/food.json";

const Delevery = () => {
  return (
    <div className="flex items-center justify-center my-10 h-[600px]">
      <div className="w-1/3">
        <h2 className="text-4xl font-bold text-center capitalize leading-[60px] pb-10">
          Trust in the fastest  <br /> & most reliable <br /> delivery service
        </h2> 
        
        <p className="text-gray-500 leading-10">"Enjoy the convenience of lightning-fast food delivery, bringing your favorite flavors to your doorstep in no time."</p>
        <button className="btn bg-yellow-900">Call <span>+8801707372220</span></button>
      </div>
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
    </div>
  );
};

export default Delevery;
