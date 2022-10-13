import React from "react";
import Bensudb from "../components/Bensudb";
import Navbarwf from "../components/Navbarwf";

const BensuMenus = () => {
  document.title = "halaman";
  return (
    <div>
      <div className="mt-5">
        <Bensudb />
      </div>
    </div>
  );
};

export default BensuMenus;
