import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo1 from "../assets/images/logo1.svg";
import { Link } from "react-router-dom";
import Modalawal from "./Modalawal";
import { useState } from "react";
import ModalRegis from "./ModalRegis";
import keranjang from "../assets/images/keranjang.svg";
import pp from "../assets/images/ppnavbar.svg";

const Navbarwf = () => {
  const [show, setShow] = useState(false);
  const [regist, setregist] = useState(false);
  // validasi navbar
  const [isLogin, setLogin] = useState(false);

  return (
    <Navbar style={{ backgroundColor: "#FFC700" }} className="mb-5">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            WaysFood
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
            ) : (
              <>
                <div>
                  <img src={keranjang} alt="" className="mt-2" />
                </div>
                <div>
                  <img
                    src={pp}
                    alt=""
                    style={{ width: "45px" }}
                    className="ms-3"
                  />
                </div>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
      <Modalawal show={show} setShow={setShow} a={setLogin} />
      <ModalRegis pregist={regist} psetregist={setregist} />
    </Navbar>
  );
};

export default Navbarwf;
