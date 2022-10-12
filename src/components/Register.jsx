import React from "react";

const Register = () => {
  return (
    <div className="container">
      <h2>Register</h2>
      <form action="/login" method="post">
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
        <div class="mb-3">
          <input
            type="text"
            class="form-control border-0 shadow p-2 w-100 rounded"
            id="input-password"
            placeholder="Full Name"
            name="password"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control border-0 shadow p-2 w-100 rounded"
            id="input-password"
            placeholder="Gender"
            name="password"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control border-0 shadow p-2 w-100 rounded"
            id="input-password"
            placeholder="Phone"
            name="password"
          />
        </div>

        <button class="btn btn-dark float-end mb-5  mt-3">submit</button>
      </form>
    </div>
  );
};

export default Register;
