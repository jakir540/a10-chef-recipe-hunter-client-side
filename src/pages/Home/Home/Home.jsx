import { useEffect, useState } from "react";
import Chefs from "../Chefs/Chefs";

import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Home = () => {
  const [chefinfo, setChefinfo] = useState([]);
  console.log({ chefinfo });

  useEffect(() => {
    fetch('https://the-chef-recepi-hunter-server-jakir540.vercel.app/chefs')
    // fetch("http://localhost:3000/chefs")
      .then((res) => res.json())
      .then((data) => setChefinfo(data.chefs))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <section className=" md:flex flex-col justify-evenly mt-16 md:mx-10 ">
        <div className="md:w-full flex flex-col text-start justify-center ">
          <h1 className="md:text-4xl text-xl pb-10 font-bold">
            <span>CHEF HUNTER </span>
            <span>
              GOOD F<span className="text-yellow-900">OOD</span>{" "}
            </span>{" "}
            CORNER{" "}
          </h1>
        </div>

        <div className="flex justify-between">
          <div className="w-9/12">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
              autoplay={{ delay: 2000 }}
            >
              <SwiperSlide>
              <h2 className="top-[550px] left-64 relative text-white text-5xl">Veggie burger</h2>
                <img
                  className="h-[600px]"
                  src="https://cdn.pixabay.com/photo/2020/03/21/11/17/burger-4953465_1280.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
              <h2 className="top-[550px] left-64 relative text-white text-5xl">Coco Burger</h2>
                <img
                  className="h-[600px]"
                  src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                />
              </SwiperSlide>
              <SwiperSlide>
              <h2 className="top-[550px] left-64 relative text-white text-5xl">
Stellar Burger</h2>
                <img
                  className="h-[600px]"
                  src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80https://cdn.pixabay.com/photo/2019/04/22/08/37/burger-4145977_1280.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
              <h2 className="top-[550px] left-64 relative text-white text-5xl">Burger Heaven</h2>
                <img
                  className="h-[600px]"
                  src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                />
              </SwiperSlide>
              <SwiperSlide>
              <h2 className="top-[550px] left-64 relative text-white text-5xl">
Aristocrat Burger</h2>
                <img
                  className="h-[600px]"
                  src="https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                />
              </SwiperSlide>
              <SwiperSlide>
              <h2 className="top-[550px] left-64 relative text-white text-5xl">Fatburger</h2>
                <img
                  className="h-[600px]"
                  src="https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                />
              </SwiperSlide>
              <SwiperSlide>
              <h2 className="top-[550px] left-64 relative text-white text-5xl">Shake Shack</h2>
                <img
                  className="h-[600px]"
                  src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                />
              </SwiperSlide>
              <SwiperSlide>
              <h2 className="top-[550px] left-64 relative text-white text-5xl">Cheeseburger</h2>
                <img
                  className="h-[600px]"
                  src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                />
              </SwiperSlide>
              <SwiperSlide>
              <h2 className="top-[550px] left-64 relative text-white text-5xl">Beef burger</h2>
                <img
                  className="h-[600px]"
                  src="https://plus.unsplash.com/premium_photo-1661387558893-63d24776cf38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div>
            <h1 className="text-center text-2xl  py-8 mt-[-100px]  font-bold uppercase">
              Categories Of Food
            </h1>

            <marquee behavior="" direction="up" className="text-2xl p-5 ">
              <div className="p-1">
                <div className="flex justify-between bg-base-200 items-center px-5 py-2 rounded-md">
                  <div>
                    <h1 className="text-xl font-bold"> Burger (12)</h1>
                  </div>

                  <div>
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-32 rounded-full">
                        <img src="https://cdn.pixabay.com/photo/2023/05/29/17/01/hamburger-8026582_1280.jpg" />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div  className="p-1">
              <div className="flex justify-between bg-base-200 items-center px-5 py-2 rounded-md">
                  <div>
                    <h1 className="text-xl font-bold"> Pizza (10)</h1>
                  </div>

                  <div>
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-32 rounded-full">
                        <img src="https://cdn.pixabay.com/photo/2016/05/25/10/43/hamburger-1414423_1280.jpg" />
                      </div>
                    </label>
                  </div>
                </div>
              
              
              </div>

              <div  className="p-1">
              
              <div className="flex justify-between bg-base-200 items-center px-5 py-2 rounded-md">
                  <div>
                    <h1 className="text-xl font-bold"> Cheeseburger (05)</h1>
                  </div>

                  <div>
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-32 rounded-full">
                        <img src="https://cdn.pixabay.com/photo/2023/05/29/17/01/hamburger-8026582_1280.jpg" />
                      </div>
                    </label>
                  </div>
                </div></div>
              <div  className="p-1">
              <div className="flex justify-between bg-base-200 items-center px-5 py-2 rounded-md">
                  <div>
                    <h1 className="text-xl font-bold"> Chicken burger (10)</h1>
                  </div>

                  <div>
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-32 rounded-full">
                        <img src="https://cdn.pixabay.com/photo/2023/05/29/17/01/hamburger-8026582_1280.jpg" />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div  className="p-1">
              <div className="flex justify-between bg-base-200 items-center px-5 py-2 rounded-md">
                  <div>
                    <h1 className="text-xl font-bold"> BurgerMini burgers (18)</h1>
                  </div>

                  <div>
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-32 rounded-full">
                        <img src="https://cdn.pixabay.com/photo/2023/05/29/17/01/hamburger-8026582_1280.jpg" />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="p-1">
              <div className="flex justify-between bg-base-200 items-center px-5 py-2 rounded-md">
                  <div>
                    <h1 className="text-xl font-bold"> Steak (07)</h1>
                  </div>

                  <div>
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-32 rounded-full">
                        <img src="https://cdn.pixabay.com/photo/2017/08/26/22/01/background-2684464_1280.jpg" />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="p-1">
              <div className="flex justify-between bg-base-200 items-center px-5 py-2 rounded-md">
                  <div>
                    <h1 className="text-xl font-bold"> Soup (12)</h1>
                  </div>

                  <div>
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-32 rounded-full">
                        <img src="https://cdn.pixabay.com/photo/2017/02/01/16/37/chicken-2030706_1280.jpg" />
                      </div>
                    </label>
                  </div>
                </div>
              
              </div>
              <div className="p-1">
              <div className="flex justify-between bg-base-200 items-center px-5 py-2 rounded-md">
                  <div>
                    <h1 className="text-xl font-bold"> Chicken (06)</h1>
                  </div>

                  <div>
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-32 rounded-full">
                        <img src="https://cdn.pixabay.com/photo/2014/01/24/04/05/fried-chicken-250863_1280.jpg" />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
             
              
            </marquee>
          </div>
        </div>
      </section>

      {/* chefs info section start  */}

      <section>
        <h1 className="text-center capitalize text-5xl  md:p-5 font-bold my-6">
          chiness chefs{" "}
        </h1>
        <div className="flex justify-center flex-wrap gap-8 my-20 ms-8 items-center">
          {chefinfo.map((chef) => (
            <Chefs key={chef.id} chef={chef}></Chefs>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
