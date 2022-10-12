import { Modal } from "react-bootstrap";
import Login from "./Login";

const Modalawal = ({ show, setShow, a }) => {
  const handleClose = () => setShow(false);
  // handlenav

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Modal show={show} onHide={handleClose}>
        <Login a={a} />
      </Modal>
    </>
  );
};

export default Modalawal;
