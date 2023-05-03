import React from 'react';

const RecepiCard = ({recipe}) => {
    // console.log(recipe);
    const {cooking_method,name,rating,ingredients}=recipe
    console.log(ingredients);
    return (
        <div>
          

            <div className="card h-full w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div>
            <p><span className='font-semibold text-red-400'>Cooking Method :</span> {cooking_method}</p>
            
            <div className='my-3'>
            {
                ingredients.map(item => <li>{item}</li>)
            }
            </div>
            </div>
            

            <div className='my-3'><p><span className='text-red-400'>Rating : </span>{rating}</p></div>

            <div className="card-actions justify-end">
              <button className="btn bg-yellow-900">Favorite </button>
            </div>
          </div>
        </div>


        </div>
    );
};

export default RecepiCard;