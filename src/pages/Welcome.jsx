import React from "react";
import Hero from "../components/Hero";
import NearResto from "../components/NearResto";
import PopularResto from "../components/PopularResto";

const Welcome = () => {
  return (
    <div>
      <Hero />
      <PopularResto />
      <NearResto />
    </div>
  );
};

export default Welcome;
