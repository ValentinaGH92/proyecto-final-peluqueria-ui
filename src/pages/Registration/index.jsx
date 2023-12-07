import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import createNewUser from "../../services/users/createNewUser";
import ModalCreateUser from "../../components/Registration/ModalCreateUser";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [usuario, setUsuario] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Datos del usuario:", usuario);

    const data = await createNewUser(usuario);

    console.log("data: ", data);
  };

  const handleCloseModal = () => {
    navigate("/store");
    setShowModal(false);
  };

  const handleShowModal = () => setShowModal(true);

  return (
    <Container>
      <ModalCreateUser show={showModal} handleClose={handleCloseModal} />
      <div className="my-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre"
              name="name"
              value={usuario.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="my-1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu email"
              name="email"
              value={usuario.email}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formContraseña" className="my-1">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              name="password"
              value={usuario.password}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="my-3"
            onClick={handleShowModal}
          >
            Registrarse
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Registration;
