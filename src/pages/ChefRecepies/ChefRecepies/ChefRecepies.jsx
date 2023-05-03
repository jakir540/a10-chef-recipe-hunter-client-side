import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AiFillLike } from "react-icons/all";

const ChefRecepies = () => {
  const [chefInfo, setChefInfo] = useState({});

  const info =  useLoaderData();
  console.log(info);

//   useEffect(() => {
//     fetch("http://localhost:5000/chefs/2")
//       .then((res) => res.json())
//       .then((data) => setChefInfo(data))
//       .catch((error) => console.log(error));
//   }, []);

  
  const { picture,name,description,experience,likes,recipes,recipeinfo } = chefInfo;
 
  console.log(recipeinfo);
  return (
    <>
    
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium tempore quas nisi qui esse sunt eveniet autem possimus eius! Veritatis eum quo, magni accusamus dolorem vitae voluptatum temporibus voluptas hic.</p></>
//     <div>
//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <img 
//             src={picture}
//             className="h-96 w-96 object-fit rounded-lg shadow-2xl"
//           />
//           <div>
//             <h1 className="text-5xl font-bold">{name}</h1>
//             <p className="py-6 font-semibold font-serif">
//               {description}
//             </p>

//         <div className="py-3">
//             <p>Number of Recepies: {recipes}</p>
//             <p> Experience: {experience}</p>
//             <p className="flex gap-2 items-center py-2"> <span className="text-3xl"><AiFillLike></AiFillLike></span> <span className="text-red-400">{likes}</span></p>
//         </div>

//             <button className="btn btn-primary">Get Started</button>
//           </div>
//         </div>
//       </div>

//       <div className="card w-96 bg-base-100 shadow-xl">
  
//   <div className="card-body">
//     <h2 className="card-title">{recipeinfo[0].name}</h2>
//     <p>{recipeinfo[0].cooking_method}</p>
//     <p>Rating {recipeinfo[0].rating}</p>

// <div>

// </div>

//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>




//     </div>
  );
};

export default ChefRecepies;
