import React from "react";
import propil from "../assets/images/propil.svg";
import logo1 from "../assets/images/logo1.svg";

const Profile = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>My Profile</h2>
            <div>
              <div className="row">
                <div className="col">
                  <img src={propil} alt="" />
                  <button>
                    <div>Edit Profile</div>
                  </button>
                </div>
                <div className="col">
                  <div>
                    <h6>Full Name</h6>
                    <p>Andi</p>
                  </div>
                  <div>
                    <h6>Email</h6>
                    <p>andigans@gmail.com</p>
                  </div>
                  <div>
                    <h6>Phone</h6>
                    <p>083896833122</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h2>History Transaction</h2>
            <div className="container">
              <div className="row">
                <div className="col-md">
                  <h6>Geprek Bensu</h6>
                  <h6>
                    Saturday <span>, 12 March 2021</span>
                  </h6>
                  <span>Total : Rp 45.000</span>
                </div>
                <div className="d-flex row bg-danger justify-content-start w-100">
                  <div className="col-md">WaysFood</div>
                  {/* <div> */}
                  <img
                    src={logo1}
                    alt=""
                    width="35px"
                    height="35px"
                    className="col-md"
                    style={{ marginRight: "360px" }}
                  />
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
