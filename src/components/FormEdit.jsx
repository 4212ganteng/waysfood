import React from "react";
import Addinput from "../pages/Addinput";

const FormEdit = ({ title, Location, hp }) => {
  return (
    <>
      <div className="container">
        <h2>{title}</h2>
        <h2 className="mb-3">Edit Profile</h2>
        <Addinput a="Full Name" b="Email" />
        <div class="mb-3">
          {/* <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label> */}
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder={hp}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder={Location}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          {/* <label class="input-group-text ms-2" for="inputGroupFile01">
          Sellect on Map
        </label> */}
          <input
            type="file"
            class="form-control"
            id="inputGroupFile01"
            hidden
            //   style={{ appearance }}
          />
        </div>
        <button className="d-flex justify-end">Save</button>
      </div>
    </>
  );
};

export default FormEdit;
