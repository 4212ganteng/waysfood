import React from "react";
import ayam from "../assets/images/ayam.svg";
import sampah from "../assets/images/sampah.svg";
const CartBensu = () => {
  return (
    <div className="container">
      <h2>Geprek Bensu</h2>
      <p>Delivery Location</p>
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-9">
            <input
              type="text"
              placeholder="Harbour Building"
              className="w-100"
            />
          </div>
          <div className="col-md-2">
            <button className="w-100">Select On Map</button>
          </div>
        </div>
      </div>
      <div className="container">
        <h5>Review Your Order</h5>
        <div>
          <hr />
          <div className=" d-flex">
            <img src={ayam} alt="" width={"90px"} />
            <div className="row w-100 ms-3">
              <div className="col fw-bold ">
                <p>paket Geprek</p>
                <div className="row w-25">
                  <div className="col-md fw-bold fs-5">+</div>
                  <div className="col-md fw-bold text-center bg-danger rounded bg-opacity-25 ">
                    1
                  </div>
                  <div className="col-md fw-bold fs-5"> -</div>
                  <hr className="bg-info text-info" />
                </div>
              </div>

              <div className="col">
                <hr className="bg-info text-info" />

                <span className="text-danger">15000</span>
                <div>
                  <img src={sampah} alt="" className="mt-3" />
                </div>
                <hr className="bg-info text-info" />
              </div>
            </div>
            abccc
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBensu;
