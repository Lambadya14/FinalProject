import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function Homepage() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img src={require("../assets/img/tiketku.svg").default} alt="tiketkuSVG" />
          </Navbar.Brand>
          <Nav className="d-flex justify-content-end gap-2">
            <Button
              style={{ background: "#7126B5" }}
              className="d-flex align-items-center justify-content-between border-0 rounded-3"
            >
               Login
            </Button>
            <Button
              style={{ background: "#7126B5" }}
              className="d-flex align-items-center justify-content-between border-0 rounded-3"
            >
               Register
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Homepage;
