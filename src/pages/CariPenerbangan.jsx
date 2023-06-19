import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Schedule from "../components/Pencarian/Schedule";
import ResultSearch from "../components/Pencarian/ResultSearch";
import CardFilter from "../components/Pencarian/Card";
import { Col, Container, Row } from "react-bootstrap";
import ModalFilter from "../components/Pencarian/ModalFilter";

const CariPenerbangan = () => {
  return (
    <>
      <Navbar />
      <Schedule />
      <Container>
        <Row className="my-3">
          <Col sm={9}></Col>
          <Col cm={1}>
            <ModalFilter />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col sm={3}>
            <CardFilter />
          </Col>
          <Col sm={7}>
            
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default CariPenerbangan;
