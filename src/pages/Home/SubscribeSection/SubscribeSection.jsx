import React from "react";
import Advertisement from "../Advertisement/Advertisement";

import HotOffer from "../HotOffer/HotOffer";
import Categories from "../Categories/Categories";
import Delevery from "../Delevery/Delevery";

const SubscribeSection = () => {
  return (
    <section>
      <div className="my-10">
        <Categories></Categories>
      </div>
      <div className="my-10">
        <HotOffer></HotOffer>
      </div>
     <div>
     <Delevery></Delevery>
     </div>

      <div>

























      
        <div className="md:flex  justify-center items-center mt-16 mb-0">
          <div className="card w-96 bg-base-400 shadow-xl image-full  h-96 md:mx-3">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="food"
              />
            </figure>
            <div className="card-body divide-y-4 divide-white-200 md:p-8">
              <h2 className="card-title">BUY GIFT CARDS ONLINE!</h2>
              <p className="text-white py-4 text-2xl">
                Provide with our Gift Card to whome you most want and is sure
                Food refers to any substance{" "}
              </p>
              <div className="card-actions justify-end">
                <button className="btn bg-yellow-900 mt-5">GIFT CARD</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-yellow-900 shadow-xl image-full  h-96 mx-3">
            <div className="card-body divide-y-4 divide-white-200 p-8">
              <h2 className="card-title">BUY GIFT CARDS ONLINE!</h2>
              <p className="text-white py-4 text-2xl">
                get recipes tips and news delivered to your inbox{" "}
              </p>
              <div>
                <input
                  className="p-5 h-8 my-2 bg-transparent border capitalize"
                  type="email"
                  placeholder="enter your email"
                />
              </div>
              <div className="card-actions justify-end">
                <button className="btn bg-yellow-900 mt-5">SEBSCRIBE</button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-slate-900 shadow-xl image-full  h-96 mx-3">
            <div className="card-body divide-y-4 divide-white-200 p-8">
              <h2 className="card-title">VISIT OUR STORE</h2>
              <p className="text-white py-4 text-2xl">
                here you,ll find a carefully chosen kitchen inventory{" "}
              </p>
              <div className="card-actions justify-end">
                <button className="btn bg-yellow-900 mt-5">EXPLORE SHOP</button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-400 shadow-xl image-full  h-96 mx-3">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="food"
              />
            </figure>
            <div className="card-body divide-y-4 divide-white-200 p-8">
              <h2 className="card-title">BUY GIFT CARDS ONLINE!</h2>
              <p className="text-white py-4 text-2xl">
                Provide with our Gift Card to whome you most want a{" "}
              </p>
              <div className="card-actions justify-end">
                <button className="btn bg-yellow-900 mt-5">GIFT CARD</button>
              </div>
            </div>
          </div>
        </div>
        <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.048)" }}
        className="custom-shape-divider-top-1687544512 mt-16"
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
        
      </div>
 
    <div className="mt-64 mb-10">
    <Advertisement></Advertisement>
    </div>
    </section>
  );
};

export default SubscribeSection;
