import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "../assets/css/Login.css";

const ResetPassword = () => {
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
            <h3 className="title-login">Reset Password</h3>
            <Form className=" mt-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Masukkan Password Baru</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Masukkan Password"
                  style={{ borderRadius: "15px", height: "50px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <div class="d-flex justify-content-between">
                  <Form.Label>Ulangi Password Baru</Form.Label>
                </div>
                <Form.Control
                  type="password"
                  placeholder="Masukkan Password"
                  style={{ borderRadius: "15px", height: "50px" }}
                />
              </Form.Group>
              <button type="submit" className="login w-100">
                Simpan
              </button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;
