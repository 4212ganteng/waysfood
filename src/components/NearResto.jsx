import React from "react";
import { near as restos } from "../dumy/RestoNear";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const NearResto = () => {
  return (
    <div className="container my-5">
      <h3 className=" my-5">Restaurant Near You</h3>
      <Row className="g-4">
        {restos.map((item, index) => (
          <Col lg={3} md={6}>
            <Card className="w-100 h-100" key={index}>
              <Link to="/bensu-menus">
                <Card.Img variant="top" className="p-2" src={item.image} />
                <Card.Body>
                  <Card.Title className="text-dark">{item.name}</Card.Title>
                  <Card.Text className="text-dark">{item.distance}</Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NearResto;
