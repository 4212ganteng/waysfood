import React from "react";
import KompBtn from "../../../components/KompBtn";

const Addinput = ({ a, b }) => {
  return (
    <div className="container mt-5">
      <h3 className="my-5">Add Product</h3>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder={a ? a : "Title"}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <label
          className="input-group-text rounded text-white ms-3"
          for="inputGroupFile01"
          style={{ backgroundColor: "#433434" }}
        >
          Attach Image
        </label>
        <input
          type="file"
          class="form-control"
          id="inputGroupFile01"
          hidden
          //   style={{ appearance }}
        />
      </div>
      <div class="mb-3">
        {/* <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label> */}
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder={b ? b : "Price"}
        />
      </div>
      <div className="d-flex justify-content-end">
        <KompBtn name="Save" />
      </div>
    </div>
  );
};

export default Addinput;
