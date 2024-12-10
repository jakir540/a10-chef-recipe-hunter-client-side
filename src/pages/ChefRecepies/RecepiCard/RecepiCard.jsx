import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecepiCard = ({ recipe }) => {
  const [isDisable, setIsDisable] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false); // Added state for "Show More"
  const {
    cooking_method,
    name,
    rating,
    ingredients,
    description = "",
  } = recipe; // Ensure description is always a string

  // Function to handle the favorite button click
  const handleClick = () => {
    toast.success("Successfully! You are my Favourite Chef", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setIsDisable(true);
  };

  // Toggle description visibility
  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  return (
    <div className="w-full max-w-md mx-auto mb-10">
      <div className="card h-full bg-white shadow-xl rounded-lg overflow-hidden transition-all hover:shadow-2xl hover:scale-105 transform">
        <div className="card-body p-6">
          <h2 className="card-title text-2xl font-semibold text-gray-900 hover:text-yellow-900 transition-colors duration-300 mb-3">
            {name}
          </h2>

          {/* Cooking Method */}
          <div className="text-gray-600 text-sm mb-4">
            <p>
              <span className="font-semibold text-red-400">
                Cooking Method:
              </span>{" "}
              {cooking_method}
            </p>
          </div>

          {/* Ingredients List */}
          <div className="my-3">
            <h3 className="text-lg font-medium text-gray-800">Ingredients:</h3>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              {ingredients.map((item, index) => (
                <li key={index} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Description */}
          <div className="my-4">
            <p className="text-gray-700 text-sm">
              {showFullDescription
                ? description
                : description.slice(0, 100) + "..."}
            </p>

            {description.length > 100 && (
              <button
                onClick={toggleDescription}
                className="text-yellow-900 font-semibold mt-2 text-sm hover:underline"
              >
                {showFullDescription ? "Show Less" : "Show More"}
              </button>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center my-4">
            <Rating
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar className="text-gray-400" />}
              placeholderSymbol={<FaStar className="text-yellow-900" />}
              fullSymbol={<FaStar className="text-yellow-900" />}
            />
            <span className="text-gray-600 ml-3">{rating}</span>
          </div>

          {/* Favorite Button */}
          <div className="flex justify-end">
            <button
              onClick={handleClick}
              disabled={isDisable}
              className="btn bg-yellow-900 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-700 transition-colors duration-300"
            >
              {isDisable ? "Favorited" : "Favorite"}
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default RecepiCard;
