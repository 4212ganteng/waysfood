import React from "react";

const Income = () => {
  return (
    <div className="container">
      <h2 className="my-5">Income Transaction</h2>

      <table className="table table-bordered border-dark container table-light shadow">
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
            <td>Sugeng No Pants</td>
            <td>Cileungsi</td>
            <td>Pkaket Geprek, Paket ke..</td>
            <td>Waiting Approve</td>
            <td>
              <div className="row d-flex">
                <button className="col-md btn-sm bg-danger mx-3 rounded text-center">
                  Cancel
                </button>
                <button className="col-md px-1 me-3 bg-info rounded w-25 text-center">
                  Approve
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Haris Gams</td>
            <td>Serang</td>
            <td>Pkaket Geprek, Paket ke..</td>
            <td>Success</td>
            <td>
              <div className="row d-flex text-center">
                <div className="col-md ">✅</div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Aziz Union</td>
            <td>Bekasi</td>
            <td>Pkaket Geprek, Paket ke..</td>
            <td>Cancel</td>
            <td>
              <div className="row d-flex text-center">
                <div className="col-md">❌</div>
              </div>
            </td>
          </tr>

          <tr>
            <th scope="row">5</th>
            <td>Lae Tanjung Balai</td>
            <td>Tanjung Balai</td>
            <td>Pkaket Geprek, Paket ke..</td>
            <td>On The Way</td>
            <td>
              <div className="row d-flex text-center">
                <div className="col-md">✅</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Income;
