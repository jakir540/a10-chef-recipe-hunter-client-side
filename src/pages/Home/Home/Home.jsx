import { useEffect, useState } from "react";
import Chefs from "../Chefs/Chefs";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

const Home = () => {
  const [chefinfo, setChefinfo] = useState([]);
  console.log({ chefinfo });

  useEffect(() => {
    fetch("https://the-chef-recepi-hunter-server-jakir540.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefinfo(data.chefs))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      {/* Header Section */}
      <section className="flex flex-col justify-center items-center mt-5 px-8">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold tracking-wide text-yellow-900">
            <span className="block">CHEF HUNTER</span>
            <span className="block">
              GOOD F<span className="text-yellow-600">OOD</span> CORNER
            </span>
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Discover top-notch chefs, delicious recipes, and categories that
            suit your cravings.
          </p>
        </div>

        {/* Swiper Section */}
        <div className="w-full lg:w-10/12 mb-16">
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper shadow-lg rounded-xl overflow-hidden"
          >
            {[
              {
                title: "Veggie Burger",
                img: "https://cdn.pixabay.com/photo/2020/03/21/11/17/burger-4953465_1280.jpg",
              },
              {
                title: "Coco Burger",
                img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
              },
              {
                title: "Stellar Burger",
                img: "https://cdn.pixabay.com/photo/2019/04/22/08/37/burger-4145977_1280.jpg",
              },
              {
                title: "Burger Heaven",
                img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
              },
              {
                title: "Aristocrat Burger",
                img: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
              },
              {
                title: "Fatburger",
                img: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
              },
            ].map((slide, index) => (
              <SwiperSlide key={index} className="relative">
                <img
                  className="h-[500px] object-cover rounded-lg shadow-md"
                  src={slide.img}
                  alt={slide.title}
                />
                <h2 className="absolute bottom-10 left-10 bg-yellow-900 bg-opacity-80 text-white text-3xl font-bold px-6 py-2 rounded-md">
                  {slide.title}
                </h2>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Categories Section */}
        <div className="w-full lg:w-10/12">
          <h2 className="text-center text-3xl font-bold text-yellow-900 mb-10">
            Categories of Food
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Burger",
                count: 12,
                img: "https://cdn.pixabay.com/photo/2023/05/29/17/01/hamburger-8026582_1280.jpg",
              },
              {
                name: "Pizza",
                count: 10,
                img: "https://cdn.pixabay.com/photo/2016/05/25/10/43/hamburger-1414423_1280.jpg",
              },
              {
                name: "Cheeseburger",
                count: 5,
                img: "https://cdn.pixabay.com/photo/2023/05/29/17/01/hamburger-8026582_1280.jpg",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-yellow-100 rounded-lg shadow-md hover:bg-yellow-200 transition"
              >
                <div className="flex-shrink-0 w-20 h-20">
                  <img
                    className="rounded-full object-cover w-full h-full"
                    src={category.img}
                    alt={category.name}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-yellow-900">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">{category.count} items</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chefs Info Section */}
      <section>
        <h1 className="text-center capitalize text-5xl md:p-2 font-bold my-4 text-yellow-900">
          Chinese Chefs
        </h1>
        <div className="flex justify-center flex-wrap gap-5 mt-3 ms-0 items-center">
          {chefinfo.map((chef) => (
            <Chefs key={chef.id} chef={chef}></Chefs>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
