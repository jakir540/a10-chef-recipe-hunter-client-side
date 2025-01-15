import React, { useEffect } from "react";
import { AiFillLike } from "react-icons/ai";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Chefs = ({ chef }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const { id, picture, likes, recipes, experience, name } = chef;

  return (
    <section className="flex justify-center py-3">
      <div
        data-aos="fade-up"
        className="card md:w-96 w-[350px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        {/* Chef Image */}
        <LazyLoad height={360}>
          <img
            className="md:h-80 h-full w-full object-cover rounded-t-lg"
            src={picture}
            alt="Chef"
          />
        </LazyLoad>

        {/* Card Content */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
          <p className="text-gray-600 text-sm mb-4">
            Experience: <span className="font-medium">{experience} years</span>
          </p>

          {/* Recipes and Likes */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700 text-sm">
              Recipes: <span className="font-medium">{recipes}</span>
            </p>
            <div className="flex items-center text-gray-700 gap-1">
              <AiFillLike className="text-yellow-900 text-lg" />
              <span className="text-sm">{likes}</span>
            </div>
          </div>

          {/* View Recipes Button */}
          <Link to={`/chefrecepies/${id}`}>
            <button className="w-full bg-yellow-900 text-white py-2 px-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-300">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Chefs;
