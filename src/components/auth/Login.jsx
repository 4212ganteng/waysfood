import React, { useState } from "react";
import Formatoms from "../Formatoms";
import { User } from "../../dumy/User";
import { Button, Form, Modal } from "react-bootstrap";
const Login = ({
  show,
  setShow,
  setShowRegister,
  isLogin,
  setIsLogin,
  setUserRole,
}) => {
  const handleClose = () => setShow(false);

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
    role: "user",
  });

  function successLogin(email, password) {
    let statusMessage;
    const emailCheck = User.filter((field) => field.email === email);

    if (emailCheck.length === 0) {
      statusMessage = "Email belum terdaftar";
      return {
        status: false,
        message: statusMessage,
      };
    }

    const result = User.filter((field) => field.password === password);

    if (result.length === 0) {
      statusMessage = "Password Anda Salah";
      return {
        status: false,
        message: statusMessage,
      };
    }
    statusMessage = "Login success";
    return {
      status: true,
      message: statusMessage,
      user: result[0],
    };
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <div className="text-yellow m-3">
              <h2>Login</h2>
            </div>
            <Formatoms
              label="Email"
              type="email"
              placeholder="Email"
              value={userLogin.email}
              onChange={(e) => {
                setUserLogin({ ...userLogin, email: e.target.value });
              }}
            />
            <Formatoms
              label="Password"
              type="password"
              placeholder="Password"
              value={User.password}
              onChange={(e) =>
                setUserLogin({ ...userLogin, password: e.target.value })
              }
            />
          </Form>
          <Button
            onClick={() => {
              let hasLogin = successLogin(userLogin.email, userLogin.password);
              if (hasLogin.status) {
                console.log("success login");
              } else {
                console.log("failed login");
              }
              setUserRole(hasLogin.user.role);
              setIsLogin(true);
              console.log(hasLogin.user.role);

              setShow(false);
            }}
            className="btn-order btn-nav px-5"
          >
            Login
          </Button>
          <p className="mt-3">
            Don't have an account ? click
            <span
              className="fw-bold"
              onClick={() => {
                setShow(false);
                setShowRegister(true);
              }}
            >
              Here
            </span>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
