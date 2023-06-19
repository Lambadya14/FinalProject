import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./pencarian.css";
import { Link } from "react-router-dom";

const Schedule = () => {
  return (
    <div className="bg-detail pt-5 pb-4">
      <Container className="">
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <h5 className="mb-4">Detail Penerbangan</h5>
            <Row>
              <Col
                sm={9}
                className="rounded-4 my-1 py-2 px-2 bg-purple text-white  "
              >
                <div className="d-flex h-100">
                  <Link to={"/"}>
                    <button className="bg-transparent border-0">
                      <img src="../assets/img/fi_arrow-left.svg" alt="" />
                    </button>
                  </Link>
                  <div className=" d-flex  ">
                    <h6 className="my-auto fw-semibold">JKT</h6>
                    <h6 className="mx-1 my-auto fw-semibold">-</h6>
                    <h6 className="my-auto fw-semibold">MLB</h6>
                    <h6 className="mx-1 my-auto fw-semibold">-</h6>
                    <h6 className="my-auto fw-semibold">2 Penumpang</h6>
                    <h6 className="mx-1 my-auto fw-semibold">-</h6>
                    <h6 className="my-auto fw-semibold">Economy</h6>
                  </div>
                </div>
              </Col>
              <Col className="rounded-4 my-1 ms-1 bg-green">
                <button className=" h-100 w-100 text-white bg-transparent border-0 ">
                  <h6 className="my-auto fw-semibold">Ubah Pencarian</h6>
                </button>
              </Col>
            </Row>
            <Row xs="auto mt-3 mx-auto">
              <Col className="  rounded-3 px-2 mx-auto border">
                <button className="w-100 h-100 bg-transparent border-0">
                  <h6 className="fw-bold">Selasa</h6>
                  <h6 className="fw-normal fs-12 date">12/12/2001</h6>
                </button>
              </Col>
              <Col className="  rounded-3 px-2 mx-auto border">
                <button className="w-100 h-100 bg-transparent border-0">
                  <h6 className="fw-bold">Selasa</h6>
                  <h6 className="fw-normal fs-12 date">12/12/2001</h6>
                </button>
              </Col>
              <Col className="  rounded-3 px-2 mx-auto bg-purple">
                <button className="w-100 h-100 bg-transparent border-0">
                  <h6 className="fw-semibold text-white">Selasa</h6>
                  <h6 className="fw-normal fs-12 text-white date">
                    12/12/2001
                  </h6>
                </button>
              </Col>
              <Col className="  rounded-3 px-2 mx-auto border">
                <button className="w-100 h-100 bg-transparent border-0">
                  <h6 className="fw-bold">Selasa</h6>
                  <h6 className="fw-normal fs-12 date">12/12/2001</h6>
                </button>
              </Col>
              <Col className="  rounded-3 px-2 mx-auto border">
                <button className="w-100 h-100 bg-transparent border-0">
                  <h6 className="fw-bold">Selasa</h6>
                  <h6 className="fw-normal fs-12 date">12/12/2001</h6>
                </button>
              </Col>
              <Col className="  rounded-3 px-2 mx-auto border">
                <button className="w-100 h-100 bg-transparent border-0">
                  <h6 className="fw-bold">Selasa</h6>
                  <h6 className="fw-normal fs-12 date">12/12/2001</h6>
                </button>
              </Col>
              <Col className="  rounded-3 px-2 mx-auto border">
                <button className="w-100 h-100 bg-transparent border-0">
                  <h6 className="fw-bold">Selasa</h6>
                  <h6 className="fw-normal fs-12 date">12/12/2001</h6>
                </button>
              </Col>
              <Col className="  rounded-3 px-2 mx-auto border">
                <button className="w-100 h-100 bg-transparent border-0">
                  <h6 className="fw-bold">Selasa</h6>
                  <h6 className="fw-normal fs-12 date">12/12/2001</h6>
                </button>
              </Col>
            </Row>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Schedule;
