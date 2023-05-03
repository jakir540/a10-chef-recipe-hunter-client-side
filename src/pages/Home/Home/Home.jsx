import React, { useEffect, useState } from "react";
import Chefs from "../Chefs/Chefs";

const Home = () => {
const [chefinfo ,setChefinfo] =  useState([]);


useEffect(()=>{
  fetch('http://localhost:5000/chefs')
  .then(res => res.json())
  .then(data => setChefinfo(data.chefs))
  .catch(error => console.log(error))
},[])



  return (


   <main>
     <section className="flex justify-evenly mt-16 mx-10">
      <div className="w-1/2 flex flex-col text-center justify-center ">
        <h1 className="text-7xl pb-10 font-bold"><span>CHEF HUNTER  </span><br /><span>GOOD F<span className="text-yellow-900">OOD</span> </span> </h1>
        <p className="font-serif font-semibold text-gray-500 p-10">
          Good food is subjective and can vary based on personal preferences,
          culture, and dietary restrictions. However, in general, good food is
          nutritious, flavorful, and well-prepared. It should provide the body
          with essential nutrients such as protein, healthy fats, fiber,
          vitamins, and minerals. A balanced and varied diet that includes a
          variety of fruits, vegetables, whole grains, lean protein sources, and
          healthy fats is considered healthy and beneficial for overall health
          and well-being.
        </p>
      </div>

      <div>
        <img
          className="rounded-md"
          src="https://thekitchencommunity.org/wp-content/uploads/2021/09/asian-shutterstock_587404205.jpg"
          alt=""
        />
      </div>
    </section>


{/* chefs info section start  */}


   <section>
      <h1 className="text-center capitalize text-5xl p-5 font-bold my-6">chiness chefs </h1>
   <div className="flex justify-center flex-wrap gap-8 my-20">
      {
        chefinfo.map(chef => <Chefs key={chef.id} chef={chef}></Chefs>)
      }

    </div>
   </section>

   </main>
  );
};

export default Home;
