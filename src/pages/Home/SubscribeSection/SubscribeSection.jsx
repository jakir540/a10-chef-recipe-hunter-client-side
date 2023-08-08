import React from "react";
import Philosophy from "../Philosophy/Philosophy";
import Purchage from "../Purchage/Purchage";
import HotOffer from "../HotOffer/HotOffer";
import Categories from "../Categories/Categories";

const SubscribeSection = () => {
  return (
    <section>
    <div className="my-10">
      <Categories></Categories>
    </div>
    <div className="my-10">
      <HotOffer></HotOffer>
    </div>
     <Philosophy></Philosophy>

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
              Provide with our Gift Card to whome you most want and is sure Food
              refers to any substance{" "}
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

      <Purchage></Purchage>
    </section>
  );
};

export default SubscribeSection;
