import React from "react";
import { Modal, Button } from "react-bootstrap";

const OrderModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Compra Exitosa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        ¡Tu compra ha finalizado con éxito! Gracias por tu pedido.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderModal;
