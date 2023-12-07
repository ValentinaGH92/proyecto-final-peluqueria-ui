import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CartListing from "../../components/Cart/CartListing";
import OrderSummary from "../../components/Cart/OrderSummary";

const Cart = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <h2>Carrito</h2>
          <CartListing />
        </Col>
        <Col md={4}>
          <h3>Resumen de la compra</h3>
          <OrderSummary />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
