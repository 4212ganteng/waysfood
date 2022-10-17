import React, { useContext } from "react";
import { bensu as menus } from "../../../dumy/bensu/menus";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Cartreducer } from "../../../usereducer/Cartreducer";

const Bensudb = ({ a, b }) => {
  document.title = "MENU | BENSU";

  const [totalCart, dispatch] = useContext(Cartreducer);

  return (
    <div className="container my-5 ">
      <h2 className="pt-5">{b ? b : "Geprek Bensu, Menus"}</h2>
      <Row xs={1} md={4} className="g-4 mt-3">
        {menus.map((menu, index) => (
          <Col>
            <Card key={index} className="h-100">
              <Card.Img variant="top" className="p-2" src={menu.image} />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{menu.name}</Card.Title>
                <Card.Text className="text-danger">Rp.{menu.price}</Card.Text>
                <Button
                  variant="warning"
                  className="w-100"
                  onClick={() => dispatch("add")}
                >
                  {a ? a : "Order"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Bensudb;
