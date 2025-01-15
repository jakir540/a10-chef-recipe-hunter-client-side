import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Categories = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1
        data-aos="fade-down"
        className="text-center font-extrabold text-4xl lg:text-5xl mb-12 text-gray-800"
      >
        Explore Categories
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-gradient-to-r from-gray-100 via-white to-gray-100 p-10 rounded-xl shadow-xl">
        {/* Categories Section */}
        <div data-aos="fade-right" className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-700">
            Recipe Categories
          </h2>
          <ul className="space-y-3 text-lg text-gray-600">
            {[
              "Pizza (2)",
              "Appetizer (6)",
              "Beverages (1)",
              "Dessert (4)",
              "Lunch (10)",
              "Main Dishes (8)",
              "Side Dishes (5)",
            ].map((category, index) => (
              <li
                key={index}
                className="hover:text-yellow-600 transition-transform duration-300"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Photos Section */}
        <div data-aos="flip-left" className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-700">
            Featured Photos
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
              "https://live.staticflickr.com/3945/15485436268_846ccca178.jpg",
              "https://live.staticflickr.com/3956/15668911091_4ef20118b5.jpg",
              "https://live.staticflickr.com/8667/15051463473_e9b233ec27.jpg",
              "https://live.staticflickr.com/7521/15668907781_c9d9202ac2.jpg",
              "https://live.staticflickr.com/5615/15506874176_3ba55c55b7_z.jpg",
            ].map((src, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={src}
                  alt={`Category ${index}`}
                  className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-bold">View</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Desserts Section */}
        <div data-aos="fade-left" className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-700">
            Recent Desserts
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Simple Chocolate Cake",
                image:
                  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                title: "Chocolate & Strawberry",
                image:
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
                rating: "⭐⭐⭐⭐",
              },
            ].map((dessert, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-yellow-500">
                  <img
                    src={dessert.image}
                    alt={dessert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-gray-600">
                  <h3 className="font-semibold text-lg">{dessert.title}</h3>
                  <p className="text-yellow-500">{dessert.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
