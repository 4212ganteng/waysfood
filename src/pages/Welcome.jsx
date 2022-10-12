import React from "react";
import Hero from "../components/Hero";
import Navbarwf from "../components/Navbarwf";
import NearResto from "../components/NearResto";
import PopularResto from "../components/PopularResto";

const Welcome = () => {
  return (
    <div>
      <Navbarwf />
      <Hero />
      <PopularResto />
      <NearResto />
    </div>
  );
};

export default Welcome;
