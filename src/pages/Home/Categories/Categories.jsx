import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Categories = () => {

  useEffect(function () {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <div className="w-[1280px] mx-auto">
      <h1 className="text-center font-bold text-5xl my-8">Categories Food</h1>
      <div className=" h-96 bg-[#f2f2f2] flex items-center justify-between px-8">
        <div data-aos="fade-right">
          <h2 className="text-3xl mb-5 "> Recepies Categories</h2>
          <div className="text-xl">
            <li>Pizza(2)</li>
            <li>Appetizer(6)</li>
            <li>Beverages(1)</li>
            <li>Dessert(4)</li>
            <li>Lunch(10)</li>
            <li>Main Dishes(8)</li>
            <li>Side Dishes(5)</li>
          </div>
        </div>

        <div data-aos="flip-left">
          <h2 className="mb-4 text-3xl">Photos From Flicker</h2>
          <div className="grid grid-cols-3 gap-6">
            <div  data-aos="flip-left"  className="w-32 border-white  border-4 rounded">
              <img src="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
            </div>
            <div  data-aos="flip-left" className="w-32 border-white border-4 rounded">
              <img src="https://live.staticflickr.com/3945/15485436268_846ccca178.jpg" />
            </div>
            <div  data-aos="flip-left" className="w-32 border-white border-4 rounded">
              <img src="https://live.staticflickr.com/3956/15668911091_4ef20118b5.jpg" />
            </div>
            <div  data-aos="flip-left" className="w-32 border-white border-4 rounded">
              <img src="https://live.staticflickr.com/8667/15051463473_e9b233ec27.jpg" />
            </div>
            <div  data-aos="flip-left" className="w-32 border-white border-4 rounded">
              <img src="https://live.staticflickr.com/7521/15668907781_c9d9202ac2.jpg" />
            </div>
            <div  data-aos="flip-left" className="w-32 border-white border-4 rounded">
              <img src="https://live.staticflickr.com/5615/15506874176_3ba55c55b7_z.jpg" />
            </div>
          </div>
        </div>


        <div>
          <h2 className="text-3xl my-5 capitalize font-semibold "> Recent Desserts</h2>

          <div className="flex flex-col gap-5 items-center justify-center">

            <div data-aos="fade-left" className="flex  items-start justify-center">
              <div className="avatar">
                <div className="w-20 rounded-full ring ring-yellow-900  ring-offset-base-100 ring-offset-2">
                  <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" />
                </div>
              </div>
              <div className="flex flex-col justify-center gap-3 p-3">
                <p>Simple Chocolate Cake</p>
                <p>Star </p>
              </div>
            </div>

            <div data-aos="fade-left" className="flex  items-start justify-center">
              <div className="avatar">
                <div className="w-20 rounded-full ring ring-yellow-900 ring-offset-base-100 ring-offset-2">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" />
                </div>
              </div>
              <div className="flex flex-col justify-center gap-3 p-3">
                <p>Chocolate & Strawberry</p>
                <p>Lorem  </p>
              </div>
            </div>


          </div>
        </div>


      </div>
    </div>
  );
};

export default Categories;
