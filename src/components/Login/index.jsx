import React, { useState } from "react";
import { Modal, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import login from "../../services/users/login";

const Login = ({ show, onHide }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = { email, password };
    try {
      const isLogged = await login(userData);

      if (isLogged) onHide();
    } catch (error) {
      setError(
        "Error al iniciar sesión. Verifica tu correo electrónico y contraseña."
      );

      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };

  const handleCloseTooltip = () => {
    setError(null);
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="my-1">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-error">{error}</Tooltip>}
            show={!!error}
            onHide={handleCloseTooltip}
          >
            <Button variant="primary" type="submit" className="my-3">
              Iniciar sesión
            </Button>
          </OverlayTrigger>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
