import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Des from "../components/Des";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Container>
        <Row>
          <Col>
            <Des />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
