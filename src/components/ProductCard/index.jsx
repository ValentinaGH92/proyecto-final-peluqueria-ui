import React from "react";
import { Card, Button } from "react-bootstrap";
import { useCartContext } from "../../context/cart";

const ProductCard = ({ product }) => {
  const { cart, setCart } = useCartContext();

  console.log("product: ", product);
  const { img_url, name, price } = product;

  const hanlderAddToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div className="col-md-3 mb-4">
      <Card>
        <Card.Img variant="top" src={img_url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Price: ${price}</Card.Text>
          <Button variant="primary" onClick={hanlderAddToCart}>
            Añadir al carrito
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
