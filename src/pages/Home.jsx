import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Container>
        <Row>
          <Col>
            <b>Destinasi Favorit</b>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex gap-3 p-3">
            <Button style={{ background: "#7126B5", border: "0" }}>
              <AiOutlineSearch />
              Semua
            </Button>
            <Button
              style={{ background: "#E2D4F0", border: "0", color: "#3C3C3C" }}
            >
              <AiOutlineSearch />
              Asia
            </Button>
            <Button
              style={{ background: "#E2D4F0", border: "0", color: "#3C3C3C" }}
            >
              <AiOutlineSearch />
              Amerika
            </Button>
            <Button
              style={{ background: "#E2D4F0", border: "0", color: "#3C3C3C" }}
            >
              <AiOutlineSearch />
              Australia
            </Button>
            <Button
              style={{ background: "#E2D4F0", border: "0", color: "#3C3C3C" }}
            >
              <AiOutlineSearch />
              Eropa
            </Button>
            <Button
              style={{ background: "#E2D4F0", border: "0", color: "#3C3C3C" }}
            >
              <AiOutlineSearch />
              Afrika
            </Button>
          </Col>
        </Row>
        <div className="d-flex gap-3">
          <Card style={{ width: "13rem" }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="img"
            />

            <Card.Body>
              <Card.Title>Jakarta to Bangkok</Card.Title>
              <Card.Text>AirAsia</Card.Text>
              <Card.Text>20 - 30 Maret 2023</Card.Text>
              <Card.Text>
                Mulai dari IDR <span style={{ color: "red" }}>950.000</span>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "13rem" }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="img"
            />

            <Card.Body>
              <Card.Title>Jakarta to Bangkok</Card.Title>
              <Card.Text>AirAsia</Card.Text>
              <Card.Text>20 - 30 Maret 2023</Card.Text>
              <Card.Text>
                Mulai dari IDR <span style={{ color: "red" }}>950.000</span>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "13rem" }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="img"
            />

            <Card.Body>
              <Card.Title>Jakarta to Bangkok</Card.Title>
              <Card.Text>AirAsia</Card.Text>
              <Card.Text>20 - 30 Maret 2023</Card.Text>
              <Card.Text>
                Mulai dari IDR <span style={{ color: "red" }}>950.000</span>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "13rem" }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="img"
            />

            <Card.Body>
              <Card.Title>Jakarta to Bangkok</Card.Title>
              <Card.Text>AirAsia</Card.Text>
              <Card.Text>20 - 30 Maret 2023</Card.Text>
              <Card.Text>
                Mulai dari IDR <span style={{ color: "red" }}>950.000</span>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "13rem" }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="img"
            />

            <Card.Body>
              <Card.Title>Jakarta to Bangkok</Card.Title>
              <Card.Text>AirAsia</Card.Text>
              <Card.Text>20 - 30 Maret 2023</Card.Text>
              <Card.Text>
                Mulai dari IDR <span style={{ color: "red" }}>950.000</span>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "13rem" }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="img"
            />

            <Card.Body>
              <Card.Title>Jakarta to Bangkok</Card.Title>
              <Card.Text>AirAsia</Card.Text>
              <Card.Text>20 - 30 Maret 2023</Card.Text>
              <Card.Text>
                Mulai dari IDR <span style={{ color: "red" }}>950.000</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default Home;
