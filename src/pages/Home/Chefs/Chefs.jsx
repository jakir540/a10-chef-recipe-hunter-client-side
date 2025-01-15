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
    <section className="flex justify-center py-6">
      <div
        data-aos="fade-up"
        className="card md:w-96 w-[350px] bg-gradient-to-br from-white via-gray-100 to-gray-50 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
      >
        {/* Chef Image */}
        <div className="relative">
          <LazyLoad height={360}>
            <img
              className="md:h-80 h-full w-full object-cover"
              src={picture}
              alt={name}
            />
          </LazyLoad>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-4 left-4 text-white text-lg font-semibold">
              {name}
            </p>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-600 text-sm">
            Experience:{" "}
            <span className="font-medium text-gray-800">
              {experience} years
            </span>
          </p>

          {/* Recipes and Likes */}
          <div className="flex justify-between items-center">
            <p className="text-gray-700 text-sm">
              Recipes: <span className="font-medium">{recipes}</span>
            </p>
            <div className="flex items-center gap-2">
              <AiFillLike className="text-yellow-900 text-xl hover:text-yellow-700 transition-colors duration-300" />
              <span className="text-sm font-medium text-gray-700">{likes}</span>
            </div>
          </div>

          {/* View Recipes Button */}
          <Link to={`/chefrecepies/${id}`}>
            <button className="w-full bg-gradient-to-r from-yellow-900 to-yellow-700 text-white py-3 rounded-lg font-semibold hover:from-yellow-700 hover:to-yellow-500 transition-all duration-300">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Chefs;
