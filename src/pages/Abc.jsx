import React from "react";
import gambar from "../assets/images/nasgor.svg";
import sampah from "../assets/images/sampah.svg";

const Abc = () => {
  return (
    <>
      <div className="container">
        <div>
          <h2 className="my-5 fw-bold">Geprek Bensu</h2>
          <p style={{ color: "#613D2B" }} className="fs-4">
            Delivery Location
          </p>
          <div className="container">
            <div className="row d-flex">
              <div className="col-md-9 form-floating">
                <input
                  type="text"
                  class="form-control h-75 "
                  id="floatingPassword"
                  placeholder="abcljlkjl"
                />
                <label for="floatingPassword text-center">
                  Harbour Building
                </label>
              </div>
              <div className="col-md-2">
                <button
                  className="w-100 py-2 rounded text-white"
                  style={{ backgroundColor: "#433434" }}
                >
                  Select On Map
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <p style={{ color: "#613D2B" }} className="fs-4">
              Review Youre Order
            </p>
            <div className="overflow-scroll" style={{ height: "300px" }}>
              <div className="row d-flex">
                <hr />
                <div className="col-md" style={{ maxWidth: "100px" }}>
                  <div className="bg-info">
                    <img src={gambar} alt="" width={"80px"} />
                  </div>
                </div>
                <div className="col-md">
                  <div className="fw-bold">ayam bakar</div>
                  <div className="row w-50 mt-2">
                    <div className="col-md">-</div>
                    <div
                      className="col-md rounded "
                      style={{ backgroundColor: "#F6E6DA" }}
                    >
                      2
                    </div>
                    <div className="col-md">+</div>
                  </div>
                </div>
                <div className="col-md">
                  <div>
                    <div className="text-danger ">Rp.12.000 </div>
                    <div className="mt-2">
                      <img src={sampah} alt="" />
                    </div>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
              </div>
              <div className="row d-flex">
                <hr />
                <div className="col-md" style={{ maxWidth: "100px" }}>
                  <div className="bg-info">
                    <img src={gambar} alt="" width={"80px"} />
                  </div>
                </div>
                <div className="col-md">
                  <div>ayam bakar</div>
                  <div className="row w-50">
                    <div className="col-md">-</div>
                    <div className="col-md">2</div>
                    <div className="col-md">+</div>
                  </div>
                </div>
                <div className="col-md">
                  <div>
                    <div>Rp.15.000 </div>
                    <div>
                      <img src={sampah} alt="" />
                    </div>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
              </div>
              <div className="row d-flex">
                <hr />
                <div className="col-md" style={{ maxWidth: "100px" }}>
                  <div className="bg-info">
                    <img src={gambar} alt="" width={"80px"} />
                  </div>
                </div>
                <div className="col-md">
                  <div>ayam bakar</div>
                  <div className="row w-50">
                    <div className="col-md">-</div>
                    <div className="col-md">2</div>
                    <div className="col-md">+</div>
                  </div>
                </div>
                <div className="col-md">
                  <div>
                    <div>
                      <p>Rp.15.000</p>{" "}
                    </div>
                    <div>
                      <img src={sampah} alt="" />
                    </div>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
              </div>
              <div className="row d-flex">
                <hr />
                <div className="col-md" style={{ maxWidth: "100px" }}>
                  <div className="bg-info">
                    <img src={gambar} alt="" width={"80px"} />
                  </div>
                </div>
                <div className="col-md">
                  <div>ayam bakar</div>
                  <div className="row w-50">
                    <div className="col-md">-</div>
                    <div className="col-md">2</div>
                    <div className="col-md">+</div>
                  </div>
                </div>
                <div className="col-md">
                  <div>
                    <div>kiri </div>
                    <div>tapi paling kanan</div>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
              </div>
              <div className="row d-flex">
                <hr />
                <div className="col-md" style={{ maxWidth: "100px" }}>
                  <div className="bg-info">
                    <img src={gambar} alt="" width={"80px"} />
                  </div>
                </div>
                <div className="col-md">
                  <div>ayam bakar</div>
                  <div className="row w-50">
                    <div className="col-md">-</div>
                    <div className="col-md">2</div>
                    <div className="col-md">+</div>
                  </div>
                </div>
                <div className="col-md">
                  <div>
                    <div>kiri </div>
                    <div>tapi paling kanan</div>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
              </div>
              <div className="row d-flex">
                <hr />
                <div className="col-md" style={{ maxWidth: "100px" }}>
                  <div className="bg-info">
                    <img src={gambar} alt="" width={"80px"} />
                  </div>
                </div>
                <div className="col-md">
                  <div>ayam bakar</div>
                  <div className="row w-50">
                    <div className="col-md">-</div>
                    <div className="col-md">2</div>
                    <div className="col-md">+</div>
                  </div>
                </div>
                <div className="col-md">
                  <div>
                    <div>kiri </div>
                    <div>tapi paling kanan</div>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md">
            <hr className="mt-5" />
            <div className="row">
              <div className="col-md">
                <p>Sub Total</p>
                <p>Qty</p>
                <p>Ongkir</p>
              </div>
              <div className="col-md">
                <p className="text-danger ">Rp.35.000</p>
                <p>2</p>
                <p className="text-danger ">Rp.10.000</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md">
                <p className="text-danger ">Total</p>
              </div>
              <div className="col-md">
                <p className="text-danger ">Rp. 40.000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end mb-5">
          <button
            className="w-25 rounded text-white py-2"
            style={{ backgroundColor: "#433434" }}
          >
            Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Abc;

// const scrolbar::-webkit-scrollbar {
//     display: none;
//   }
