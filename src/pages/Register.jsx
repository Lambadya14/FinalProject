import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/Register.css";

const Register = () => {
  const [] = useState(false);

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col className="bg-color d-flex justify-content-center align-items-center">
          <img
            src={require("../assets/img/AirTix.svg").default}
            fluid
            style={{
              top: "200px",
              left: "85px",
              width: "300px",
              height: "200px",
            }}
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center bg-body">
          <div className="w-75">
            <h3 className="title-register">Register</h3>
            <Form className="mt-4">
              <Form.Group className="mb-3">
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nama Lengkap"
                  style={{ borderRadius: "15px", height: "50px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Example: react@gmail.com"
                  style={{ borderRadius: "15px", height: "50px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nomor Telepon</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="+628"
                  style={{ borderRadius: "15px", height: "50px" }}
                />
              </Form.Group>
              <Form.Group className="mb-5">
                <Form.Label>Buat Password</Form.Label>
                <Form.Control
                  placeholder="Buat Password"
                  style={{ borderRadius: "15px", height: "50px" }}
                />
              </Form.Group>
              <button type="submit" className="register w-100">
                Register
              </button>
              <div className="d-flex justify-content-center mt-3">
                <Form.Text>
                  Sudah Punya Akun ?
                  <Link to="/Login" className="ms-2 text-color text">
                    Masuk di Sini
                  </Link>
                </Form.Text>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;