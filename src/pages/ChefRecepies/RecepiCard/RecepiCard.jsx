import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecepiCard = ({ recipe }) => {
  const [isDisable ,setIsDisable] =useState(false)
  // console.log(recipe);
  const { cooking_method, name, rating, ingredients } = recipe;
  console.log(ingredients);
  const handleClick = () => {
    toast.success('successfully! You are my Favourite Chef', {
      position: toast.POSITION.TOP_RIGHT
    });
    setIsDisable(true)
  };
  return (
    <div>
      <div className="card h-full w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div>
            <p>
              <span className="font-semibold text-red-400">
                Cooking Method :
              </span>{" "}
              {cooking_method}
            </p>

            <div className="my-3">
              {ingredients.map((item) => (
                <li>{item}</li>
              ))}
            </div>
          </div>

          <div className="flex my-3">
            <div>
              <Rating
                placeholderRating={rating}
                readonly
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar className="text-yellow-900"></FaStar>}
                fullSymbol={<FaStar></FaStar>}
              ></Rating>
            </div>
            <div>
              <p>
                <span className="text-red-400 ms-3"></span>
                {rating}
              </p>
            </div>
          </div>

          <div className="card-actions justify-end">
            <button  onClick={handleClick} disabled={isDisable} className= " btn bg-yellow-900">Favorite </button>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecepiCard;
