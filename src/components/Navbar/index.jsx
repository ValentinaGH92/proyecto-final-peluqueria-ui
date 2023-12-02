import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./styles.css";
// import { useCart } from "../../context/cart";
import { useState } from "react";
import Login from "../Login";
import CartIcon from "./Cart";

const PeluNav = () => {
  const [showLogin, setShowLogin] = useState(false);
  // const { cart } = useCart();

  const userName = sessionStorage.getItem("userName");

  const handleShowLogin = () => setShowLogin(true);
  const handleHideLogin = () => setShowLogin(false);

  const logout = () => {
    sessionStorage.setItem("utid", "");
    sessionStorage.setItem("userName", "");

    window.location.reload();
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" className="icon-pelu">
          Navbar
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/store">Tienda</Nav.Link>
          <Nav.Link href="/us">Nosotros</Nav.Link>
        </Nav>

        <Nav className="ms-auto">
          {!!userName ? (
            <>
              <Nav.Link>{`Hola ${userName}`}</Nav.Link>
              <Nav.Link onClick={logout}>Cerrar Sesion</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link onClick={handleShowLogin}>Iniciar sesion</Nav.Link>
              <Nav.Link href="/registration">Crea tu cuenta</Nav.Link>
            </>
          )}
        </Nav>
        <CartIcon />
      </Container>

      <Login show={showLogin} onHide={handleHideLogin} />
    </Navbar>
  );
};

export default PeluNav;
