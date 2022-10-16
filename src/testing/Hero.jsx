import React from "react";
import { Row, Col } from "react-bootstrap";
import hero from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section>
      <div style={{ backgroundColor: "#FFC700", height: "90vh" }}>
        <div>
          <Row className="container d-flex justify-content-center align-items-center ">
            <Col>
              <h2>are you hungry? makannnn</h2>
              <h2>Express Home Delivery</h2>

              <Row>
                <Col>
                  <div
                    className="mt-2 me-3 "
                    style={{
                      backgroundColor: "#433434",
                      width: "150px",
                      height: "3px",
                    }}
                  ></div>
                </Col>
                <Col>
                  <p>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col className="align-items-center">
              <img src={hero} alt="" />
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Hero;
