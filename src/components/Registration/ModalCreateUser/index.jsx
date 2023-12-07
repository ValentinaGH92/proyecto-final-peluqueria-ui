import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalCreateUser = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registro exitoso!</Modal.Title>
      </Modal.Header>
      <Modal.Body>¡Ya hemos registrado tu cuenta!</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCreateUser;
