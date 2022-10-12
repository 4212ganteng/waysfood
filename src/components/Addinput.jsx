import React from "react";

const Addinput = ({ a, b }) => {
  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder={a}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <label class="input-group-text ms-2" for="inputGroupFile01">
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
          placeholder={b}
        />
      </div>
    </div>
  );
};

export default Addinput;
