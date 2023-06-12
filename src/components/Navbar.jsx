import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src={require("../assets/img/AirTix.svg").default}
              alt="AirTix.svg"
              style={{
                top: "70px",
                left: "70px",
                width: "85px",
                height: "85px",
              }}
            />
          </Navbar.Brand>
          <Nav className="d-flex justify-content-end gap-2">
            <Button
              as={Link}
              to={"/Login"}
              style={{ background: "#7126B5" }}
              className="d-flex align-items-center justify-content-between border-0 rounded-3"
            >
              Login
            </Button>
            <Button
              as={Link}
              to={"/Register"}
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
