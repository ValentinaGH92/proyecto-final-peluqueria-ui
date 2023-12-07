import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useCartContext } from "../../../context/cart";
import { getTotalPrice } from "../../../utils/priceFormater";
import OrderModal from "../OrderModal";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const { cart, setCart } = useCartContext();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const totalPrice = getTotalPrice(cart);

  const handleCloseModal = () => {
    setCart([]);

    navigate("/store");
    setShowModal(false);
  };

  const handleShowModal = () => setShowModal(true);

  return (
    <Card className=" p-3 shadow-sm rounded">
      <Card.Body>
        <p className="mb-2 text-left">{`Productos (${cart.length})`}</p>
        <div className="d-flex justify-content-between">
          <div>
            <p className="mb-4 text-left">Total:</p>
          </div>
          <div>
            <p className="mb-4 text-right">{totalPrice}</p>
          </div>
        </div>
        <Button
          variant="primary"
          block
          className="w-100"
          onClick={handleShowModal}
        >
          Terminar Orden
        </Button>
      </Card.Body>
      <OrderModal show={showModal} handleClose={handleCloseModal} />
    </Card>
  );
};

export default OrderSummary;
