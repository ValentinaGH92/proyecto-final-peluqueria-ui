import { Container, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import "./styles.css";
import { useEffect, useState } from "react";
import getProducts from "../../services/products/getProducts";

const Store = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsService = async () => {
      const dataProducts = await getProducts();

      setProducts(dataProducts);
    };

    getProductsService();
  }, []);

  // Supongamos que tienes un array de productos
  // const products = [
  //   {
  //     id: 1,
  //     image: "URL de la imagen 1",
  //     description: "Descripción del producto 1",
  //     price: 20.99,
  //   },
  //   {
  //     id: 2,
  //     image: "URL de la imagen 2",
  //     description: "Descripción del producto 2",
  //     price: 15.49,
  //   },
  //   {
  //     id: 1,
  //     image: "URL de la imagen 1",
  //     description: "Descripción del producto 1",
  //     price: 20.99,
  //   },
  //   {
  //     id: 2,
  //     image: "URL de la imagen 2",
  //     description: "Descripción del producto 2",
  //     price: 15.49,
  //   },
  //   {
  //     id: 1,
  //     image: "URL de la imagen 1",
  //     description: "Descripción del producto 1",
  //     price: 20.99,
  //   },
  //   {
  //     id: 2,
  //     image: "URL de la imagen 2",
  //     description: "Descripción del producto 2",
  //     price: 15.49,
  //   },
  //   // ... más productos
  // ];

  return (
    <Container className="container-store">
      <Row>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default Store;
