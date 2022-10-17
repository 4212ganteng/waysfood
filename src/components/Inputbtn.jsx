import React from "react";

const Input = ({ type, name, namebtn, onClick }) => {
  return (
    <div className="row d-flex">
      <div className="col-md-9 form-floating">
        <input
          type={type}
          class="form-control h-75 "
          id="floatingPassword"
          placeholder="abcljlkjl"
        />
        <label for="floatingPassword" className="px-3 py-2">
          {name}
        </label>
      </div>
      <div className="col-md-2">
        <button
          className=" w-100 py-2 rounded text-white "
          style={{ backgroundColor: "#433434" }}
          onClick={onClick}
        >
          {namebtn}
        </button>
      </div>
    </div>
  );
};

export default Input;
