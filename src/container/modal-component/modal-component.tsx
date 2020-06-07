import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalComponent: React.FC<{ showModal: boolean }> = ({ showModal }) => {
  const [showM, setShowM] = useState(showModal);

  const handleClose = () => setShowM(false);
  // const handleShow = () => setShowM(true);

  return (
    <>
      <Modal
        show={showM}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
