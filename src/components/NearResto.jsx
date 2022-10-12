import React from "react";
import { useNavigate } from "react-router-dom";
import { near as restos } from "../dumy/RestoNear";
const NearResto = () => {
  const abc = useNavigate();
  return (
    <div>
      <h3 className="container mt-5">Restaurant Near You</h3>
      <div className="container d-flex gap-3 mb-5">
        {restos.map((resto, index) => (
          <div
            class="card shadow"
            style={{ width: "15rem" }}
            key={index}
            onClick={() => abc("/bensu-menus")}
          >
            <img src={resto.image} className="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-text">
                <h6>{resto.name}</h6>
                <p>{resto.distance}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearResto;
