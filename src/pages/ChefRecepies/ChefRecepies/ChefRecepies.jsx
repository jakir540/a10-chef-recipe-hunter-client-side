import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AiFillLike } from "react-icons/all";
import RecepiCard from "../RecepiCard/RecepiCard";

const ChefRecepies = () => {
  const [chefInfo, setChefInfo] = useState({});

  const chefDetails = useLoaderData();

  // console.log(chefDetails);

  const { picture, name, description, experience, likes, recipes, recipeinfo } =
    chefDetails;

  return (
    <div className="py-10">
     
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col gap-8 lg:flex-row-reverse">
            <img style={{height:"600px"}}
              src={picture}
              className=" w-full object-fit rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{name}</h1>
              <p  className="py-6 font-semibold font-serif"> <span className="font-bold text-yellow-900 text-3xl">Bio:</span>{description}</p>

              <div className="py-3">
                <p>Number of Recepies: {recipes}</p>
                <p> Experience: {experience}</p>
                <p className="flex gap-2 items-center py-2">
                  {" "}
                  <span className="text-3xl">
                    <AiFillLike></AiFillLike>
                  </span>{" "}
                  <span className="text-red-400">{likes}</span>
                </p>
              </div>

              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

        {/* RECIPE ITEM SECTION */}
        <section>
          <h1 className="text-center text-5xl my-5 font-bold">Recepies All </h1>
          <div className="flex px-24 gap-5 justify-center items-center">
            {recipeinfo.map((recipe) => (
              <RecepiCard recipe={recipe}></RecepiCard>
            ))}
          </div>
        </section>
     
    </div>
  );
};

export default ChefRecepies;
