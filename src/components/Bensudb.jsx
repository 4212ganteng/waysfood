import React from "react";
import { bensu as menus } from "../dumy/bensu/menus";
import { Link } from "react-router-dom";

const Bensudb = ({ a }) => {
  return (
    <div className="container">
      <h2>Geprek Bensu, Menus</h2>
      <div className="row mt-3">
        {menus.map((menu) => (
          <div className="col-md gap-3  d-flex flex-wrap">
            <div className="card shadow mb-3" style={{ width: "15rem" }}>
              <img
                src={menu.image}
                className="card-img-top p-2 rounded"
                alt="..."
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h6 className="card-text">
                  {menu.name}
                  <p className="text-danger mt-2">Rp. {menu.price}</p>
                </h6>
                <Link to="#">
                  <button className="btn btn-warning w-100">
                    {a ? a : " Add To Chart"}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bensudb;
