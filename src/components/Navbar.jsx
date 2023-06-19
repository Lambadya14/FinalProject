import React, { useEffect } from "react";
import { Navbar, Nav, Container, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, getMe } from "../redux/actions/authActions";

function Homepage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe(null, null, null));
  }, [dispatch]);

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
          <Nav className="w-50">
            <Form className="form-search w-100 mx-auto">
              <Form.Control
                type="search"
                placeholder="Cari disini .."
                aria-label="Search"
              />
            </Form>
          </Nav>

          <Nav className="d-flex justify-content-end gap-2">
            {isLoggedIn ? (
              <>
                <Button
                  onClick={() => {
                    dispatch(logout(navigate));
                  }}
                  as={Link}
                  to={"/"}
                  style={{ background: "#7126B5" }}
                  className="d-flex align-items-center justify-content-between border-0 rounded-3"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
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
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Homepage;
