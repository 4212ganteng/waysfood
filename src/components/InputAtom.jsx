import React from "react";

const InputAtom = ({ name, type }) => {
  return (
    <div className="col-md form-floating mb-3">
      <input type={type} class="form-control h-75 " placeholder="abcljlkjl" />
      <label for="floatingPassword" className="px-3 pb-2">
        {name}
      </label>
    </div>
  );
};

export default InputAtom;
