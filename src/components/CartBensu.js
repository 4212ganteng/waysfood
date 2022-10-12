import React from "react";

const CartBensu = () => {
  return (
    <div className="container">
      <h2>Geprek Bensu</h2>
      <p>Delivery Location</p>
      <div className="">
        <div className="">
          <input
            type="search"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div>
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </div>
      </div>
      <div className="container">
        <h5>Review Your Order</h5>
        <hr />
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CartBensu;
