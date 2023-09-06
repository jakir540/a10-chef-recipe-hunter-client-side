import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HotOffer = () => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
 
    <h1 className="text-center text-5xl font-bold mb-8">What,s Hot</h1>
    
      <div className="lg:flex items-center justify-center gap-8">


        <div>
          
        </div>
        <div>
          <div   data-aos="flip-left" className="card w-96 h-[500px] bg-base-100 shadow-xl">
            <h2 className="text-3xl font-semibold mx-auto mb-3">Chocolate</h2>
            <figure>
              <img
                src="https://foodrecipes.inspirythemes.com/bootstrap/wp-content/uploads/sites/3/2013/03/ChoclateEarl.jpg"
                alt="Coffe"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Chocolate Earl Grey
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>
                2 cups cream 120 grams dark chocolate, chopped 2 bags of earl
               
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
        <div>
          <div data-aos="flip-left" className="card w-96 h-[500px] bg-base-100 shadow-xl">
            <h2 className="text-3xl font-semibold mx-auto mb-3">Rolls</h2>
            <figure>
              <img
                src="https://plus.unsplash.com/premium_photo-1661573564670-bd9a438fd70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="Coffe"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
              Goat Cheese and Chorizo Rolls
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>
                2 cups cream 120 grams dark chocolate, chopped 2 bags of earl
            
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
        <div>
          <div data-aos="flip-left" className="card w-96  h-[500px] bg-base-100 shadow-xl">
            <h2 className="text-3xl font-semibold mx-auto mb-3">Chocolate</h2>
            <figure>
              <img
                src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"
                alt="Coffe"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Chocolate Earl Grey
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>
                2 cups cream 120 grams dark chocolate, chopped 2 bags of earl
               
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>


        
      </div>

    </div>
  );
};

export default HotOffer;
