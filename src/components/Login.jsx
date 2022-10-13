import React from "react";
import { Link } from "react-router-dom";

const Login = ({ a, setShow }) => {
  return (
    <div>
      <div className="container">
        <h2>Login</h2>
        <form>
          <div class="mb-3">
            <input
              type="email"
              class="form-control border-0 shadow p-2 w-100 rounded"
              id="input-email"
              placeholder="Email"
              name="email"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control border-0 shadow p-2 w-100 rounded"
              id="input-password"
              placeholder="Password"
              name="password"
            />
          </div>

          <button
            class="btn btn-dark float-end mb-5  mt-3"
            onClick={(e) => {
              e.preventDefault();
              a(true);
              setShow(false);
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
