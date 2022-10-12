import React from "react";

const Income = () => {
  return (
    <div>
      <h2>Income Transaction</h2>

      <table className="table table-bordered container">
        <thead className="table-secondary">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Namae</th>
            <th scope="col">Address</th>
            <th scope="col">Products Order</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Income;
