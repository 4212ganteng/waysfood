import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Formatoms from "./Formatoms";

function Register({ show, setShow, setShowLogin }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form>
            <div className="text-yellow m-3">
              <h2>Register</h2>
            </div>
            <div>
              <Formatoms label="Email" type="email" placeholder="Email" />
              <Formatoms
                label="password"
                type="password"
                placeholder="password"
              />
              <Formatoms
                label="Full Name"
                type="text"
                placeholder="Full Name"
              />
              <Form.Select aria-label="Default select example m-3">
                <option>Gender</option>
                <option value="1">Laki-Laki</option>
                <option value="2">Perempuan</option>
              </Form.Select>
              <Formatoms
                label="Phone Number"
                type="number"
                placeholder="Phone Number"
                className="mt-3"
              />
              <Form.Select aria-label="Default select example m-3">
                <option hidden>Role</option>
                <option value="1">User</option>
                <option value="2">Patner</option>
              </Form.Select>
            </div>
          </form>
          <Button
            onClick={() => setShow(false)}
            className="btn-order btn-nav mt-3"
          >
            Register
          </Button>
          <p className="mt-3">
            Already have an account ? Klik{" "}
            <span
              className="fw-bold"
              onClick={() => {
                setShow(false);
                setShowLogin(true);
              }}
            >
              Here
            </span>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Register;
