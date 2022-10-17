import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import keranjang from "../assets/images/keranjang.svg";
import pp from "../assets/images/ppnavbar.svg";
import logo1 from "../assets/images/logoBrand.svg";
import { Dropdown, Badge } from "react-bootstrap";
import ppvector from "../assets/images/ppvector.svg";
import dd2 from "../assets/images/dd2.svg";
import logout from "../assets/images/logout.svg";
import { Cartreducer } from "../usereducer/Cartreducer";
import login from "../components/Login";
import Login from "./auth/Login";
import Register from "./Register";

const Navbarwf = () => {
  const [tampil, setShow] = useState(false);
  const [regist, setregist] = useState(false);
  // validasi navbar
  const [isLogin, setLogin] = useState(false);
  const [userRole, setuserRole] = useState("");

  // state from cart order
  const [totalCart, dispatch] = useContext(Cartreducer);

  const navigate = useNavigate();
  const a = "/cart";
  const b = "/gas-buy";

  return (
    <Navbar style={{ backgroundColor: "#FFC700" }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo1} alt="" className="ms-2" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <div className="d-flex">
            {!isLogin ? (
              <>
                <div>
                  <button
                    className="me-3 btn btn-dark px-4"
                    onClick={() => setShow(true)}
                  >
                    Login
                  </button>
                </div>
                <div>
                  <button
                    className="me-3 btn btn-dark px-4"
                    onClick={() => setregist(true)}
                  >
                    Register
                  </button>
                </div>
              </>
            ) : userRole == "user" ? (
              <>
                <div>
                  <Link to={totalCart <= 0 ? b : a}>
                    <img src={keranjang} alt="" className="mt-3 " />
                    <Badge
                      className="position-absolute rounded mt-2"
                      bg="danger"
                    >
                      {totalCart <= 0 ? 0 : totalCart}
                    </Badge>
                  </Link>
                </div>
                <div>
                  <Dropdown>
                    <Dropdown.Toggle variant="none" id="dropdown-basic">
                      <img
                        src={pp}
                        alt=""
                        style={{ width: "45px" }}
                        className="ms-3"
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link to="/profile-partner">
                          <img
                            src={ppvector}
                            alt=""
                            style={{ width: "30px" }}
                            className="me-2"
                          />
                          <span className="text-dark">Profile Partner</span>
                        </Link>
                      </Dropdown.Item>

                      <div>
                        <hr />
                      </div>

                      <Dropdown.Item
                        onClick={() => {
                          setLogin(false);
                          navigate("/");
                        }}
                      >
                        <img
                          src={logout}
                          alt=""
                          style={{ width: "30px" }}
                          className="me-2"
                        />
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </>
            ) : (
              <div>
                <Dropdown>
                  <Dropdown.Toggle variant="none" id="dropdown-basic">
                    <img
                      src={pp}
                      alt=""
                      style={{ width: "45px" }}
                      className="ms-3"
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link to="/profile-partner">
                        <img
                          src={ppvector}
                          alt=""
                          style={{ width: "30px" }}
                          className="me-2"
                        />
                        <span className="text-dark">Profile Partner</span>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/add-product">
                        <img
                          src={dd2}
                          alt=""
                          style={{ width: "30px" }}
                          className="mt-2 me-2  "
                        />
                        <span className="text-dark">Add Product</span>
                      </Link>
                    </Dropdown.Item>

                    <div>
                      <hr />
                    </div>

                    <Dropdown.Item
                      onClick={() => {
                        navigate("/");
                        setLogin(false);
                      }}
                    >
                      <img
                        src={logout}
                        alt=""
                        style={{ width: "30px" }}
                        className="me-2"
                      />
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
      <Login
        show={tampil}
        setShow={setShow}
        setShowRegister={setregist}
        setIsLogin={setLogin}
        setUserRole={setuserRole}
      />
      <Register show={regist} setShow={setregist} setShowLogin={setShow} />
    </Navbar>
  );
};

export default Navbarwf;
