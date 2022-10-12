import React from "react";
import hero from "../assets/images/hero.png";

const Hero = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#FFC700" }}
    >
      <div className="row">
        <div className="col-md-6 text-center ">
          <h2>Are You Hungry ?</h2>
          <h2>Express Home Delivery</h2>
          <div className="d-flex justify-content-center mt-5">
            <div
              className="mt-2 me-3"
              style={{
                backgroundColor: "#433434",
                width: "150px",
                height: "3px",
              }}
            ></div>
            <p style={{ width: "274px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
