import React from "react";
import propil from "../assets/images/propil.svg";
import logo1 from "../assets/images/logoBrand.svg";
import { useNavigate } from "react-router-dom";

const Profile = ({ title, nama1, email, namep, names }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <h2> {title ? title : "My Profile"}</h2>
            <div>
              <div className="row mt-5">
                <div className="col" style={{ maxWidth: "200px" }}>
                  <img src={propil} alt="" className="rounded" />
                  <button
                    onClick={() => navigate("/edit-profile")}
                    className="w-100 mt-3 py-1 rounded   text-white"
                    style={{ backgroundColor: "#433434" }}
                  >
                    Edit Profile
                  </button>
                </div>
                <div className="col">
                  <div>
                    <h6 style={{ color: "#613D2B" }}>
                      {names ? names : "Full Name"}
                    </h6>
                    <p>{nama1 ? nama1 : "Andi"}</p>
                  </div>
                  <div>
                    <h6 style={{ color: "#613D2B" }}>Email</h6>
                    <p>{email ? email : "andigans@gmail.com"}</p>
                  </div>
                  <div>
                    <h6 style={{ color: "#613D2B" }}>Phone</h6>
                    <p>083896833122</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6" style={{ width: "350px" }}>
            <h2>History Transaction</h2>
            <div className="row d-flex justif-content-between mt-5">
              <div className="col-md">
                <p className="fw-bold ">{namep ? namep : "Geprek bensu"}</p>
                <p>
                  <span className="fw-bold">Saturday</span>, 12 March 2021
                </p>
                <p className="text-danger mt-3">Total : Rp.45.000</p>
              </div>
              <div className="col-md">
                <div>
                  <img src={logo1} alt="" className="mb-3" />
                </div>
                <p
                  className="mt-5 text-center"
                  style={{
                    backgroundColor: "#ccffe6",
                    color: "#00e673",
                  }}
                >
                  Finished
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
