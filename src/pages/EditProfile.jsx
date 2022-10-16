import React from "react";
import map from "../assets/images/map.svg";
import InputAtom from "../components/InputAtom";
import Inputbtn from "../components/Inputbtn";
const FormEdit = () => {
  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-3 mt-5">Edit Profile</h2>
        <Inputbtn type="text" name="Full name" namebtn="Attach Image" />
        <InputAtom type="email" name="Email" />
        <InputAtom type="text" name="Phone" />

        <div className="input-group form-floating col-md-9 mb-3 ">
          <input type="text" className="form-control" placeholder="abcljlkjl" />
          <label for="floatingPassword" className="px-3">
            Location
          </label>
          <button
            className="input-group-text rounded text-white ms-3 py-2"
            for="inputGroupFile01"
            style={{ backgroundColor: "#433434" }}
          >
            <div className="row d-flex justify-content-start">
              <div className="col-sm">Select On Map</div>
              <div className="col-sm">
                <img src={map} alt="" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default FormEdit;
