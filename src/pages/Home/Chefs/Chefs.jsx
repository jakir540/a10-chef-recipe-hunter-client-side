import React from "react";
import { FaFirstAid, AiFillLike } from "react-icons/all";

const Chefs = ({ chef }) => {
  console.log(chef);

  const { id, picture, likes, recipes, experience, name } = chef;
  return (
    <section>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-96 w-full"  src={picture} alt="chef photo" />
        </figure>
        <div className="card-body">
          <div className="card-title">
            {" "}
            <h2 className="">{name}</h2>
          </div>

          <p>Experience : {experience}</p>

          <div className="card-actions justify-end">
            <button className="bg-yellow-900 rounded-md p-3  text-white font-semibold md:ms-0 ms-5 md:mt-0 mt-5">View Recepies</button>
          </div>

          <div className="card-footer flex justify-between px-2 items-center">
            <div>Recipes: {recipes}</div>

            <div className="text-2xl flex gap-2 items-center">
              <AiFillLike></AiFillLike>
              <p><small>{likes}</small></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chefs;