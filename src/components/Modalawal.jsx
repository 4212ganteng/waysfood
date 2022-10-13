import { Modal } from "react-bootstrap";
import Login from "./Login";

const Modalawal = ({ abc, setShow, a }) => {
  const handleClose = () => setShow(false);
  // handlenav

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Modal show={abc} onHide={handleClose}>
        <Login a={a} setShow={setShow} />
      </Modal>
    </>
  );
};

export default Modalawal;
