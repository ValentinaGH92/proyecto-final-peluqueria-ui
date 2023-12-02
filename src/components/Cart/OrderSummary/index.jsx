import React from "react";
import { Card, Button } from "react-bootstrap";
import { useCartContext } from "../../../context/cart";
import { getTotalPrice } from "../../../utils/priceFormater";

const OrderSummary = () => {
  const { cart } = useCartContext();

  console.log("cart: ", cart);
  return (
    <Card className="text-center p-3 shadow-sm rounded">
      <Card.Body>
        <h4>Order Summary</h4>
        <p className="mb-2">Total Items: {cart.length}</p>
        <p className="mb-4">Total: ${getTotalPrice(cart)}</p>
        <Button variant="primary" block>
          Checkout
        </Button>
      </Card.Body>
    </Card>
  );
};

export default OrderSummary;
