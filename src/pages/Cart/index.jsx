import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CartListing from "../../components/Cart/CartListing";
import OrderSummary from "../../components/Cart/OrderSummary";

const Cart = () => {
  return (
    <Container className="mt-5">
      <h1>Carrito</h1>
      <Row>
        <Col md={8}>
          <CartListing />
        </Col>
        <Col md={4}>
          <OrderSummary />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
