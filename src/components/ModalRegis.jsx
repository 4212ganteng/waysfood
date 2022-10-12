import { Modal } from "react-bootstrap";
import Register from "./Register";

const ModalRegis = ({ pregist, psetregist }) => {
  const handleClose = () => psetregist(false);
  return (
    <>
      <Modal show={pregist} onHide={handleClose}>
        <div>
          <Register />
        </div>
      </Modal>
    </>
  );
};

export default ModalRegis;
