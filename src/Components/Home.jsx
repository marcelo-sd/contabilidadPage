import React from "react";
import "../Styles/home.css";
import CardPre from "./Reutilizables/CardPresentacion";
import mt from "../assets/mt.png";

function Home() {
  return (
    <div className="container-home conteiner">
      <section className="section-home-1 row mb-5    d-flex justify-content-center align-items-center">
        <div
          className="sec-card-home  h-100 container  d-flex justify-content-center align-items-center 
        col-11 col-sm-11 col-md-9 col-lg-6 col-xl-6 col-xxl-6
     mb-3
        "
        >
          <CardPre className="w-75 " />
        </div>

        <div
          className="sec-img-home 
             col-11 col-sm-11 col-md-9 col-lg-6 col-xl-6 col-xxl-6
           
           mb-3
        "
        >
          
        
              <figure className="marco-img-home  rounded me-3">
                <img src={mt} alt="" className="img-home     " />
              </figure>
         
        </div>
      </section>
    </div>
  );
}

export default Home;
